import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import cached from 'gulp-cached';
import iff from 'gulp-if';
import bs from './server.js';
import config from 'config';

let {src, options, dest} = config.get('images');

gulp.task('images', () => {
  return gulp.src(src)
    .pipe(cached('images'))
    .pipe(imagemin(options))
    .pipe(gulp.dest(dest))
    .pipe(iff(bs.active, bs.stream()));
});

