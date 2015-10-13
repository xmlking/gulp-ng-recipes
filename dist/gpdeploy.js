var deploy = require('gulp-gh-pages');
var gulp = require('gulp');
var config = require('config');
gulp.task('deploy', function () {
    return gulp.src(config.get('deploy.src'))
        .pipe(deploy());
});
