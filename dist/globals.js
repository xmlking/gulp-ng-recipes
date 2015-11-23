process.env.NODE_CONFIG_DIR = 'gulp/config';
var args = require('yargs').argv;
global.env = process.env.NODE_ENV = args.env || process.env.NODE_ENV || 'dev';
console.info('Using Env:', env);
var config = require('config');
console.info('Loading gulp config from:');
for (var _i = 0, _a = config.util.getConfigSources(); _i < _a.length; _i++) {
    var conf = _a[_i];
    console.info("\t" + conf.name);
}
;
