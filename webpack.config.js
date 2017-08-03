var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  context: __dirname,
  entry: './demo/demo.js',
  output: { path: __dirname + '/', filename: 'bundle.js' },
  module: {
    noParse: [
      /node_modules\/sinon/,
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};