/**
 * Note: Make sure your site is served using HTTPS!
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _swPrecache = require('sw-precache');

var _swPrecache2 = _interopRequireDefault(_swPrecache);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _globalsJs = require('./globals.js');

_gulp2['default'].task('generate-service-worker', function (callback) {
  var rootDir = optimize ? 'dist' : 'app';
  _swPrecache2['default'].write(_path2['default'].join(rootDir, 'service-worker.js'), (0, _globalsJs.options)('swPrecache'), callback);
});