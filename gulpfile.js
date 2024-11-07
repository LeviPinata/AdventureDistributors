'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');

gulp.task('sass', function() {
  return gulp.src('web/assets/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('web/assets/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    proxy:'ecommerce.ddev.site'
  });
});

gulp.task('watch',['browserSync', 'sass'], function() {
  gulp.watch('web/assets/sass/*.scss', ['sass']);
  gulp.watch('templates/*.twig', browserSync.reload); 
});

//Default
gulp.task('default', function (callback) {
  runSequence(['sass', 'browserSync', 'watch'],
    callback
  );
});