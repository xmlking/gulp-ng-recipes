'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _httpProxy = require('http-proxy');

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

//import historyApiFallback 'connect-history-api-fallback';

var _globalsJs = require('./globals.js');

var bs = _browserSync2['default'].create('Static Server');

// middleware
/**
 * target - The location of your backend
 * prefix - The element in the URL which differentiate between API request and static file request
 */

var _options = (0, _globalsJs.options)('apiProxy');

var target = _options.target;
var prefix = _options.prefix;

var proxy = _httpProxy2['default'].createProxyServer({
  target: target
});

var proxyMiddleware = function proxyMiddleware(req, res, next) {
  if (req.url.indexOf(prefix) !== -1) {
    proxy.web(req, res);
  } else {
    next();
  }
};

var cors = function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST', 'OPTIONS');
  next();
};

_gulp2['default'].task('serve', ['sass'], function () {
  var ops = (0, _globalsJs.options)('browserSync');
  if (target && prefix) {
    ops.middleware = [proxyMiddleware];
  }
  bs.init(ops);

  _gulp2['default'].watch(_globalsJs.CONFIG.html.src, bs.reload);
  _gulp2['default'].watch(_globalsJs.CONFIG.sass.src, ['sass']);
  _gulp2['default'].watch(_globalsJs.CONFIG.scripts.src, ['lintjs']);
  _gulp2['default'].watch(_globalsJs.CONFIG.images.src, ['images']);
});

exports['default'] = bs;
module.exports = exports['default'];