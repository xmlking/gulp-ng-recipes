import  * as deploy from 'gulp-gh-pages';
import  * as gulp from 'gulp';
import  * as config from 'config';

gulp.task('deploy', () => {
  return gulp.src(config.get<string>('deploy.src'))
    .pipe(deploy());
});
