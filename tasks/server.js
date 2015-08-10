import gulp from 'gulp';
import browserSync from 'browser-sync';
import {CONFIG, options} from './globals.js';

const bs = browserSync.create('Static Server');

//middleware
const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST', 'OPTIONS');
  next();
};

gulp.task('serve', ['sass'], () => {
  let ops = options('browserSync');
  ops.middleware = cors;
  bs.init(ops);

  gulp.watch(CONFIG.html.src, bs.reload);
  gulp.watch(CONFIG.sass.src, ['sass']);
  gulp.watch(CONFIG.typescript.src, ['tslint']);
  gulp.watch(CONFIG.images.src, ['images']);
});

export default bs;


