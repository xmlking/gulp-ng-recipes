import gulp from 'gulp';
import eslint from 'gulp-eslint';
import iff from 'gulp-if';
import cached from 'gulp-cached';
import bs from './server.js';
import config from 'config';

let {src, options, dest} = config.get('scripts');

gulp.task('eslint', () => {
  return gulp.src(src)
    .pipe(cached('eslint'))
    .pipe(eslint())
    .pipe(eslint.format('stylish'))
    .pipe(
      iff(bs.active,
        bs.stream()),
        eslint.failOnError()
      )
});

gulp.task('es6scripts', () => {
  return gulp.src(src)
    .pipe(cached('es6scripts'))
    .pipe(iff(bs.active, bs.stream()))
});

// alias
gulp.task('lintjs', ['eslint']);
gulp.task('scripts', ['es6scripts']);


