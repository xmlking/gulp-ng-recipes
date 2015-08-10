import gulp from 'gulp';
import eslint from 'gulp-eslint';
import iff from 'gulp-if';
import cached from 'gulp-cached';

import {CONFIG, options} from './globals.js';
import bs from './server.js';
import {ErrorHandler} from './errors';


gulp.task('eslint', () => {
  return gulp.src(CONFIG.scripts.src)
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
  return gulp.src(CONFIG.scripts.src)
    .pipe(cached('es6scripts'))
    .pipe(iff(bs.active, bs.stream()))
});


// alias
gulp.task('lintjs', ['eslint']);
gulp.task('scripts', ['es6scripts']);


