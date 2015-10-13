var gulp = require('gulp');
var replace = require('gulp-replace-task');
var config = require('config');
var _a = config.get('html'), src = _a.src, options = _a.options, dest = _a.dest;
gulp.task('html', function () {
    options.patterns.push({
        match: '{{hash}}',
        replacement: Math.round(Date.now() / 1000).toString()
    });
    return gulp.src(src)
        .pipe(replace(options))
        .pipe(gulp.dest(dest));
});
