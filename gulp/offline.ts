/**
 * Note: Make sure your site is served using HTTPS!
 */
import  * as gulp from 'gulp';
import  * as swPrecache from 'sw-precache';
import  * as path from 'path';
import  * as config from 'config';

gulp.task('generate-service-worker', callback => {
  swPrecache.write(path.join(config.get('swPrecache.dest'), 'service-worker.js'), config.get<{}>('swPrecache.options'), callback);
});
