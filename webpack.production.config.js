const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
 entry: "./src/index.js",
 output: {
  filename: "bundle.[contenthash].js",
  path: path.resolve(__dirname, "./dist"),
  publicPath: '',
  clean: true
 },
 mode: "production",
 module: {
  rules: [
   {
    test: /\.(png|jpg|svg)$/,
    type: 'asset',
    parser: {
     dataUrlCondition: {
      maxSize: 3 * 1024  // 3 kilobyte
     }
    }
   },
   {
    test: /\.txt/,
    type: 'asset/source'
   },
   {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader']
   },
   {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
   },
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: ['@babel/env'],
      plugins: ['@babel/plugin-proposal-class-properties']
     }
    }
   }
  ]
 },
 plugins: [

  new MiniCssExtractPlugin({
   filename: 'styles.[contenthash].css'
  }),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
   title: "Hello World",
   //filename: "subfolder/custom_filename.html",
   meta: {
    description: "Description add"
   }
  }),
 ]
}