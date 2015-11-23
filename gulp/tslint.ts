import  * as gulp from 'gulp';
import  * as tslint from 'gulp-tslint';
import  * as iff from 'gulp-if';
import  * as cached from 'gulp-cached';
import  bs from './server';
import  * as config from 'config';

let src = config.get<string>('scripts.src');

gulp.task('tslint', () => {
  bs.notify('This message will only last a second', 1000);
  return gulp.src(src)
    .pipe(cached('tslint'))
    .pipe(tslint())
    .pipe(
      iff(bs.active,
        tslint.report('prose', {emitError: false}),
        tslint.report('prose')
      )
    )
    .pipe(iff(bs.active, bs.stream()));
});

