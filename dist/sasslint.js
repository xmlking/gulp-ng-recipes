var gulp = require('gulp');
var cached = require('gulp-cached');
var scsslint = require('gulp-scss-lint');
var config = require('config');
var src = config.get('sass.src');
// Lint SASS.
gulp.task('sasslint', function () {
    return gulp.src(src)
        .pipe(cached('sasslint'))
        .pipe(scsslint());
});
