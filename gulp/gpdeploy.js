import deploy from 'gulp-gh-pages';
import gulp from 'gulp';
import config from 'config';

gulp.task('deploy', () => {
  return gulp.src(config.get('deploy.src'))
    .pipe(deploy());
});
