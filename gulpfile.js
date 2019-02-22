const gulp = require('gulp');
const postcss = require('gulp-postcss');
const typify = require('@bs/postcss-typify');;


function css() {
  var processors = [
    typify({outDir: "./lib", sourceDir: "./src"})
  ];

  return gulp.src('./src/**/**/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./lib'));
}

exports.default = css;