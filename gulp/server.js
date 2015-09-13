import gulp from 'gulp';
import browserSync from 'browser-sync';
import spa from 'browser-sync-spa';
import proxyMiddleware from 'http-proxy-middleware';

import config from 'config';

const bs = browserSync.create('Static Server');

// middleware
let {context, options} = config.get('proxy');

// enable HTML5 mode
bs.use(spa({
  selector: "[ng-app]"
}));

gulp.task('serve', ['sass'], () => {
  let ops =config.get('browserSync.options');
  if(context) {
    ops.middleware = [proxyMiddleware(context, options)];
  }
  bs.init(ops);

  gulp.watch(config.get('html.src'), bs.reload);
  gulp.watch(config.get('sass.src'), ['lintsass','sass']);
  gulp.watch(config.get('scripts.src'), ['lintjs']);
  gulp.watch(config.get('images.src'), ['images']);
});

export default bs;
