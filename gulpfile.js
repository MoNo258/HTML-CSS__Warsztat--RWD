const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const notifier = require('node-notifier');


sass.compiler = require('sass'); //node-sass is used for classic version || sass is used for newer version: dart-sass

function showError(err) {
    console.log(err.messageFormatted);

    notifier.notify({
        title: 'Error msg',
        message: err.messageFormatted
    });
}

function server(cb) {
    browserSync.init({
    	port: 3000, //changing default port 3000 into diff port
        server: {
            baseDir: "./"
        }
    });
    cb();
}

function css() {
    return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "expanded" //nested, expanded, compact, compressed
        }).on('error', showError))
        .pipe(autoprefixer({}))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

function watch() {
    gulp.watch("./scss/**/*.scss", gulp.series(css));
    gulp.watch("./*.html").on('change', browserSync.reload);
}


module.exports.css = css;
module.exports.watch = watch;
module.exports.default = gulp.series(server, css, watch);
// module.exports.default = gulp.parallel();