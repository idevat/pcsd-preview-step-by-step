/*global module, require, global*/
var path = require('path');
var webpack = require('webpack');
require('es6-promise').polyfill();

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
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[local]---[hash:base64:3]',
          'postcss-loader',
        ],
      },
    ],
  },
   postcss: [
    require('postcss-import'),
    require('postcss-custom-properties'),
    require('lost'),
  ],
  resolve: {
    extensions: ['', '.js', '.css'],
  },
  plugins: [
    new webpack.OldWatchingPlugin(),
  ],
  devtool: "#inline-source-map",
}
