import gulp from 'gulp';
import sass from 'gulp-ruby-sass';
import scsslint from 'gulp-scss-lint';
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer';
import iff from 'gulp-if';
//import debug from 'gulp-debug';
import bs from './server.js';
import config from 'config';

let {src, options, dest} = config.get('sass');

// Lint SASS.
gulp.task('lintsass', () => {
  return gulp.src(src)
    .pipe(cached('lintsass'))
    .pipe(scsslint());
});

//TODO minifyCss
gulp.task('sass', () => {

  return sass(src,  {
                        style: 'expanded',
                        precision: 10,
                        sourcemap: true
                      })
      .on('error', sass.logError)
      .pipe(autoprefixer(config.get('sass.autoprefixer')))
      .pipe(sourcemaps.write('.', {
        includeContent: false,
        sourceRoot: '.'
      }))
      .pipe(gulp.dest(dest))
      .pipe(iff(bs.active, bs.stream()))
});

