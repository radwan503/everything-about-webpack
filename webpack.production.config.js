const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
 entry: {
  'hello-world': './src/hello-world.js',
  "kiwi": './src/kiwi.js'
 },
 output: {
  filename: "[name].[contenthash].js",
  path: path.resolve(__dirname, "./dist"),
  publicPath: '',
  clean: true
 },
 mode: "production",
 optimization: {
  splitChunks: {
   chunks: 'all',
   minSize: 3000
  }
 },
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
   filename: '[name].[contenthash].css'
  }),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
   filename: "hello-world.html",
   chunks: [
    'hello-world'
   ],
   title: "Hello World",
   minify: false,
   meta: {
    description: "Description Hello"
   }
  }),
  new HtmlWebpackPlugin({
   filename: "kiwi.html",
   chunks: [
    'kiwi'
   ],
   title: "Kiwi Html",
   minify: false,
   meta: {
    description: "Kiwi"
   }
  }),
 ]
}