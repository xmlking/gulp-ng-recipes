'use strict';

process.env.NODE_CONFIG_DIR = 'gulp/config';

var args = require('yargs').argv;
global.env = process.env.NODE_ENV = args.env || process.env.NODE_ENV || 'dev';
console.info('Using Env:', env);

//import config from 'config';
var config = require('config');

console.info('Loading gulp config from:');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = config.util.getConfigSources()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var conf = _step.value;

    console.info('\t' + conf.name);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator['return']) {
      _iterator['return']();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

;