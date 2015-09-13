/**
 * Note: Make sure your site is served using HTTPS!
 */
import gulp from 'gulp';
import swPrecache from 'sw-precache';
import path from 'path';
import config from 'config';

gulp.task('generate-service-worker', callback => {
  swPrecache.write(path.join(config.get('swPrecache.dest'), 'service-worker.js'), config.get('swPrecache.options'), callback);
});
