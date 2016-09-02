var gulp = require('gulp'),
    _ = require('lodash'),
    webpackConfig = require("../webpack.config.js"),
    webpack = require("webpack");

gulp.task("build", [], function (cb) {
    webpack(webpackConfig, function (err, stats) {
        if (err) throw err;
        console.log("[webpack]", stats.toString({}));
        cb();
    });
});
