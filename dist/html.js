var gulp = require('gulp');
var replace = require('gulp-replace-task');
var config = require('config');
let { src, options, dest } = config.get('html');
gulp.task('html', () => {
    options.patterns.push({
        match: '{{hash}}',
        replacement: Math.round(Date.now() / 1000).toString()
    });
    return gulp.src(src)
        .pipe(replace(options))
        .pipe(gulp.dest(dest));
});
