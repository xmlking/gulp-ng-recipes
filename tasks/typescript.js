import gulp from 'gulp';
import tslint from 'gulp-tslint';
import ts from 'gulp-typescript';
import sourcemaps from 'gulp-sourcemaps';
import iff from 'gulp-if';
import cached from 'gulp-cached';

import {CONFIG, options} from './globals.js';
import bs from './server.js';
import {ErrorHandler} from './errors';


gulp.task('tslint', () => {
  bs.notify("This message will only last a second", 1000);
  return gulp.src(CONFIG.scripts.src)
    .pipe(cached('tslint'))
    .pipe(tslint())
    .pipe(
      iff(bs.active,
        tslint.report('prose', {emitError: false}),
        tslint.report('prose')
      )
    )
    .pipe(iff(bs.active, bs.stream()));
});

gulp.task('tsscripts', function() {
  let tsProject = ts.createProject('tsconfig.json', { sortOutput: true });
  let tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));
  tsResult.dts
    .pipe(gulp.dest(CONFIG.scripts.dest));
  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(CONFIG.scripts.dest));
});

// alias
gulp.task('lintjs', ['tslint']);
gulp.task('scripts', ['tsscripts']);
