import gulp from 'gulp';
import eslint from 'gulp-eslint';
import iff from 'gulp-if';
import cached from 'gulp-cached';

import {CONFIG, options} from './globals.js';
import bs from './server.js';
import {ErrorHandler} from './errors';


gulp.task('eslint', () => {
  return gulp.src(CONFIG.scripts.src)
    .pipe(cached('jshint'))
    .pipe(eslint())
    .pipe(eslint.format('stylish'))
    .pipe(iff(!bs.active, eslint.failOnError())
    )
});

gulp.task('es6scripts', () => {

});

// alias
gulp.task('lintjs', ['eslint']);
gulp.task('scripts', ['es6scripts']);


