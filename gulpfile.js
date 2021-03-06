let gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest(''))
});

gulp.task('default', ['sass'], function () {
    gulp.watch(['**/*.scss', '*.scss'], ['sass']);
})
