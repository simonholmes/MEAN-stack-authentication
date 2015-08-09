var gulp    = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify  = require('gulp-uglify');

gulp.task('scripts', function() {
  gulp.src(['./app_client/**/*.js', '!./app_client/**/*.test.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('./app.min.js'))
      .pipe(uglify({mangle: true}))
      .pipe(gulp.dest('public'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
  gulp.watch('/app_client/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);