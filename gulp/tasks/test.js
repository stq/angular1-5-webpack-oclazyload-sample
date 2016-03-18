var gulp = require('gulp'),
    KarmaServer = require('karma').Server,
    protractor = require('gulp-angular-protractor'),
    path = require('path'),
    replace = require('gulp-replace'),
    _ = require('lodash'),
    pathmap = require('../pathmap.js');

gulp.task('test', ['server-webpack-kill', 'server-webpack'], function () {
    setTimeout(function () {
        gulp.start(['unit-test', 'e2e-test']);
    }, 3500);
});

gulp.task('unit-test-watch', function () {
    new KarmaServer({
        configFile: pathmap.karma.config,
        singleRun: false,
        autoWatch: true
    }).start();
});

gulp.task('unit-test', function (done) {
    var server = new KarmaServer({
        configFile: pathmap.karma.config,
        singleRun: true
    }, function (result) {
        console.log('Tests done with code ' + result);
    });
    server.start();
});

gulp.task('e2e-test', [  ], function () {

    gulp.src(pathmap.karma.e2e).pipe(protractor({
            'configFile': pathmap.karma.protractor,
            'autoStartStopServer': true,
            'debug': true
        }))
        .on('error', function (e) {
            console.log(e);
            throw e;
        });
});

gulp.task('e2e-test-standalone', ['stop-devserver'], function(){
    gulp.start('e2e-test-server-start');
});

gulp.task('e2e-test-server-start', ['dev'], function(){
    gulp.start('e2e-test');
});

gulp.task('smoke-test', ['e2e-static-server'], function(){
    gulp.start('e2e-test');
});