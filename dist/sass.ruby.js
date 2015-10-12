import * as gulp from 'gulp';
import sass from 'gulp-ruby-sass';
import * as sourcemaps from 'gulp-sourcemaps';
import * as autoprefixer from 'gulp-autoprefixer';
import * as iff from 'gulp-if';
import bs from './server.ts';
import * as config from 'config';
let { src, dest } = config.get('sass');
gulp.task('sass', () => {
    return sass(src, {
        style: 'expanded',
        precision: 10,
        sourcemap: true
    })
        .on('error', sass.logError)
        .pipe(autoprefixer(config.get('sass.autoprefixer')))
        .pipe(sourcemaps.write('.', {
        includeContent: false,
        sourceRoot: '.'
    }))
        .pipe(gulp.dest(dest))
        .pipe(iff(bs.active, bs.stream()));
});
