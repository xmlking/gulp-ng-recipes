import * as gulp from 'gulp';
import * as del from 'del';
import * as jspm from 'jspm';

import  * as runSequence from 'run-sequence';
import  * as config from 'config';

let {src, temp, dest, extras} = config.get<{src:string, temp:string, dest:string, extras:string[]}>('build');


gulp.task('clean', () => {
  return del([temp, dest], {dot: true});
});

gulp.task('lint', ['tslint', 'sasslint']);

gulp.task('extras', () => {
  return gulp.src(extras, {dot: true})
    .pipe(gulp.dest(dest));
});

gulp.task('bundle', ['sass'], () => {
  jspm.setPackagePath('.');
  return jspm.bundle(src, 'dist/build.js', { mangle: false });
});

gulp.task('default', cb => {
  runSequence(
    'clean', 'lint', 'bundle',
    ['images', 'fonts', 'extras', 'html'],
    'generate-service-worker',
    cb
  );
});
