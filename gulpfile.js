var requireDir = require('require-dir'),
    gulp = require('gulp');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', [ 'dist' ], function () {
});

process.on('uncaughtException', function (err) {
    console.log('A global exception occured:', err);
    console.log('Restart recommended');
})