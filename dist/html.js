'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpReplaceTask = require('gulp-replace-task');

var _gulpReplaceTask2 = _interopRequireDefault(_gulpReplaceTask);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _config$get = _config2['default'].get('html');

var src = _config$get.src;
var options = _config$get.options;
var dest = _config$get.dest;

_gulp2['default'].task('html', function () {

  options.patterns.push({
    match: '{{hash}}',
    replacement: Math.round(new Date() / 1000)
  });

  return _gulp2['default'].src(src).pipe((0, _gulpReplaceTask2['default'])(options)).pipe(_gulp2['default'].dest(dest));
});