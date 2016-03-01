const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

const src = 'assets';
 
gulp.task('es6', () => {
  return gulp.src(src + '/**/*.es6.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename(path => {
      path.basename = path.basename.slice(0, path.basename.indexOf('.'));
      return path;
    }))
    .pipe(gulp.dest(src));
});

gulp.task('watch', function () {
  gulp.watch(src + '/**/*.es6.js', ['es6']);
});