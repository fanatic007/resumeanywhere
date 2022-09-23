const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'development',
  // watch: 'true',
  output: {
	path: `${__dirname}/dist`,
	filename: 'bundle.js',
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ], 
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 1234,
    open:true,
    watchFiles: ['./']
  },
};