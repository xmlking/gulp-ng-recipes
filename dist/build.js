'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

var _jspm = require('jspm');

var _jspm2 = _interopRequireDefault(_jspm);

var _runSequence = require('run-sequence');

var _runSequence2 = _interopRequireDefault(_runSequence);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _config$get = _config2['default'].get('build');

var src = _config$get.src;
var temp = _config$get.temp;
var dest = _config$get.dest;
var extras = _config$get.extras;

_gulp2['default'].task('clean', function (cb) {
  return (0, _del2['default'])([temp, dest], { dot: true }, cb);
});

_gulp2['default'].task('lint', ['lintjs', 'lintsass']);

_gulp2['default'].task('extras', function () {
  return _gulp2['default'].src(extras, { dot: true }).pipe(_gulp2['default'].dest(dest));
});

_gulp2['default'].task('bundle', ['sass'], function () {
  _jspm2['default'].setPackagePath('.');
  return _jspm2['default'].bundle('src', 'dist/build.js', { mangle: false });
});

_gulp2['default'].task('default', function (cb) {
  (0, _runSequence2['default'])('clean', 'lint', 'bundle', ['images', 'fonts', 'extras', 'html'], 'generate-service-worker', cb);
});