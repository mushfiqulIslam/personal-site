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
import pngQuint  from'imagemin-pngquant'; 
import browserSync from'browser-sync';
import autoprefixer from'gulp-autoprefixer';
import jpgRecompress from 'imagemin-jpeg-recompress'; 
import clean from 'gulp-clean';

// Paths
var paths = {
    root: { 
        www:        './app'
    },
    src: {
        root:       'app/assets',
        html:       'app/**/*.html',
        css:        'app/assets/css/*.css',
        js:         'app/assets/js/*.js',
        vendors:    'app/assets/vendors/**/*.*',
        imgs:       'app/assets/imgs/**/*.+(png|jpg|gif|svg)',
        scss:       'app/assets/scss/**/*.scss'
    },
    dist: {
        root:       'app/dist',
        css:        'app/dist/css',
        js:         'app/dist/js',
        imgs:       'app/dist/imgs',
        vendors:    'app/dist/vendors'
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
        imageMin.gifsicle(),
        imageMin.jpegtran(),
        imageMin.optipng(),
        imageMin.svgo(),
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