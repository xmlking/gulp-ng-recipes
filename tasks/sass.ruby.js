import gulp from 'gulp';
import sass from 'gulp-ruby-sass';
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer';
import iff from 'gulp-if';
//import debug from 'gulp-debug';

import bs from './server.js';
import {CONFIG, options} from './globals.js';


// import scsslint from 'gulp-scss-lint';
// Lint SASS.
gulp.task('lintsass', () => {
  //return gulp.src(CONFIG.sass.src)
  //    .pipe(cache('lintsass'))
  //    .pipe(scsslint());
});

//TODO minifyCss
gulp.task('sass', function() {

  return sass(CONFIG.sass.src,  {
                        style: 'expanded',
                        precision: 10,
                        sourcemap: true
                      })
      .on('error', sass.logError)
      .pipe(autoprefixer(CONFIG.sass.autoprefixer))
      .pipe(sourcemaps.write('.', {
        includeContent: false,
        sourceRoot: '.'
      }))
      .pipe(gulp.dest(CONFIG.sass.dest))
      .pipe(iff(bs.active, bs.stream()))
});

