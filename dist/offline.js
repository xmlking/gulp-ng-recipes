var gulp = require('gulp');
var swPrecache = require('sw-precache');
var path = require('path');
var config = require('config');
gulp.task('generate-service-worker', function (callback) {
    swPrecache.write(path.join(config.get('swPrecache.dest'), 'service-worker.js'), config.get('swPrecache.options'), callback);
});
