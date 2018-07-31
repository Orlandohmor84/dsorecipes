const gulp = require('gulp'); 
const bootlint  = require('gulp-bootlint');
const requireDir = require('require-dir');
requireDir('./gulp-tasks/bootlint/');
requireDir('./gulp-tasks/html/');
requireDir('./gulp-tasks/less/');
requireDir('./gulp-tasks/scripts/');

//File paths
const LESS_PATH = './src/assets/less/main.less';
const SRC_PATH = './src/*.html';
const INC_PATH = './src/includes/*.html';
const SCRIPTS_CUSTOM_PATH = './src/assets/js/custom/*.js';

//Watch
gulp.task('watch', ['default'], function() {
	console.log('starting watch task');
	require('./serverBuild.js');
	livereload.listen();
	gulp.watch(SCRIPTS_PATH, ['scripts']);
	gulp.watch(LESS_PATH, ['styles']);
	gulp.watch(SRC_PATH, ['html']);
});

gulp.task('default', ['styles', 'scripts', 'html'], function() {
	console.log('starting default task');
});