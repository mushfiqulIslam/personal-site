// node.js Packages / Dependencies
import gulp from 'gulp';
import nodeSass from "node-sass";
import gulpSass from 'gulp-sass';
const sass = gulpSass(nodeSass)
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import concat from'gulp-concat';
import cleanCSS  from'gulp-clean-css';
import imageMin  from'gulp-imagemin';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminOptipng from 'imagemin-optipng';
import imageminSvgo from 'imagemin-svgo';
import pngQuint  from'imagemin-pngquant'; 
import browserSync from'browser-sync';
import autoprefixer from'gulp-autoprefixer';
import jpgRecompress from 'imagemin-jpeg-recompress'; 
import clean from 'gulp-clean';

// Paths
var paths = {
    root: { 
        www:        '.'
    },
    src: {
        root:       'assets',
        html:       '**/*.html',
        css:        'assets/css/*.css',
        js:         'assets/js/*.js',
        vendors:    'assets/vendors/**/*.*',
        imgs:       'assets/imgs/**/*.+(png|jpg|JPG|gif|svg)',
        scss:       'assets/scss/**/*.scss'
    },
    dist: {
        root:       'dist',
        css:        'dist/css',
        js:         'dist/js',
        imgs:       'dist/imgs',
        vendors:    'dist/vendors'
    }
}

// Compile SCSS
gulp.task('sass', function() {
    return gulp.src(paths.src.scss)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) 
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.src.root + '/css'))
    .pipe(browserSync.stream());
});

// Minify + Combine CSS
gulp.task('css', function() {
    return gulp.src(paths.src.css)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('johndoe.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dist.css))
});

// Minify + Combine JS
gulp.task('js', function() {
    return gulp.src(paths.src.js)
    .pipe(uglify())
    .pipe(concat('johndoe.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.stream());
});

// Compress (JPEG, PNG, GIF, SVG, JPG)
gulp.task('img', function(){
    return gulp.src(paths.src.imgs)
    .pipe(imageMin([
        imageminGifsicle(),
        imageminJpegtran(),
        imageminOptipng(),
        imageminSvgo(),
        pngQuint(),
        jpgRecompress()
    ]))
    .pipe(gulp.dest(paths.dist.imgs));
});

// copy vendors to dist
gulp.task('vendors', function(){
    return gulp.src(paths.src.vendors)
    .pipe(gulp.dest(paths.dist.vendors))
});

// clean dist
gulp.task('clean', function () {
    return gulp.src(paths.dist.root)
        .pipe(clean());
});

// Prepare all assets for production
gulp.task('build', gulp.series('sass', 'css', 'js', 'vendors', 'img'));

// Watch (SASS, CSS, JS, and HTML) reload browser on change
gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: paths.root.www
        } 
    })
    gulp.watch(paths.src.scss, gulp.series('sass'));
    gulp.watch(paths.src.js).on('change', browserSync.reload);
    gulp.watch(paths.src.html).on('change', browserSync.reload);
});