let gutil = require('gulp-util');

const ERROR_LEVELS = ['error', 'warning'];

const ERROR_COLORS = {
  warning: gutil.colors.yellow,
  error: gutil.colors.red
};

let handleError = (level, error) => {

  let color = ERROR_COLORS[level];

  let msg = color(level.toUpperCase()) + ' triggered by ' + gutil.colors.magenta(error.plugin);

  gutil.beep();
  gutil.log(msg);
  gutil.log(color(error.message));
};

export class ErrorHandler {

  static onError(err) {
    handleError.call(this, 'error', err);
    return this.emit('end');
  }

  static onWarning(err) {
    handleError.call(this, 'warning', err);
    return this.emit('end');
  }

}
