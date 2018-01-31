var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('img', function () {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});


gulp.task('concat', function () {
    return gulp.src([
        // 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
        'src/js/loader.js',
    ])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// gulp.task('concatCss', function () {
//     return gulp.src([
//         'src/css/dribbleHeaderModule.scss'
//         // 'src/js/loader.js',
//     ])
//         .pipe(concat('style.css'))
//         .pipe(gulp.dest('src/css'));
// });


gulp.task('watch', function () {
    gulp.watch("src/css/**/*.scss", ['sass']);
    gulp.watch("src/img/**/*", ['img']);
    gulp.watch("src/js/*", ['js']);
});


gulp.task("default", ['img', 'sass', 'concat', 'watch']);

