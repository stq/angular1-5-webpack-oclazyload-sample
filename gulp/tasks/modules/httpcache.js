var _ = require('lodash'),
    hash = require('object-hash'),
    fs = require('fs');

var cacheFolder = './cache';
if( fs.existsSync(cacheFolder) && !fs.lstatSync(cacheFolder).isDirectory() ) throw path.resolve(cacheFolder) + 'is file, must be folder';
if( !fs.existsSync(cacheFolder) ) fs.mkdirSync(cacheFolder);

function clearTransitiveHeaders(headers){
    headers = _.clone(headers);
    delete headers.date;
    delete headers.cache;
    delete headers['cache-control'];
    return headers;
}

function packageReq(req, reqData){
    return {
        url: req.url,
        method: req.method,
        headers: clearTransitiveHeaders(req.headers),
        data: reqData && reqData.toString() || null
    }
}

function packageReqRes(key, reqPackage, res, resData){
    return {
        req: reqPackage,
        key: key,
        res: {
            status: res.statusCode,
            headers: res.headers,
            data: resData && resData.toString() || null
        }
    }
}

function get(req, reqData){
    var reqPackage = packageReq(req, reqData),
        key = hash.MD5(reqPackage),
        filePath = cacheFolder + '/' + key + '.cache.json';
    console.log('Checking cache for', key);
    return fs.existsSync(filePath) && JSON.parse(fs.readFileSync(filePath));
}

function put(req, reqData, res, resData){
    var reqPackage = packageReq(req, reqData),
        key = hash.MD5(reqPackage),
        reqResPackage = packageReqRes(key, reqPackage, res, resData),
        filePath = cacheFolder + '/' + key + '.cache.json';
    console.log('Created cache entry at ' + filePath);
    fs.writeFileSync(filePath, JSON.stringify(reqResPackage, undefined, 2));
}

module.exports = {
    get: get,
    put: put
};
