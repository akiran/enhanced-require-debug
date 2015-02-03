var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('default', function (cb) {
  webpack(require('./webpack.config.js'), function () {
    cb();
  });
});