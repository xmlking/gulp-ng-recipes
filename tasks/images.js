import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import {CONFIG, options} from './globals.js';

gulp.task('images', () => {
  return gulp.src(CONFIG.images.src)
    .pipe(imagemin(options('images')))
    .pipe(gulp.dest(CONFIG.images.dest));
});
