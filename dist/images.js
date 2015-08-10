'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpImagemin = require('gulp-imagemin');

var _gulpImagemin2 = _interopRequireDefault(_gulpImagemin);

var _globalsJs = require('./globals.js');

_gulp2['default'].task('images', function () {
  return _gulp2['default'].src(_globalsJs.CONFIG.images.src).pipe((0, _gulpImagemin2['default'])((0, _globalsJs.options)('images'))).pipe(_gulp2['default'].dest(_globalsJs.CONFIG.images.dest));
});