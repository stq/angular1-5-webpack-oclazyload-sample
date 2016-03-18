var gulp = require("gulp"),
    webpack = require("webpack"),
    path = require("path"),
    webpackConfig = require("../webpack.config.js"),
    WebpackDevServer = require("webpack-dev-server"),
    http = require('http'),
    _ = require('lodash'),
    proxySettings = require('./../proxy-settings.js'),
    pathmap = require('./../pathmap.js');

var webpackDevserverConfig = {
    contentBase: pathmap.root,
    proxy: {
        '/api/*': {
            target: proxySettings.settings.apiHost
        },
        '/cdn/*': {
            target: proxySettings.settings.componentHosts.cdn,
            rewrite: function(req) {
                if( proxySettings.isLocalhost(proxySettings.settings.componentHosts.cdn) ) {
                    req.url = req.url.replace(/^\/cdn/, '');
                }
            }
        }
    }
};

gulp.task("dev", function () {
    var compiler = webpack(webpackConfig),
        server = new WebpackDevServer(compiler, webpackDevserverConfig);

    server.listen(8123, "localhost", function (err) {
        if (err) throw err;
    });

    server.app.get('/stop-devserver', function(req, res){
        res.send('stopping devserver');
        process.exit();
    });
})

gulp.task('stop-devserver', function(done){
    http.get("http://localhost:8123/stop-devserver", function() {
        done();
    }).on('error', function(e) {
        done();
    });
});

