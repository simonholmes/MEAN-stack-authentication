var gulp    = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify  = require('gulp-uglify');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var ngHtml2Js = require("gulp-ng-html2js");

gulp.task('scripts', function() {
  gulp.src(['./app_client/**/*.js', '!./app_client/**/*.test.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('./app.min.js'))
      .pipe(uglify({mangle: true}))
      .pipe(gulp.dest('public'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public'));
});

gulp.task('views', function () {
  return gulp.src("./app_client/**/*.html")
    .pipe(ngHtml2Js({
      moduleName: function (file) {
        var pathParts = file.path.split('/');
        var folder = pathParts[pathParts.length - 2];
        return folder.replace(/-[a-z]/g, function (match) {
          return match.substr(1).toUpperCase();
        });
      }
    }))
    .pipe(concat("views.min.js"))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
  watch('./app_client/**/*.html', function () {
    gulp.start('views');
  });
  watch('./app_client/**/*.js', function () {
    gulp.start('scripts');
  });
});

gulp.task('default', ['scripts', 'views', 'watch']);