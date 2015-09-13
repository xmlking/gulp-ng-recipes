import gulp from 'gulp';
import replace from 'gulp-replace-task';

import config from 'config';

let {src, options, dest} = config.get('html');

gulp.task('html', () => {

  options.patterns.push({
    match: '{{hash}}',
    replacement: Math.round(new Date() / 1000)
  });

  return gulp.src(src)
    .pipe(replace(options))
    .pipe(gulp.dest(dest));
});
