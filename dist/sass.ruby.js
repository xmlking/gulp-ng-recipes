var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var iff = require('gulp-if');
var server_1 = require('./server');
var config = require('config');
let { src, dest } = config.get('sass');
gulp.task('sass', () => {
    return sass(src, {
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
        .pipe(iff(server_1.default.active, server_1.default.stream()));
});
