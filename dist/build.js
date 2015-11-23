var gulp = require('gulp');
var del = require('del');
var jspm = require('jspm');
var runSequence = require('run-sequence');
var config = require('config');
let { src, temp, dest, extras } = config.get('build');
gulp.task('clean', () => {
    return del([temp, dest], { dot: true });
});
gulp.task('lint', ['tslint', 'sasslint']);
gulp.task('extras', () => {
    return gulp.src(extras, { dot: true })
        .pipe(gulp.dest(dest));
});
gulp.task('bundle', ['sass'], () => {
    jspm.setPackagePath('.');
    return jspm.bundle(src, 'dist/build.js', { mangle: false });
});
gulp.task('default', cb => {
    runSequence('clean', 'lint', 'bundle', ['images', 'fonts', 'extras', 'html'], 'generate-service-worker', cb);
});
