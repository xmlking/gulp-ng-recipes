'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpImagemin = require('gulp-imagemin');

var _gulpImagemin2 = _interopRequireDefault(_gulpImagemin);

var _gulpCached = require('gulp-cached');

var _gulpCached2 = _interopRequireDefault(_gulpCached);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

var _serverJs = require('./server.js');

var _serverJs2 = _interopRequireDefault(_serverJs);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _config$get = _config2['default'].get('images');

var src = _config$get.src;
var options = _config$get.options;
var dest = _config$get.dest;

_gulp2['default'].task('images', function () {
  return _gulp2['default'].src(src).pipe((0, _gulpCached2['default'])('images')).pipe((0, _gulpImagemin2['default'])(options)).pipe(_gulp2['default'].dest(dest)).pipe((0, _gulpIf2['default'])(_serverJs2['default'].active, _serverJs2['default'].stream()));
});