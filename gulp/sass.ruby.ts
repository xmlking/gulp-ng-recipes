import  * as gulp from 'gulp';
import  * as sass from 'gulp-ruby-sass';
import  * as sourcemaps from 'gulp-sourcemaps';
import  * as autoprefixer from 'gulp-autoprefixer';
import  * as iff from 'gulp-if';
//import debug from 'gulp-debug';
import bs from './server';
import  * as config from 'config';

let {src, dest} = config.get<{src:string, dest:string}>('sass');

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
      .pipe(iff(bs.active, bs.stream()));
});

