var gulp = require('gulp');
var sass = require('gulp-sass');
var cached = require('gulp-cached');
var sourcemaps = require('gulp-sourcemaps');
//import  autoprefixer from 'gulp-autoprefixer';
var autoprefixer = require('gulp-autoprefixer');
var iff = require('gulp-if');
//import debug from 'gulp-debug';
var server_ts_1 = require('./server.ts');
var config = require('config');
var _a = config.get('sass'), src = _a.src, options = _a.options, dest = _a.dest;
//TODO minifyCss
gulp.task('sass', function () {
    return gulp.src(src)
        .pipe(cached('sass'))
        .pipe(sourcemaps.init())
        .pipe(sass(options).on('error', sass.logError))
        .pipe(autoprefixer(config.get('sass.autoprefixer')))
        .pipe(sourcemaps.write(config.get('sourcemaps.options')))
        .pipe(gulp.dest(dest))
        .pipe(iff(server_ts_1.default.active, server_ts_1.default.stream()));
});
