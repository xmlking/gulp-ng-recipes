import  * as gulp from 'gulp';
import  * as sass from 'gulp-sass';
import  * as cached from 'gulp-cached';
import  * as sourcemaps from 'gulp-sourcemaps';
//import  autoprefixer from 'gulp-autoprefixer';
import  * as autoprefixer from 'gulp-autoprefixer';
import  * as iff from 'gulp-if';
//import debug from 'gulp-debug';
import bs from './server.ts';
import  * as config from 'config';

let {src, options, dest} = config.get<{src:string,options:{},dest:string}>('sass');

//TODO minifyCss
gulp.task('sass', () => {
  return gulp.src(src)
    .pipe(cached('sass'))
    .pipe(sourcemaps.init())
    .pipe(sass(options).on('error', sass.logError))
    .pipe(autoprefixer(config.get('sass.autoprefixer')))
    //.pipe(if('*.css', minifyCss()))
    .pipe(sourcemaps.write(config.get('sourcemaps.options')))
    .pipe(gulp.dest(dest))
    .pipe(iff(bs.active, bs.stream()));
});

