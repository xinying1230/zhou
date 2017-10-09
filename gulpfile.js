var gulp=require("gulp");
var web=require("gulp-uglify");
var concat=require("gulp-concat");
var rename=require("gulp-rename");
var minify=require("gulp-minify-css");

gulp.task("js", function () {
    gulp.src("./js/*.js")
        .pipe(concat("main.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(web())
        .pipe(gulp.dest("./js"))

});




gulp.task("css", function () {
    gulp.src("./css/*.css")
        .pipe(concat("main.css"))
        .pipe(rename({suffix:".min"}))
        .pipe(minify())
        .pipe(gulp.dest("./css"))



});
