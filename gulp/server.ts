import  * as gulp from 'gulp';
import  * as browserSync from 'browser-sync';
import  * as spa from 'browser-sync-spa';
//import  ProxyMiddleware from 'http-proxy-middleware';
import  * as proxyMiddleware from 'http-proxy-middleware';
import  * as config from 'config';

const bs = browserSync.create('Static Server');

// middleware
let {context, options} = config.get<{context:string, options:any}>('proxy');

// enable HTML5 mode
bs.use(spa({
  selector: '[ng-app]'
}));

gulp.task('serve', ['sass'], () => {
  let ops =config.get<any>('browserSync.options');
  if(context) {
    ops.middleware = [proxyMiddleware(context, options)];
  }
  bs.init(ops);
  gulp.watch(config.get<string>('html.src'), bs.reload);
  gulp.watch(config.get<string[]>('sass.src'), ['lintsass','sass']);
  gulp.watch(config.get<string>('scripts.src'), ['tslint']);
  gulp.watch(config.get<string>('images.src'), ['images']);
});

export default bs;
