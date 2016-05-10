/**
 * Created by gucheng on 5/9/16.
 */
var path = require('path');

module.exports = {
  entry: {
    lib: [
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'lib', 'main.ts')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
    ]
  },
  devtool: 'source-map',
  debug: true
};
