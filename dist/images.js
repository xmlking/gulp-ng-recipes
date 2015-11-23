var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cached = require('gulp-cached');
var iff = require('gulp-if');
var server_1 = require('./server');
var config = require('config');
let { src, options, dest } = config.get('images');
gulp.task('images', () => {
    return gulp.src(src)
        .pipe(cached('images'))
        .pipe(imagemin(options))
        .pipe(gulp.dest(dest))
        .pipe(iff(server_1.default.active, server_1.default.stream()));
});
