var gulp = require("gulp"),
    webpack = require("webpack"),
    webpackConfig = require("../webpack.config.js"),
    WebpackDevServer = require("webpack-dev-server"),
    args = require('yargs').argv,
    http = require('http'),
    proxy = require('./modules/proxy.js'),
    _ = require('lodash'),
    proxySettings = require('../proxy-settings.js'),
    pathmap = require('../pathmap.js');

if( args.apicache ) console.log('Api Cache is ENABLED');

var webpackDevserverConfig = {
    contentBase: pathmap.root,
    proxy: {
        '/api/*': {
            target: proxySettings.apiHost
        }
    }
};

gulp.task("dev", function () {

    var compiler = webpack(webpackConfig),
        server = new WebpackDevServer(compiler, webpackDevserverConfig);

    server.listen(8100, "localhost", function (err) {
        if (err) throw err;
    });

    server.app.get('/stop', function(req, res){
        res.send('Stopping server...');
        process.exit();
    });

    server.app.all('/api/*', proxy(proxySettings.apiHost, '/api/*', 80, 443, args.apicache));
});


process.on('uncaughtException', function (err) {
    console.log('A global exception occured:', err);
    console.log('Restart recommended');
})