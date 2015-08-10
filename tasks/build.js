import gulp from 'gulp';
import del from 'del';
import jspm from 'jspm';
import runSequence from 'run-sequence';
import {CONFIG, options} from './globals.js';


gulp.task('clean', (cb) => {
  del(['.tmp', 'dist'], {dot: true}, cb);
});

// Scan your HTML for assets & optimize them
gulp.task('html', () => {
  gulp.src('app/index.html')
    .pipe(replace('jspm_packages/system.js', 'build.js'))
    .pipe(replace('<script src="config.js"></script>', ''))
    .pipe(replace('<script>System.import(\'app\');</script>', ''))
    .pipe(gulp.dest(global.paths.dist));
});

gulp.task('fonts', () => {
  return gulp.src(['app/assets/fonts/**'])
    .pipe(gulp.dest('dist/assets/fonts'))
});

gulp.task('copy', () => {
  return gulp.src([
    'app/assets/*',
    '!app/*.html'
  ], {dot: true})
    .pipe(gulp.dest('dist'))
});


gulp.task('bundle', () => {
  jspm.setPackagePath('.');
  return jspm.bundle('app/app.ts', 'dist/build.js', { mangle: false })
});

gulp.task('default', ['clean'], cb => {
  runSequence(
    'sass',
    ['tslint', 'html', 'scripts', 'images', 'fonts', 'copy'],
    'generate-service-worker',
    cb
  );
});
