var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var spriter = require('gulp-css-spriter');

var less = require('gulp-less');

var notify = require("gulp-notify");

/*
* 处理js
* */
gulp.task('js', function() {

    gulp.src( './src/js/*.js' )
        .pipe( concat('all.js') )
        .pipe( uglify() )
        .pipe( gulp.dest('./dist/js') );

});

/*
* 处理css
* */
// gulp.task('css', function() {
//
//     gulp.src( './src/css/*.css' )
//         .pipe( spriter({
//             //要生成的雪碧图的路径和名字
//             'spriteSheet': './dist/images/spritesheet.png',
//             //css中引用的图片的路径
//             'pathToSpriteSheetFromCSS': '../images/spritesheet.png'
//         }) )
//         .pipe( concatCss("bundle.css") )
//         .pipe( cleanCSS() )
//         .pipe( gulp.dest('./dist/css') )
//         .pipe( notify('css处理完成') );
//
// });

/*
* 处理less
* */
gulp.task('lesscss', function() {
    //gulp.src( './src/less/**/*.less' )
    gulp.src( './src/less/*.less' )
        .pipe( less() )
        // .pipe( concatCss("bundle.css") )
        .pipe( spriter({
            //要生成的雪碧图的路径和名字
            'spriteSheet': './dist/images/spritesheet.png',
            //css中引用的图片的路径
            'pathToSpriteSheetFromCSS': '../images/spritesheet.png'
        }) )
        .pipe( concatCss('bundle.css'))
        .pipe( cleanCSS() )
        .pipe( gulp.dest('./dist/css') )
});


gulp.task('default', ['js', 'lesscss'], function() {
    console.log('任务完成');
});