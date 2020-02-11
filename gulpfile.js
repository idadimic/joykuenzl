var gulp = require('gulp')
var sass = require('gulp-sass')
var cleancss = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')

var browserSync = require('browser-sync').create()

var imagemin = require('gulp-imagemin')

var webpack = require('webpack-stream')




sass.compiler = require('node-sass')

gulp.task("sass", function() {
    // run sass css/app.scss app.css --watch
    return gulp.src("src/css/app.scss")
       .pipe(sourcemaps.init())
       .pipe(sass())
       .pipe(
           cleancss({
               compatibility: 'ie8'
           })
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream())
})

gulp.task("html", function() {
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"))
})

gulp.task("js", function() {
    gulp.src("src/js/*")
    .pipe(
        webpack({
            mode: 'none',
            output: {
                filename: "app.js"
            }
    })
    )
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream())
})

gulp.task("fonts", function() {
    return gulp.src("src/fonts/*")
        .pipe(gulp.dest("dist/fonts"))
})

gulp.task("images", function() {
    return gulp.src("src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"))
})

gulp.task("watch", function() {

    browserSync.init({
        server: {
            baseDir: "dist"
        }
    })

    gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload)
    gulp.watch("src/css/app.scss", ["sass"])
    gulp.watch("src/js/*.js", ["js"])
    gulp.watch("src/fonts/*", ["fonts"])
    gulp.watch("src/images/*", ["images"])
})

gulp.task('default', ["html", "sass", "js", "fonts", "images", "watch"])