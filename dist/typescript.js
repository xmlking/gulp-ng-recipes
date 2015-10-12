import * as gulp from 'gulp';
import * as ts from 'gulp-typescript';
import * as sourcemaps from 'gulp-sourcemaps';
import * as config from 'config';
let dest = config.get('scripts.dest');
gulp.task('typescript', function () {
    let tsProject = ts.createProject('tsconfig.json', { sortOutput: true });
    let tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    tsResult.dts
        .pipe(gulp.dest(dest));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest));
});
