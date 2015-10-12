import  * as gulp from 'gulp';
import  * as replace from 'gulp-replace-task';

import  * as config from 'config';

let {src, options, dest} = config.get<{src:string,options:{patterns:[{match:string,replacement:string}]},dest:string}>('html');

gulp.task('html', () => {

  options.patterns.push({
    match: '{{hash}}',
    replacement: Math.round( Date.now() / 1000).toString()
  });

  return gulp.src(src)
    .pipe(replace(options))
    .pipe(gulp.dest(dest));
});
