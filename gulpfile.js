'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
//const browserSync = require('browser-sync').create();
//const runSequence = require('run-sequence');

//gulp.src('web/assets/sass/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('web/assets/css')).pipe(browserSync.reload({stream: true}));

function buildStyles() {
  return gulp.src("./web/assets/sass/main.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("./web/assets/css"));
}

exports.buildStyles = buildStyles;
//Watch not working*
exports.watch = function () {
  gulp.watch('./web/assets/sass/*.scss', buildStyles);
};
exports.default = exports.watch;