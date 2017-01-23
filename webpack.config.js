const webpack = require('webpack');
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './assets/js',
    publicPath: './assets',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.(sass|scss)$/,
        loader: extractTextPlugin.extract({
          //fallbackLoader: "style-loader",
          loader: ['css-loader', 'postcss-loader', 'sass-loader'],
          publicPath: '../assets'
        })
      }
    ]
  },
  plugins: [
    new extractTextPlugin('../css/style.css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          outputStyle: 'compressed',
          precision: 3
        }
      }
    })
  ]
}
