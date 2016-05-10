/**
 * Created by gucheng on 5/9/16.
 */
var path = require('path');

module.exports = {
  entry: {
    demo: [
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'demo', 'demo.ts')
    ],
    lib: [
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'lib', 'App.ts')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'demo'),
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
  debug: true,
  devServer: {
    contentBase: './demo',
    hot: true,
    inline: true
  }
};
