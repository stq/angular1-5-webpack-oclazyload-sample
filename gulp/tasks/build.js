var gulp = require('gulp'),
    pathmap = require('../pathmap.js'),
    latestTag = require('git-latest-tag'),
    path = require('path'),
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

gulp.task('dist', [ 'build' ], function (cb) {
    latestTag(function (err, tag) {
        if (err) {
            console.err(err);
            cb();
            return;
        }
        gulp.src(pathmap.dist.from)
            .pipe(gulp.dest(path.join(pathmap.dist.to, tag)))
            .on('end', cb);
    })
});