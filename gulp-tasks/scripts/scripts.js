const gulp = require('gulp'); 

const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');

const SCRIPTS_CUSTOM_PATH = './src/assets/js/custom/*.js';

//Scripts
gulp.task('scripts', function() {
	console.log('starting scripts task');
	return gulp.src(SCRIPTS_CUSTOM_PATH)
	.pipe(plumber(function(err) {
		console.log('Scripts Task Error');
		console.log(err);
		this.emit('end');
	}))
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets : ['env']
	}))
	.pipe(uglify())
	.pipe(concat('custom.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./app/public/js'))
	.pipe(livereload());
});

//Scripts
gulp.task('scripts-vendor', function() {
	console.log('starting scripts task');
    return gulp.src([
    './src/assets/vendor/hs-megamenu/src/hs.megamenu.js',
    './src/assets/vendor/dzsparallaxer/dzsparallaxer.js',
    './src/assets/vendor/dzsparallaxer/dzsscroller/scroller.js',
    './src/assets/vendor/masonry/dist/masonry.pkgd.min.js',
    './src/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js',
    './src/assets/vendor/malihu-scrollbar/jquery.mCustomScrollbar.concat.min.js',
    './src/assets/vendor/slick-carousel/slick/slick.js',
    './src/assets/vendor/fancybox/jquery.fancybox.min.js'
    ])
	.pipe(plumber(function(err) {
		console.log('Scripts Task Error');
		console.log(err);
		this.emit('end');
	}))
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets : ['env']
	}))
	.pipe(uglify())
	.pipe(concat('plugins.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./app/public/js'))
	.pipe(livereload());
});
