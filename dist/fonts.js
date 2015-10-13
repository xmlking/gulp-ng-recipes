var gulp = require('gulp');
var config = require('config');
var _a = config.get('fonts'), src = _a.src, dest = _a.dest;
gulp.task('fonts', function () {
    return gulp.src(src)
        .pipe(gulp.dest(dest));
});
