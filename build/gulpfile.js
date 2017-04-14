var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    minify = require('gulp-minify-css'),
    webserver = require('gulp-webserver');

gulp.task('js', function () {
    gulp.src(['js/**/*.js'])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('website/'))
});

gulp.task('html', function () {
    gulp.src('banner/*.html')
});

gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('website/'));
});

gulp.task('watch', function () {
    gulp.watch('js/**/*', ['js']);
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch(['website/*.html'], ['html']);
});

gulp.task('webserver', function () {
    gulp.src('website/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});


gulp.task('default', ['watch', 'html', 'js', 'sass',  'webserver']);
