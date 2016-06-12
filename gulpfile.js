
var gulp        = require('gulp');
var uglify		= require('gulp-uglify');
var livereload  = require('gulp-livereload');
var express		= require('express');
var app 		= express();

app.use(express.static(__dirname))
	.listen(8000, function(){
		console.log('I wonder if this will work');
	});
//Scripts Task
//Uglifies

gulp.task('scripts', function(){
	gulp.src('**/*.js')
	.pipe(livereload());
});

gulp.task('styles', function(){
	gulp.src('**/*.css')
		.pipe(livereload());
	console.log('styles has run');
});
gulp.task('structure', function(){
	gulp.src('**/*.html')
		.pipe(livereload());
	console.log('your structure should reload');	
});
//watch, watches js
gulp.task('watch', function(){
	livereload.listen();
  gulp.watch('**/*.js', ['scripts']);
  gulp.watch('**/*.css', ['styles']);
  gulp.watch('**/*.html', ['structure']);
});


gulp.task('default', ['scripts', 'styles', 'structure', 'watch']);