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

var _globalsJs = require('./globals.js');

_gulp2['default'].task('clean', function (cb) {
  (0, _del2['default'])(['.tmp', 'dist'], { dot: true }, cb);
});

// Scan your HTML for assets & optimize them
_gulp2['default'].task('html', function () {
  _gulp2['default'].src('app/index.html').pipe(replace('jspm_packages/system.js', 'build.js')).pipe(replace('<script src="config.js"></script>', '')).pipe(replace('<script>System.import(\'app\');</script>', '')).pipe(_gulp2['default'].dest(global.paths.dist));
});

_gulp2['default'].task('fonts', function () {
  return _gulp2['default'].src(['app/assets/fonts/**']).pipe(_gulp2['default'].dest('dist/assets/fonts'));
});

_gulp2['default'].task('copy', function () {
  return _gulp2['default'].src(['app/assets/*', '!app/*.html'], { dot: true }).pipe(_gulp2['default'].dest('dist'));
});

_gulp2['default'].task('bundle', function () {
  _jspm2['default'].setPackagePath('.');
  return _jspm2['default'].bundle('app/app.ts', 'dist/build.js', { mangle: false });
});

_gulp2['default'].task('default', ['clean'], function (cb) {
  (0, _runSequence2['default'])('sass', ['tslint', 'html', 'scripts', 'images', 'fonts', 'copy'], 'generate-service-worker', cb);
});