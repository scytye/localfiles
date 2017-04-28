# 前端开发自动化

### npm的使用

安装自动化工具
1. 项目初始化   
```
npm init
```
帮助我们生成项目的包文件：package.json   
这个文件可以通过npm init命令来自动生成，当然也可以手动创建该文件并填入相关信息

2. 填写项目依赖的包信息
> 在package.json的dependencies中填写当前项目需要用到的第三方包以及对应版本
> 使用 npm update 命令进行更新，那么npm自动会根据dependencies里面的值自动安装或更新对应包

3. 也可以在命令行中使用 npm install 命令去安装第三方的包
```
npm install 包名称
```
我们也可以使用
```
npm install 报名称 --save
```
> --save：下载安装包并把该包的信息（名称和版本）加入到当前项目的package.json文件的dependencies这个字段当中，方便管理和维护

一般情况下，我们会把这个依赖划分成两个部分，一个叫项目依赖，一个叫项目开发依赖
1. 项目依赖：项目的运行需要用到的
2. 项目开发依赖：项目的开发过程中要用到，但是项目运行的时候是不需要的

##### 项目依赖
```
npm install 包 --save
```
> 信息会保存到dependencies

##### 项目开发依赖
```
npm install 包 --save-dev
```
> 信息会保存到devDependencies

##### 全局安装
```
npm install 包 -g
```

### gulp

##### 安装
> 在全局下安装gulp，方便使用gulp命令
```
npm install -g gulp
```

##### 本地安装gulp
> 在项目中安装gulp，方便项目程序中使用
```
npm install gulp --save-dev
```
##### 创建gulpfile文件，并编写任务
1. 在当前项目目录下创建一个文件（通常这个文件为：gulpfile.js，当然也可以叫其他名字，gulpfile是默认的）
2. 当我们的命令行调用gulp命令的时候，gulp自动会去查找当前gulp命令所在的目录下的gulpfile文件，如果不存在则会报错，这个文件默认是gulpfile.js，我们也可以手动指定

##### 编写任务
1. 在gulpfile.js文件中，引入gulp
```
var gulp = require('gulp');
```
2. 通过gulp对象的task的方法定义一个任务
```
gulp.task('任务名称', 回调函数，任务要做的事情)
```
3. 运行任务
> 在命令行中调用命令
```
gulp 任务名称
```

##### 默认任务
只需要在gulpfile.js中定义一个任务名称为：default的任务，那么在运行的时候，gulp后面就可以不用填写任务名，直接调用就可以了 

##### 前置任务-任务列表
我们可以在一个任务的第二个参数中填写一个数组，那么这个数组就是一个前置任务列表，当我们运行该任务的时候，需要先运行数组中的任务，然后执行当前任务

##### 编写具体任务
> gulp.src(globs[, options])
通过src这个命令，我们可以去读取指定的模式下的所有文件，globs就是一个模式列表，有点类似正则,类型： String 或 Array，返回值值一个流对象，可以理解为是当前匹配模式下读取到的文件的二进制数据，数据流对象下有一个方法：pipe()，通常称为管道   
   
### gulp常用插件列表

- gulp-uglify : js压缩工具
- gulp-concat : js合并

- gulp-clean-css : css压缩
- gulp-concat-css : css合并
- gulp-css-spriter : css雪碧图
- gulp-less : less编译


### webpack
1. 安装
```
npm install webpack -g
```

2. 编译
webpack 入口文件 编译后的文件
```
webpack ./src/entry.js ./dist/entry.js
```
> 有时候这样写有点麻烦

3. 配置文件
在运行webpack命令的目录下，新建一个文件：webpack.config.js，每次运行webpack命令的时候，我们可以手动指定配置文件，webpack就会以该配置文件的内容进行运行，这个文件默认是webpack.config.js，也可以自定义

##### LOADER
> webpack加载器：LOADER

默认清下，webpack只能处理js模块，如果我们想处理其他的类型，比如css，图片等，我们需要通过loader去实现其他模块的加载