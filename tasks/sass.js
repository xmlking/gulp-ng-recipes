import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer';
import iff from 'gulp-if';
//import debug from 'gulp-debug';

import bs from './server.js';
import {CONFIG, options} from './globals.js';


//TODO minifyCss
gulp.task('sass', function() {

  return gulp.src(CONFIG.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass(options('sass')).on('error', sass.logError)) //ErrorHandler.onError
    .pipe(autoprefixer(CONFIG.sass.autoprefixer))
    //.pipe(if('*.css', minifyCss()))
    .pipe(sourcemaps.write(options('sourcemaps')))
    .pipe(gulp.dest(CONFIG.sass.dest))
    //.pipe(debug({title: 'unicorn:'}))
    //.pipe(iff(bs.active,bs.stream({match: "**/*.css"})))
    .pipe(iff(bs.active, bs.stream()))
});
