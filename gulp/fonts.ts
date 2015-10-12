import  * as gulp from 'gulp';
//import flatten from 'gulp-flatten';
import  * as config from 'config';

let {src, dest} = config.get<{src:string, dest:string}>('fonts');

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
    .pipe(gulp.dest(dest));
});
