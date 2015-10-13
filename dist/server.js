var gulp = require('gulp');
var browserSync = require('browser-sync');
var spa = require('browser-sync-spa');
var proxyMiddleware = require('http-proxy-middleware');
var config = require('config');
var bs = browserSync.create('Static Server');
var _a = config.get('proxy'), context = _a.context, options = _a.options;
bs.use(spa({
    selector: '[ng-app]'
}));
gulp.task('serve', ['sass'], function () {
    var ops = config.get('browserSync.options');
    if (context) {
        ops.middleware = [proxyMiddleware(context, options)];
    }
    bs.init(ops);
    gulp.watch(config.get('html.src'), bs.reload);
    gulp.watch(config.get('sass.src'), ['lintsass', 'sass']);
    gulp.watch(config.get('scripts.src'), ['tslint']);
    gulp.watch(config.get('images.src'), ['images']);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bs;
