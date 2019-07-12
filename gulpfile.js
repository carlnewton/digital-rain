const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
 
gulp.task('build', function() {
    return gulp.src(
        [
            './src/DigitalRain.js',
            './src/Settings.js',
            './src/Controls.js',
            './src/Glyphs.js',
            './src/Drops.js',
            './src/Grid.js',
            './src/index.js' 
        ]
    )
        .pipe(concat('script.js'))
        .pipe(terser())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', gulp.series('build'));

gulp.task('watch', function() {
    gulp.watch('./src/*.js', gulp.series('build'));
});