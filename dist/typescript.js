var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var config = require('config');
var dest = config.get('scripts.dest');
gulp.task('typescript', function () {
    var tsProject = ts.createProject('tsconfig.json', { sortOutput: true });
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    tsResult.dts
        .pipe(gulp.dest(dest));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest));
});
