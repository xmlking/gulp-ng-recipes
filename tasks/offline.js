/**
 * Note: Make sure your site is served using HTTPS!
 */
import gulp from 'gulp';
import swPrecache from 'sw-precache';
import path from 'path';
import {CONFIG, options} from './globals.js';

gulp.task('generate-service-worker', callback => {
  const rootDir = optimize ? 'dist' : 'app';
  swPrecache.write(path.join(rootDir, 'service-worker.js'), options('swPrecache'), callback);
});
