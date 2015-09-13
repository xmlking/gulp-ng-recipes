import gulp from 'gulp';
import tslint from 'gulp-tslint';
import ts from 'gulp-typescript';
import sourcemaps from 'gulp-sourcemaps';
import iff from 'gulp-if';
import cached from 'gulp-cached';
import bs from './server.js';
import config from 'config';

let {src, dest} = config.get('scripts');

gulp.task('tslint', () => {
  bs.notify("This message will only last a second", 1000);
  return gulp.src(src)
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
    .pipe(gulp.dest(dest));
  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest));
});

// alias
gulp.task('lintjs', ['tslint']);
gulp.task('scripts', ['tsscripts']);
