import * as gulp from 'gulp';
import * as sass from 'gulp-sass';
import * as cached from 'gulp-cached';
import * as sourcemaps from 'gulp-sourcemaps';
import * as autoprefixer from 'gulp-autoprefixer';
import * as iff from 'gulp-if';
import bs from './server.ts';
import * as config from 'config';
let { src, options, dest } = config.get('sass');
gulp.task('sass', () => {
    return gulp.src(src)
        .pipe(cached('sass'))
        .pipe(sourcemaps.init())
        .pipe(sass(options).on('error', sass.logError))
        .pipe(autoprefixer(config.get('sass.autoprefixer')))
        .pipe(sourcemaps.write(config.get('sourcemaps.options')))
        .pipe(gulp.dest(dest))
        .pipe(iff(bs.active, bs.stream()));
});
//# sourceMappingURL=sass.js.map