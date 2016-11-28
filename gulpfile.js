'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('application/sass/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('application/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('application/sass/**/*.scss', ['sass']);
});