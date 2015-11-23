var gulp = require('gulp');
var del = require('del');
var jspm = require('jspm');
var runSequence = require('run-sequence');
var config = require('config');
var _a = config.get('build'), src = _a.src, temp = _a.temp, dest = _a.dest, extras = _a.extras;
gulp.task('clean', function () {
    return del([temp, dest], { dot: true });
});
gulp.task('lint', ['tslint', 'sasslint']);
gulp.task('extras', function () {
    return gulp.src(extras, { dot: true })
        .pipe(gulp.dest(dest));
});
gulp.task('bundle', ['sass'], function () {
    jspm.setPackagePath('.');
    return jspm.bundle(src, 'dist/build.js', { mangle: false });
});
gulp.task('default', function (cb) {
    runSequence('clean', 'lint', 'bundle', ['images', 'fonts', 'extras', 'html'], 'generate-service-worker', cb);
});
