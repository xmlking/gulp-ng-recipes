import gulp from 'gulp';
import del from 'del';
import jspm from 'jspm';
import replace from 'gulp-replace';
import runSequence from 'run-sequence';
import config from 'config';

let {src, temp, dest, extras} = config.get('build');


gulp.task('clean', (cb) => {
  return del([temp, dest], {dot: true}, cb);
});

gulp.task('lint', ['lintjs', 'lintsass']);

gulp.task('html', () => {
  return gulp.src('src/index.html')
    .pipe(replace('jspm_packages/system.js', 'build.js'))
    .pipe(gulp.dest(dest));
});

gulp.task('extras', () => {
  return gulp.src(extras, {dot: true})
    .pipe(gulp.dest(dest))
});

gulp.task('bundle', ['sass'], () => {
  jspm.setPackagePath('.');
  return jspm.bundle('src', 'dist/build.js', { mangle: false })
});

gulp.task('default', cb => {
  runSequence(
    'clean', 'lint', 'bundle',
    ['images', 'fonts', 'extras', 'html'],
    'generate-service-worker',
    cb
  );
});
