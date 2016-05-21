var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// Path constant
var ROOT_PATH = path.resolve(__dirname, './')
var SRC_PATH = path.resolve(ROOT_PATH, 'src')
var DIST_PATH = path.resolve(ROOT_PATH, 'dist')

module.exports = {
  entry: {
    app: path.resolve(SRC_PATH, 'main.js')
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js'
  },
  resolve: {
    // 自动补全拓展名
    extensions: ['', '.js', 'vue', '.styl']
  },
  module: {
    preLoader: [{
      test: /\.vue$/,
      loader: 'eslint',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }, {
      test: /\.styl$/,
      loader: 'stylint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'vue-style!css',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: '[name].[ext]?v=[hash:5]'
      }
    }, {
      test: /\.(eot|ttf|svg|woff)$/,
      loader: 'file'
    }]
  },
  vue: {
    autoprefixer: {
      browsers: ['> 1%']
    },
    loaders: {
      css: ExtractTextPlugin.extract('vue-style', 'css'),
      styl: ExtractTextPlugin.extract('vue-style', 'css!stylus!stylint'),
      stylus: ExtractTextPlugin.extract('vue-style', 'css!stylus!stylint')
    }
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  stylint: {
    // https://github.com/rossPatton/stylint#options
    config: path.resolve(ROOT_PATH, '.stylintrc')
  },
  devServer: {
    // http://jaketrent.com/post/pushstate-webpack-dev-server/
    host: '0.0.0.0',
    port: 8082
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'pug-html!' + path.resolve(SRC_PATH, 'index.pug'),
      inject: true
    })
  ]
}
