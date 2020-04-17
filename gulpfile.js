"use strict";
var gulp = require( "gulp" );
var sass = require( "gulp-sass" );
sass.compiler = require('node-sass');

//compile
gulp.task( "sass", function () {
    return gulp.src( "assets/app.scss" )
    .pipe(sass().on( "error", sass.logError ))
    .pipe(gulp.dest( "dist/" ));
});

gulp.task( 'build',
    gulp.series( 'sass' )
);

//compile and watch
gulp.task('sass:watch', function () {
    gulp.watch('./assets/*.scss', gulp.series('sass'));
});
