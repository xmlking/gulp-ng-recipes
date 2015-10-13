var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cached = require('gulp-cached');
var iff = require('gulp-if');
var server_ts_1 = require('./server.ts');
var config = require('config');
var _a = config.get('images'), src = _a.src, options = _a.options, dest = _a.dest;
gulp.task('images', function () {
    return gulp.src(src)
        .pipe(cached('images'))
        .pipe(imagemin(options))
        .pipe(gulp.dest(dest))
        .pipe(iff(server_ts_1.default.active, server_ts_1.default.stream()));
});
