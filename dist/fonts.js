import * as gulp from 'gulp';
import * as config from 'config';
let { src, dest } = config.get('fonts');
gulp.task('fonts', () => {
    return gulp.src(src)
        .pipe(gulp.dest(dest));
});
