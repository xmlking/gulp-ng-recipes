var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var iff = require('gulp-if');
var server_ts_1 = require('./server.ts');
var config = require('config');
var _a = config.get('sass'), src = _a.src, dest = _a.dest;
gulp.task('sass', function () {
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
        .pipe(iff(server_ts_1.default.active, server_ts_1.default.stream()));
});
