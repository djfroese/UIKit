const gulp = require('gulp');
const postcss = require('gulp-postcss');
const typify = require('@bs/postcss-typify');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const concatCss = require('gulp-concat-css');
const ts = require('gulp-typescript');
const postscss = require('postcss-scss');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');


var tsProject = ts.createProject('tsconfig.json',{
  declaration: true
});


function css() {
  var processors = [
    typify({outDir: "./lib", sourceDir: "./src"})
  ];

  return gulp.src('./src/**/**/*.scss')
    .pipe(postcss(processors,{syntax: postscss}))
    .pipe(sass())
    .pipe(gulp.dest('./lib'));
}

function bundleCss() {
  var processors = [
    autoprefixer(),
    cssnano()
  ];

  return gulp.src('./lib/**/**/*.css')
    .pipe(concatCss("bsuikit.css"))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/'));
}

function compile() {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest("lib"));
}

exports.default = gulp.series([css, bundleCss]);;
exports.build = gulp.series([css, bundleCss, compile]);
exports.css = css;
