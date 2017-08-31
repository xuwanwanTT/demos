var gulp = require('gulp')
var cssnano = require('gulp-cssnano')
var concat = require('gulp-concat')
var uglify  = require('gulp-uglify')
var image = require('gulp-imagemin')
var html = require('gulp-htmlmin')

gulp.task('css',function(){
  gulp.src('./css/*.css')
      .pipe(concat('index-merge.css'))
      .pipe(cssnano())
      .pipe(gulp.dest('dist/css/'))
})

gulp.task('js',function(){
  gulp.src('./js/index.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js/'))
})

gulp.task('img',function(){
  gulp.src('./img/*.jpg')
      .pipe(image())
      .pipe(gulp.dest('dist/img/'))
})

gulp.task('html',function(){
  gulp.src('./index.html')
      .pipe(html({collapseWhitespace: true}))
      .pipe(gulp.dest('dist/'))
})

gulp.task('default',['css','js','img','html'])