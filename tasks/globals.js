export const CONFIG = require('js-yaml').safeLoad(require('fs').readFileSync('tasks/config.yml', 'utf8'));
export const args = require('yargs').argv;

// Get environment, for environment-specific activities
global.env  = args.env || process.env.NODE_ENV;
global.optimize = (env === 'PROD' || args.optimize);
console.log('Using Env:', env);
console.log('Optimized:', optimize);

export function options(type) {
  if(CONFIG[type] && CONFIG[type].options) {
    let opts = CONFIG[type].options;
    let mergedOpts = Object.assign({}, opts, opts[optimize ? 'release' : 'debug']);
    delete mergedOpts.release;
    delete mergedOpts.debug;
    return mergedOpts;
  } else {
    return {};
  }
}

