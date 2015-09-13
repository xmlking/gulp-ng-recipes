import gulp from 'gulp';
//import flatten from 'gulp-flatten';
import config from 'config';

let {src, options, dest} = config.get('fonts');

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

gulp.task('fonts', () => {
  return gulp.src(src)
    .pipe(gulp.dest(dest))
});
