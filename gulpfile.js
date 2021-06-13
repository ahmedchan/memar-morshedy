
var gulp    = require('gulp');
var util    = require('gulp-util');
var concat  = require('gulp-concat');
var compass = require('gulp-compass');
var browserSync = require("browser-sync").create();
var rtlcss     = require( 'gulp-rtlcss' );
var rename     = require( 'gulp-rename' );
var uglify     = require('gulp-uglify');

////// src
var sassSources = ['src/sass/style.scss'];
var jsSources = [
	'src/scripts/jquery-3.3.1.js',
	'src/scripts/bootstrap.js',
	'src/scripts/jquery.scrollbar.js',
	'src/scripts/slick.js',
	'src/scripts/wow.js',
	'src/scripts/main.js'
];


//// js task
gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe( concat('main.js') )
		.pipe( gulp.dest('dist/js') )
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify()) 
		.pipe( gulp.dest('dist/js') )
		.pipe( browserSync.reload({stream: true}) )
});

gulp.task('compass', function(){
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'src/sass',
			images: 'dist/img',
			style: 'compressed',
			sourcemap: true,
			css: 'dist/css',
			require: ['susy', 'breakpoint']
		}))
		.on('error', util.log)
		.pipe( gulp.dest('dist/css') )
		.pipe( browserSync.reload({stream: true}) )
});

// compass/sass ltr task
gulp.task( 'compass-ltr', function(){
	gulp.src( sassSources )
	.pipe( compass({
		sass    : 'src/sass',
		image   : 'dist/img',
		style   : 'compressed',
		sourcemap: true,
		css     : 'dist/css',
		require : ['susy', 'breakpoint']
	}))
	.on('error', util.log)
	.pipe(rtlcss()) // Convert to RTL. 
	.pipe(rename({ suffix: '-ltr' })) // Append "-rtl" to the filename. 
	.pipe(gulp.dest( 'dist/css' ))
	.pipe( browserSync.reload({stream: true}) )
});

gulp.task('sync', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
})

gulp.task('watch', function(){
	gulp.watch(jsSources, ['js']);
	gulp.watch('src/sass/**/*.scss', ['compass']);
	gulp.watch("*.html").on('change', browserSync.reload);
})

gulp.task('default', ['js', 'compass', 'compass-ltr', 'watch', 'sync']);