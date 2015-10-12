import  * as gulp from 'gulp';

import  * as cached from 'gulp-cached';
import  * as scsslint from 'gulp-scss-lint';
import  * as config from 'config';

let src = config.get<string>('sass.src');

// Lint SASS.
gulp.task('sasslint', () => {
  return gulp.src(src)
    .pipe(cached('sasslint'))
    .pipe(scsslint());
});

