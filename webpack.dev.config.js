const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
 entry: "./src/index.js",
 output: {
  filename: "bundle.js",
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
   title: "Hello World",
   //filename: "subfolder/custom_filename.html",
   meta: {
    description: "Description add"
   }
  }),
 ]
}