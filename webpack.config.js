/*global module, require, global*/
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('src/js'),
  entry: './app',
  output: {
    path: path.resolve('public/js'),
    publicPath: '/js',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
}
