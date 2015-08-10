'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpEslint = require('gulp-eslint');

var _gulpEslint2 = _interopRequireDefault(_gulpEslint);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

var _gulpCached = require('gulp-cached');

var _gulpCached2 = _interopRequireDefault(_gulpCached);

var _globalsJs = require('./globals.js');

var _serverJs = require('./server.js');

var _serverJs2 = _interopRequireDefault(_serverJs);

var _errors = require('./errors');

_gulp2['default'].task('eslint', function () {
  return _gulp2['default'].src(_gulpEslint2['default'].scripts.src).pipe((0, _gulpCached2['default'])('jshint')).pipe((0, _gulpEslint2['default'])()).pipe(_gulpEslint2['default'].format('stylish')).pipe((0, _gulpIf2['default'])(!_serverJs2['default'].active, _gulpEslint2['default'].failOnError()));
});

_gulp2['default'].task('es6scripts', function () {});

// alias
_gulp2['default'].task('lintjs', ['eslint']);
_gulp2['default'].task('scripts', ['es6scripts']);