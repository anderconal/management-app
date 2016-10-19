var gulp = require('gulp'),
    gutil = require('gulp-util');

// Create a Browsersync instance.
var browserSync = require('browser-sync').create();

// Create a Gulp Sass instance.
var sass = require('gulp-sass');

/* Create a task which call the tasks I want to execute when I use the gulp
serve command */
gulp.task('serve', ['browserSync', 'sass', 'watcher']);

/* Create a task which will be watching every change of every file inside my
app */
gulp.task('watcher', ['browserSync', 'sass'], function() {
  gulp.watch('app/styles/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/**/*.js', browserSync.reload);
});

// Create a task to enable Gulp to spin up a server using Browsersync
gulp.task('browserSync', function() {
  browserSync.init({
    port: 4000,
    server: {
      baseDir: 'app'
    }
  });
});

// Create a task which will compile Sass into CSS
gulp.task('sass', function() {
  return gulp.src('app/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
