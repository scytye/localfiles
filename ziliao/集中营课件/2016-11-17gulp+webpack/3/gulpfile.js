var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');

var less = require('gulp-less');

connect = require('gulp-connect');

var webpack = require('gulp-webpack');

var webpackConfig = require('./webpack.config');

/*
* 开启服务器
* */
gulp.task('connect', function() {
    connect.server({
        root: './www',
        port: '8888',
        livereload: true
    });
});

/*
 * 处理js
 * */
gulp.task('js', function() {

    gulp.src( './src/js/*.js' )
        // .pipe( concat('all.js') )
        .pipe( webpack(webpackConfig) )
        // .pipe( uglify() )
        .pipe( gulp.dest('./www/public/js') )
        .pipe( connect.reload() );

});

/*
 * 处理less
 * */
gulp.task('lesscss', function() {
    gulp.src( './src/less/*.less' )
        .pipe( less() )
        .pipe( concatCss("bundle.css") )
        .pipe( cleanCSS() )
        .pipe( gulp.dest('./www/public/css') )
        .pipe( connect.reload() );
});

/*
 * html
 * */
gulp.task('html', function() {
    gulp.src( './www/**/*.html' )
        .pipe( connect.reload() );
});

gulp.task('default', ['js', 'lesscss', 'connect'], function() {
    console.log('任务完成');
});

gulp.watch('./src/js/*.js', ['js']);
gulp.watch('./src/less/*.less', ['lesscss']);
gulp.watch('./www/**/*.html', ['html']);