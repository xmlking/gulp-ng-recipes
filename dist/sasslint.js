var gulp = require('gulp');
var cached = require('gulp-cached');
var scsslint = require('gulp-scss-lint');
var config = require('config');
let src = config.get('sass.src');
gulp.task('sasslint', () => {
    return gulp.src(src)
        .pipe(cached('sasslint'))
        .pipe(scsslint());
});
