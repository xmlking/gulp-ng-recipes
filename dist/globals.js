'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.options = options;
var CONFIG = require('js-yaml').safeLoad(require('fs').readFileSync('tasks/config.yml', 'utf8'));
exports.CONFIG = CONFIG;
var args = require('yargs').argv;

exports.args = args;
// Get environment, for environment-specific activities
global.env = args.env || process.env.NODE_ENV;
global.optimize = env === 'PROD' || args.optimize;
console.log('Using Env:', env);
console.log('Optimized:', optimize);

function options(type) {
  if (CONFIG[type] && CONFIG[type].options) {
    var opts = CONFIG[type].options;
    var mergedOpts = Object.assign({}, opts, opts[optimize ? 'release' : 'debug']);
    delete mergedOpts.release;
    delete mergedOpts.debug;
    return mergedOpts;
  } else {
    return {};
  }
}