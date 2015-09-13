'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulpGhPages = require('gulp-gh-pages');

var _gulpGhPages2 = _interopRequireDefault(_gulpGhPages);

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

_gulp2['default'].task('deploy', function () {
  return _gulp2['default'].src(_config2['default'].get('deploy.src')).pipe((0, _gulpGhPages2['default'])());
});