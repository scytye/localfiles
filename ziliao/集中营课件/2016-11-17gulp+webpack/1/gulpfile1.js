var gulp = require('gulp');

/*
* gulp.task('任务的名称', callback)
* 定义一个任务
* */
gulp.task('a', function() {
    console.log('任务开始');
});

/*
* 定义一个默认的任务，任务的名称需要填写default，然后运行的时候，就不需要填写任务名了
* */
gulp.task('default', ['a'], function() {
    console.log('默认任务开始');
});