const gulp = require('gulp');

//Image Compression
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
// const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageResize = require('gulp-image-resize');

const IMG_PATH = '/src/assets/img/**/*.{png,jpg,jpeg,svg,gif}';

//Compresses Images
gulp.task('images', function() {
	console.log('starting images task');
	return gulp.src(['/src/assets/img/brand/*.{png,jpg,jpeg,svg,gif}', '/src/assets/img/events/*.{png,jpg,jpeg,svg,gif}', '/src/assets/img/stock/*.{png,jpg,jpeg,svg,gif}'])
	.pipe(imagemin(
		[
			imagemin.gifsicle(),
			imagemin.jpegtran(),
			imagemin.optipng(),
			imagemin.svgo(),
			imageminPngquant()
		]
	))
	.pipe(gulp.dest('/app/public/img/'));
});