var gulp = require("gulp")
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
 
gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

// $ gulp sass で実行するタスク
gulp.task('sass', function () {
  gulp.src('sass/**/*.scss')
    .pipe(plumber)
    .pipe(sass({
        style: 'expanded',
        compass: true
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css/'))
    .pipe(browser.reload({stream:true}))
});

// watchタスク
gulp.task('default', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});
