import gulp from 'gulp';
import httpProxy from 'http-proxy';
import browserSync from 'browser-sync';
//import historyApiFallback 'connect-history-api-fallback';
import {CONFIG, options} from './globals.js';

const bs = browserSync.create('Static Server');

// middleware
/**
 * target - The location of your backend
 * prefix - The element in the URL which differentiate between API request and static file request
 */
const {target, prefix} = options('apiProxy');
const proxy = httpProxy.createProxyServer({
  target: target
});

const proxyMiddleware = (req, res, next) => {
  if (req.url.indexOf(prefix) !== -1) {
    proxy.web(req, res);
  } else {
    next();
  }
};

const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST', 'OPTIONS');
  next();
};


gulp.task('serve', ['sass'], () => {
  let ops = options('browserSync');
  if(target && prefix) {
    ops.middleware = [proxyMiddleware];
  }
  bs.init(ops);

  gulp.watch(CONFIG.html.src, bs.reload);
  gulp.watch(CONFIG.sass.src, ['sass']);
  gulp.watch(CONFIG.scripts.src, ['lintjs']);
  gulp.watch(CONFIG.images.src, ['images']);
});

export default bs;
