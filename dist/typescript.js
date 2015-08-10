'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpTslint = require('gulp-tslint');

var _gulpTslint2 = _interopRequireDefault(_gulpTslint);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

var _gulpCached = require('gulp-cached');

var _gulpCached2 = _interopRequireDefault(_gulpCached);

var _globalsJs = require('./globals.js');

var _serverJs = require('./server.js');

var _serverJs2 = _interopRequireDefault(_serverJs);

var _errors = require('./errors');

var _gulpSourcemaps = require('gulp-sourcemaps');

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _gulpTypescript = require('gulp-typescript');

var _gulpTypescript2 = _interopRequireDefault(_gulpTypescript);

var _tsconfigJson = require('../tsconfig.json');

var _tsconfigJson2 = _interopRequireDefault(_tsconfigJson);

_gulp2['default'].task('tslint', function () {
  _serverJs2['default'].notify("This message will only last a second", 1000);
  return _gulp2['default'].src(_globalsJs.CONFIG.scripts.src).pipe((0, _gulpCached2['default'])('tslint')).pipe((0, _gulpTslint2['default'])()).pipe((0, _gulpIf2['default'])(_serverJs2['default'].active, _gulpTslint2['default'].report('prose', { emitError: false }), _gulpTslint2['default'].report('prose'))).pipe((0, _gulpIf2['default'])(_serverJs2['default'].active, _serverJs2['default'].stream()));
});

_gulp2['default'].task('tsscripts', function () {
  return _gulp2['default'].src(_tsconfigJson2['default'].filesGlob).pipe(_gulpSourcemaps2['default'].init()).pipe((0, _gulpTypescript2['default'])(_tsconfigJson2['default'].compilerOptions, undefined, _gulpTypescript2['default'].reporter.defaultReporter())).pipe(_gulpSourcemaps2['default'].write()).pipe(_gulp2['default'].dest(_globalsJs.CONFIG.scripts.dest)).pipe((0, _gulpIf2['default'])(_serverJs2['default'].active, _serverJs2['default'].stream()));
});

_gulp2['default'].task('scripts2', function () {
  var tsProject = _gulpTypescript2['default'].createProject('tsconfig.json', { sortOutput: true });
  var tsResult = tsProject.src().pipe(_gulpSourcemaps2['default'].init()).pipe((0, _gulpTypescript2['default'])(tsProject));
  tsResult.dts.pipe(_gulp2['default'].dest(_globalsJs.CONFIG.scripts.dest));
  return tsResult.js.pipe(_gulpSourcemaps2['default'].write()).pipe(_gulp2['default'].dest(_globalsJs.CONFIG.scripts.dest));
});

// alias
_gulp2['default'].task('lintjs', ['tslint']);
_gulp2['default'].task('scripts', ['tsscripts']);