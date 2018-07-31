const gulp = require('gulp');

//LESS Plugins
const plumber  = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const minifyCss = require('gulp-clean-css');
const livereload = require('gulp-livereload');
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const lessAutoprefix = new LessAutoprefix({
	browsers: ['last 2 versions']
});

const LESS_PATH = './src/assets/less/main.less';

//Styles for LESS
gulp.task('styles', function() {
	console.log('starting styles task');
	return gulp.src(LESS_PATH)
	.pipe(plumber(function(err) {
		console.log('Styles Task Error');
		console.log(err);
		this.emit('end');
	}))
	.pipe(sourcemaps.init())
	.pipe(less({
		plugins: [lessAutoprefix]
	}))
	.pipe(minifyCss())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./app/public/css'))
	.pipe(livereload());
});