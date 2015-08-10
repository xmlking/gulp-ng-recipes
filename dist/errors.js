'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var gutil = require('gulp-util');

var ERROR_LEVELS = ['error', 'warning'];

var ERROR_COLORS = {
  warning: gutil.colors.yellow,
  error: gutil.colors.red
};

var handleError = function handleError(level, error) {

  var color = ERROR_COLORS[level];

  var msg = color(level.toUpperCase()) + ' triggered by ' + gutil.colors.magenta(error.plugin);

  gutil.beep();
  gutil.log(msg);
  gutil.log(color(error.message));
};

var ErrorHandler = (function () {
  function ErrorHandler() {
    _classCallCheck(this, ErrorHandler);
  }

  _createClass(ErrorHandler, null, [{
    key: 'onError',
    value: function onError(err) {
      handleError.call(this, 'error', err);
      return this.emit('end');
    }
  }, {
    key: 'onWarning',
    value: function onWarning(err) {
      handleError.call(this, 'warning', err);
      return this.emit('end');
    }
  }]);

  return ErrorHandler;
})();

exports.ErrorHandler = ErrorHandler;