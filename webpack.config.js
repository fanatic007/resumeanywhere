const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'development',
  watch: true, 
  devServer: {
    liveReload: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 1234,
    watchFiles: ['./']
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, 
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: "css-loader",
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: path.join(__dirname, 'dist/fonts/')
            }
          }
        ]
      }
    ],
  },
};