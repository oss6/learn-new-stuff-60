# Day 15: Gulp Component Library

This shows how to build a components library.

```js
const path      = require('path');
const gulp      = require('gulp');
const concat    = require('gulp-concat');
const rename    = require('gulp-rename');
const uglify    = require('gulp-uglify');
const jshint    = require('gulp-jshint');
const foreach   = require('gulp-foreach');
const cleanCSS  = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');

// Paths
const jsFiles = './src/javascript/*.js';
const cssFiles = './src/styles/*.css';

gulp.task('scripts', function () {
  gulp.src(jsFiles)
    .pipe(concat('compo.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(rename('compo-min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));

  gulp.src(jsFiles)
    .pipe(foreach(function (stream, file) {
      const filename = path.basename(file.path);
      const filenameNoExt = filename.slice(0, -3);
      const dest = './dist/' + filenameNoExt;

      return stream.pipe(gulp.dest(dest))
              .pipe(rename(filenameNoExt + '-min.js'))
              .pipe(uglify())
              .pipe(gulp.dest(dest));
    }));
});

gulp.task('styles', function () {
  gulp.src(cssFiles)
    .pipe(concatCss('compo.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(rename('compo-min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));

  gulp.src(cssFiles)
    .pipe(foreach(function (stream, file) {
      const filename = path.basename(file.path);
      const filenameNoExt = filename.slice(0, -4);
      const dest = './dist/' + filenameNoExt;

      return stream.pipe(gulp.dest(dest))
              .pipe(rename(filenameNoExt + '-min.css'))
              .pipe(cleanCSS())
              .pipe(gulp.dest(dest));
    }));
});

gulp.task('markup', function () {
  gulp.src('./src/index.html').pipe(gulp.dest('./dist'));
});

gulp.task('lint', function () {
  gulp.src('./src/javascript/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', [ 'scripts', 'styles', 'markup', 'lint' ]);
```
