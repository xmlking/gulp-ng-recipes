'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

var _browserSyncSpa = require('browser-sync-spa');

var _browserSyncSpa2 = _interopRequireDefault(_browserSyncSpa);

var _httpProxyMiddleware = require('http-proxy-middleware');

var _httpProxyMiddleware2 = _interopRequireDefault(_httpProxyMiddleware);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var bs = _browserSync2['default'].create('Static Server');

// middleware

var _config$get = _config2['default'].get('proxy');

var context = _config$get.context;
var options = _config$get.options;

// enable HTML5 mode
bs.use((0, _browserSyncSpa2['default'])({
  selector: "[ng-app]"
}));

_gulp2['default'].task('serve', ['sass'], function () {
  var ops = _config2['default'].get('browserSync.options');
  if (context) {
    ops.middleware = [(0, _httpProxyMiddleware2['default'])(context, options)];
  }
  bs.init(ops);

  _gulp2['default'].watch(_config2['default'].get('html.src'), bs.reload);
  _gulp2['default'].watch(_config2['default'].get('sass.src'), ['lintsass', 'sass']);
  _gulp2['default'].watch(_config2['default'].get('scripts.src'), ['lintjs']);
  _gulp2['default'].watch(_config2['default'].get('images.src'), ['images']);
});

exports['default'] = bs;
module.exports = exports['default'];