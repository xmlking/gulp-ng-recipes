'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpRubySass = require('gulp-ruby-sass');

var _gulpRubySass2 = _interopRequireDefault(_gulpRubySass);

var _gulpSourcemaps = require('gulp-sourcemaps');

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _gulpAutoprefixer = require('gulp-autoprefixer');

var _gulpAutoprefixer2 = _interopRequireDefault(_gulpAutoprefixer);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

//import debug from 'gulp-debug';

var _serverJs = require('./server.js');

var _serverJs2 = _interopRequireDefault(_serverJs);

var _globalsJs = require('./globals.js');

//TODO minifyCss
_gulp2['default'].task('sass', function () {

  return (0, _gulpRubySass2['default'])(_globalsJs.CONFIG.sass.src, {
    style: 'expanded',
    precision: 10,
    sourcemap: true
  }).on('error', _gulpRubySass2['default'].logError).pipe((0, _gulpAutoprefixer2['default'])(_globalsJs.CONFIG.sass.autoprefixer)).pipe(_gulpSourcemaps2['default'].write('.', {
    includeContent: false,
    sourceRoot: '.'
  })).pipe(_gulp2['default'].dest(_globalsJs.CONFIG.sass.dest)).pipe((0, _gulpIf2['default'])(_serverJs2['default'].active, _serverJs2['default'].stream()));
});