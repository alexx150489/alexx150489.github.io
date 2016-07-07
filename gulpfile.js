var gulp = require("gulp");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var rename = require("gulp-rename");

gulp.task("symbols", function() {
  return gulp.src("img/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
  .pipe(rename("symbols.svg"))
  .pipe(gulp.dest("img"));
});