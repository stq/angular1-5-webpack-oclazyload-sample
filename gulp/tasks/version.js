/**
 * Tasks to manage semantic versioning (see http://semver.org/ for details)
 * PATCH: Backwards-compatible bug fixes.
 * MINOR: Backwards-compatible changes.
 * MAJOR: Backward-incompatible changes.
 * IMPORTANT: when pushing to git, use `git push --tags`
 */

var gulp = require('gulp'),
    tag = require('gulp-tag-version'),
    git = require('gulp-git'),
    bump = require('gulp-bump'),
    filter = require('gulp-filter');

gulp.task('patch', [], function () {
    return incrementVersion('patch');
});

gulp.task('minor', [], function(){
    return incrementVersion('minor');
});

gulp.task('major', [], function(){
    return incrementVersion('major');
});

function incrementVersion(importance) {
    return gulp.src(['./package.json'])
        .pipe(bump({type: importance}))
        .pipe(gulp.dest('./'))
        .pipe(git.commit(importance + ' version bump'))
        .pipe(filter('package.json'))
        .pipe(tag());
}