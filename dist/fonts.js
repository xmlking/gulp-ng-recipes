var gulp = require('gulp');
//import flatten from 'gulp-flatten';
var config = require('config');
var _a = config.get('fonts'), src = _a.src, dest = _a.dest;
/**
 * The 'fonts' task copies fonts to `/dist` directory.
 *
 * @return {Stream}
 */
//gulp.task('fonts', () => {
//  return gulp.src(src)
//    .pipe(flatten(options))
//    .pipe(gulp.dest(dest))
//});
gulp.task('fonts', function () {
    return gulp.src(src)
        .pipe(gulp.dest(dest));
});
