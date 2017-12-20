var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  entry: "./src/js/index.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      //下面是添加的 css 的 loader，也即是 css 模块化的配置方法，大家可以拷贝过去直接使用
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  output: {
     path: __dirname,
    filename: "./src/bundle.js"
  },
};
