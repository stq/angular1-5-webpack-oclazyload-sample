process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var _ = require('lodash'),
    https = require('https'),
    http = require('http'),
    httpcache = require('./httpcache.js');

module.exports = function (remoteHost, path, remotePort, remoteSslPort, useCache, stable_mode) {

    function proxifyCookiesDomain(newHost, headers) {
        if (headers['set-cookie']) {
            _.map(headers['set-cookie'], function (cookie) {
                return cookie.replace(/domain=[^;]*;/, 'domain=.' + newHost + ';').replace('HttpOnly', '');
            });
        }
    }


    return function proxy(req, res, next) {
        var method = req.method,
            secure = req.connection.encrypted;

        console.log('Proxing ' + method + ' ' + req.url + ( secure ? ' (secure)' : ''));

        req.headers.host = remoteHost;
        req.headers['accept-encoding'] = 'identity';

        var reqData = null;
        if (method == 'POST' || method == 'PUT') {
            reqData = [];
            req.on('data', function (chunk) {
                reqData.push(new Buffer(chunk));
            });
            req.on('close', function () {
                console.log('Proxy client has broken connection');
            });
            req.on('end', function () {
                console.log('Proxy client request has received');
                reqData = Buffer.concat(reqData);
                channelRequest();
            });
        } else {
            channelRequest();
        }

        function channelRequest() {

            var cached = useCache && httpcache.get(req, reqData);
                if ( cached && !stable_mode ) {
                    console.log('Using cached response ', cached.key);
                    res.writeHead(cached.res.status, cached.res.headers);
                    cached.res.data && res.write(cached.res.data);
                    res.end();
                } else {

                var options = {
                    host: remoteHost,
                    port: secure ? remoteSslPort : remotePort,
                    path: req.url,
                    method: method,
                    headers: req.headers,
                    accept: '*/*'
                };

                var remoteReq = (secure ? https : http).request(options, function (remoteRes) {
                    proxifyCookiesDomain(req.newHost, remoteRes.headers);

                    var resData = [];
                    remoteRes.on('data', function (chunk) {
                        resData.push(new Buffer(chunk));
                    });

                    remoteRes.on('close', function () {
                        console.log('Remote host connection was abrupted');
                        res.end();
                    });
                    remoteRes.on('end', function () {
                        resData = Buffer.concat(resData);
                        console.log('Remote host response received');

                        if( (remoteRes.statusCode == 500 || remoteRes.statusCode == 404) && stable_mode ){
                            console.log('Remote server returned ' + remoteRes.statusCode + ', using cached response ', res.key);
                            res.writeHead(res.status, res.headers);
                            res.data && res.write(res.data);
                            res.end();
                        } else {
                            if( resData.length ) remoteRes.headers['content-length'] = resData.length;
                            res.writeHead(remoteRes.statusCode, remoteRes.headers);
                            res.write(resData);
                            res.end();
                            useCache && httpcache.put(req, reqData, remoteRes, resData);
                        }

                        next();
                    });

                }).on('error', function (e) {
                    console.error(e.message);
                    res.end();
                });
                if (method == 'POST' || method == 'PUT') {
                    remoteReq.write(reqData);
                }
                remoteReq.end();
            }
        }
    }
};