/* globals require, exports */

'use strict';

// gulp plugins
var gulp     = require('gulp'),
gutil        = require('gulp-util'),
es           = require('event-stream'),
sass         = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
jshint       = require('gulp-jshint'),
concat = require('gulp-concat'),
runSequence = require('run-sequence'),
clean        = require('gulp-clean'),
connect      = require('gulp-connect'),
browserify   = require('gulp-browserify'),
usemin       = require('gulp-usemin'),
imagemin     = require('gulp-imagemin'),
uglify = require('gulp-uglify'),
minifyCSS = require('gulp-minify-css'),
rename = require('gulp-rename');

gulp.task('scripts', function() {
  return gulp.src([
  	'app/vendors/jquery/dist/jquery.js',
    'app/vendors/jquery.stellar/jquery.stellar.js',
  	'app/vendors/bootstrap/dist/js/bootstrap.js', 
  	'app/src/*.js'])
    .pipe(concat('app.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('./public/javascripts'))
    //.pipe(rename('all.min.js'))
    //.pipe(uglify())
    //.pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
    return gulp.src(['./app/vendors/bootstrap/dist/css/bootstrap.min.css','./app/styles/app.scss'])
      .pipe(concat('styles.css'))
      .pipe(sass())
      //.pipe(minifyCSS())
      .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch('app/vendors/*/*.min.js', ['scripts']);
  gulp.watch('app/src/*.js', ['scripts']);
  gulp.watch('app/styles/*.*scss', ['styles']);
});


gulp.task('default', ['scripts', 'watch', 'styles']);