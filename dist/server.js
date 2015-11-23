var gulp = require('gulp');
var browserSync = require('browser-sync');
var spa = require('browser-sync-spa');
var proxyMiddleware = require('http-proxy-middleware');
var config = require('config');
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
exports.default = bs;
