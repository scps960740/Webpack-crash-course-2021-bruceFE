const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

const modeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development'
// TODO del
console.log(',.......', process.env.NODE_ENV)

module.exports = {
  // development production
  mode: modeEnv,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[hash].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.gif/,
        type: 'asset/resource'
      }
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './base.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[hash].css'
    })
  ],
};
