'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpSass = require('gulp-sass');

var _gulpSass2 = _interopRequireDefault(_gulpSass);

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

  return _gulp2['default'].src(_globalsJs.CONFIG.sass.src).pipe(_gulpSourcemaps2['default'].init()).pipe((0, _gulpSass2['default'])((0, _globalsJs.options)('sass')).on('error', _gulpSass2['default'].logError)) //ErrorHandler.onError
  .pipe((0, _gulpAutoprefixer2['default'])(_globalsJs.CONFIG.sass.autoprefixer))
  //.pipe(if('*.css', minifyCss()))
  .pipe(_gulpSourcemaps2['default'].write((0, _globalsJs.options)('sourcemaps'))).pipe(_gulp2['default'].dest(_globalsJs.CONFIG.sass.dest))
  //.pipe(debug({title: 'unicorn:'}))
  //.pipe(iff(bs.active,bs.stream({match: "**/*.css"})))
  .pipe((0, _gulpIf2['default'])(_serverJs2['default'].active, _serverJs2['default'].stream()));
});