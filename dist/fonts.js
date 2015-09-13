'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

//import flatten from 'gulp-flatten';

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _config$get = _config2['default'].get('fonts');

var src = _config$get.src;
var options = _config$get.options;
var dest = _config$get.dest;

/**
 * The 'fonts' task copies fonts to `/dist` directory.
 *
 * @return {Stream}
 */
//gulp.task('fonts', () => {
//  return gulp.src(src)
//    .pipe(flatten(options))
//    .pipe(gulp.dest(dest))
//});

_gulp2['default'].task('fonts', function () {
  return _gulp2['default'].src(src).pipe(_gulp2['default'].dest(dest));
});