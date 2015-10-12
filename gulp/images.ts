import  * as gulp from 'gulp';
import  * as imagemin from 'gulp-imagemin';
import  * as cached from 'gulp-cached';
import  * as iff from 'gulp-if';
import bs from './server.ts';
import  * as config from 'config';

// let {src, options, dest} = config.get<{src:string,options:{},dest:string}>('images');
let {src, options, dest} = config.get<{src:string, options:{}, dest:string}>('images');

gulp.task('images', () => {
  return gulp.src(src)
    .pipe(cached('images'))
    .pipe(imagemin(options))
    .pipe(gulp.dest(dest))
    .pipe(iff(bs.active, bs.stream()));
});

