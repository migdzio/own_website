var gulp = require('gulp');
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');

Files = {
    css:
        ['./responsive.gs/reset.css', './responsive.gs/responsive.gs.12col.css'],
    scss:
        ['./sass/_init.scss', './sass/_header.scss', './sass/_content.scss', './sass/_footer.scss'],
    js:
        ['./js/app.js'],
    html: ['./index.html']
};



gulp.task('sass', function() {
    
    return gulp.src('./sass/import.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./css'));
    
});

gulp.task('default', function() {

    gulp.watch(Files.html);
    gulp.watch(Files.scss, ["sass"]);
    gulp.watch(Files.css, ["sass"]);
    
});