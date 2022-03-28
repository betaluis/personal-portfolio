const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyle() {
  return src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('assets/css'))
}

function watchTask() {
  watch(['./sass/**/*.scss'], buildStyle)
}

exports.default = series(buildStyle, watchTask)