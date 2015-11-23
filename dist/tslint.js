var gulp = require('gulp');
var tslint = require('gulp-tslint');
var iff = require('gulp-if');
var cached = require('gulp-cached');
var server_1 = require('./server');
var config = require('config');
var src = config.get('scripts.src');
gulp.task('tslint', function () {
    server_1.default.notify('This message will only last a second', 1000);
    return gulp.src(src)
        .pipe(cached('tslint'))
        .pipe(tslint())
        .pipe(iff(server_1.default.active, tslint.report('prose', { emitError: false }), tslint.report('prose')))
        .pipe(iff(server_1.default.active, server_1.default.stream()));
});
