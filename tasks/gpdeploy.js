import deploy from 'gulp-gh-pages';
import gulp from 'gulp';
import {CONFIG, options} from './globals.js';

gulp.task('deploy', () => {
  return gulp.src(CONFIG.deploy.src)
    .pipe(deploy());
});
