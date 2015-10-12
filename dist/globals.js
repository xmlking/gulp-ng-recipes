process.env.NODE_CONFIG_DIR = 'gulp/config';
const args = require('yargs').argv;
global.env = process.env.NODE_ENV = args.env || process.env.NODE_ENV || 'dev';
console.info('Using Env:', env);
let config = require('config');
console.info('Loading gulp config from:');
for (let conf of config.util.getConfigSources()) {
    console.info(`\t${conf.name}`);
}
;
//# sourceMappingURL=globals.js.map