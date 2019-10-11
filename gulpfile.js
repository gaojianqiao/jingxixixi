//要想使用gulp提供的功能，首先要将gulp引入到当前文件中
var cuijn_gulp = require('gulp'); //请求：gulp
var concat = require('gulp-concat'); //请求：连接js插件
var uglify = require('gulp-uglify'); //请求：压缩丑化js

var sass = require('gulp-sass'); //请求：编译sass
var minify = require('gulp-minify'); //请求：压缩sass,sass内部有输出形式，可改

var rename = require('gulp-rename'); //请求：重命名插件rename,输出助两种样式

var babel = require('gulp-babel');
var sprite = require('gulp.spritesmith');
var del = require('delete');
// var babel = require('gulp-babel');

//gulp是一个基于task(任务)的构建工具，我们需要在执行构建步骤时，先创建任务
// cuijn_gulp.task('任务名称', 回调函数)

// 1.copy文件
//TODO:copyhtml
async function testTask() {
    cuijn_gulp.src('./src/index.html')
        //以gulp路径为准的根路径
        .pipe(cuijn_gulp.dest('./dist'))
        // 传给管道,再传给dist
        //在gulpfile.js上右键终端打开

    // gulp copy-index

}

cuijn_gulp.task('copy-index', testTask);

async function copyHtml() {
    cuijn_gulp.src('./src/html/*.html')
        //*.html所有文件
        .pipe(cuijn_gulp.dest('./dist'))
}
cuijn_gulp.task('copy-html', copyHtml)

//TODO:copy 图片
async function copyImg() {
    //路径**，赛表将文件夹下的路径结构整体拷贝图片
    cuijn_gulp.src('./src/assets/img/**/*.{jpg,gif,png}') //递归的拷贝文件
        .pipe(cuijn_gulp.dest('./dist/assets/img'))
}
cuijn_gulp.task('copy-img', copyImg)


// ********cuijn_gulp.parallel()返回一个全新的函数，该新函数会执行被合并的任务
//TODO:copy 合并任务并执行被合并的任务
var copyAll = cuijn_gulp.parallel(testTask, copyHtml, copyImg)
cuijn_gulp.task('copy', copyAll);
//编译sass需要插件的帮助，gulp无法实现，
//gulp-sass gulp-sass要用node-sass来编译scss文件

//使用插件步骤：
//1.安装插件【npm Install 插件名】
//PS E:\HTML5\数据库\第三周\gulpz\elema> npm install gulp-sass node-sass
//2.将插件引入到gulpfile.js中


// TODO:连接sass
//1.安装 npm install gulp-sass gulp-minify编译+压缩
//2.在最上请求插件：
//引入gulp-sass

async function sassTask() {
    cuijn_gulp.src('./src/style/**/*.scss')
        //复制style里面所有文件，和文件里的.scss
        .pipe(sass())
        .pipe(cuijn_gulp.dest('./dist/css/'))
        .pipe(minify()) //压缩
        .pipe(rename(function(filename) {
            filename.basename += '.min'
        }))
        // TODO:生成两套css
        // .pipe(sass({ //编译压缩
        //         outputStyle: "compressed" //outputStyle规定输出格式compressed全在一行
        //     }))

    .pipe(cuijn_gulp.dest('./dist/css/'))

}
cuijn_gulp.task('sass', sassTask)
    //3. 使用引入后的插件gulp sass

//TODO:连接js
//1.gulp-concat(安装npm install gulp-concat)
//2.在最上请求插件：
//3.连接 输出 压缩 输出
async function homeJs() {
    //将home下的所有jS文件进行合并，之后再babel编译
    //合并需要使用插件gulp-concat
    cuijn_gulp.src('./src/js/home/*.js') //TODO:这里注意要递归copy

    //压缩前输出
    .pipe(concat('home.js'))
        //文件压缩后的输出文件.js   TODO:压缩/丑化
        //1.安装插件gulp-uglify(安装npm install gulp-uglify)
        //2.请求var uglify = require('gulp-uglify'); //请求：压缩丑化js
        //3.使用
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        //编译到ES5后，要进行压缩
        //借助插件gulp-uglify
        // .pipe(uglify()) //压缩

    //压缩end输出
    // .pipe(rename({ extname: '.min.js' }))
    //得到压缩文件
    .pipe(cuijn_gulp.dest('./dist/js/home'))

}
cuijn_gulp.task('home-js', homeJs)

//TODO:生成两个版本，压缩+未压缩（js, css）
//1.要安装重命名插件npm install gulp-rename
//2.请求插件var rename = require('gulp-rename');



//TODO:安装ES5-ES6转换
//1.npm install --save-dev @babel/preset-react
//2.请求babel
//3.

// TODO:精灵图
async function spriteTu() {
    cuijn_gulp.src('./src/assets/icons/*.jpg')
        .pipe(sprite({
            imgName: "精灵图.jpg",
            cssName: "精灵图.css"
        }))
        .pipe(cuijn_gulp.dest('./dist/assets/icons'))
}
cuijn_gulp.task('sprite', spriteTu)


// TODO:在文件重复时会copy不上，要先清除在copy
//1.下载插件npm install del
//2.定义函数

//3.删除再构建
var dist = cuijn_gulp.series(clean, cuijn_gulp.parallel(homeJs, sassTask, copyAll, spriteTu))
cuijn_gulp.task('dist', dist)

function clean() {
    return del(['dist'])
}
// // TODO:TODO:TODO:监听
// function watch() { //TODO:注意这里不加异步，为了让他一直监听
//     cuijn_gulp.watch('./src/assest/img/**/*.{jpg,png,png}', copyImg)
//     cuijn_gulp.watch('./src/html/*.html', copyHtml)
//     cuijn_gulp.watch('./src/js/**/*.js,', copyJs) //js
//     cuijn_gulp.watch('./src/style/**/*.scss', sassTask)
//     cuijn_gulp.watch('./src/index.html', testTask)
//     cuijn_gulp.watch('./src/js/home', homeJs)

// }
// cuijn_gulp.task('watch', watch)