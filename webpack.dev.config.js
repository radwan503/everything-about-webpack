const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
 entry: {
  'hello-world': './src/hello-world.js',
  "kiwi": './src/kiwi.js'
 },
 output: {
  filename: "[name].bundle.js",
  path: path.resolve(__dirname, "./dist"),
  publicPath: '',
  clean: true
 },
 mode: "development",
 devServer: {
  port: 9000,
  static: {
   directory: path.resolve(__dirname, './dist')
  },
  devMiddleware: {
   index: 'index.html',
   writeToDisk: true,
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
    use: ['style-loader', 'css-loader']
   },
   {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
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

  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
   filename: "hello-world.html",
   chunks: [
    'hello-world'
   ],
   title: "Hello World",
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
   meta: {
    description: "Kiwi"
   }
  }),
 ]
}