import * as gulp from 'gulp';
import * as browserSync from 'browser-sync';
import * as spa from 'browser-sync-spa';
import * as proxyMiddleware from 'http-proxy-middleware';
import * as config from 'config';
const bs = browserSync.create('Static Server');
let { context, options } = config.get('proxy');
bs.use(spa({
    selector: '[ng-app]'
}));
gulp.task('serve', ['sass'], () => {
    let ops = config.get('browserSync.options');
    if (context) {
        ops.middleware = [proxyMiddleware(context, options)];
    }
    bs.init(ops);
    gulp.watch(config.get('html.src'), bs.reload);
    gulp.watch(config.get('sass.src'), ['lintsass', 'sass']);
    gulp.watch(config.get('scripts.src'), ['tslint']);
    gulp.watch(config.get('images.src'), ['images']);
});
export default bs;
//# sourceMappingURL=server.js.map