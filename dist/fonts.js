var gulp = require('gulp');
var config = require('config');
let { src, dest } = config.get('fonts');
gulp.task('fonts', () => {
    return gulp.src(src)
        .pipe(gulp.dest(dest));
});
