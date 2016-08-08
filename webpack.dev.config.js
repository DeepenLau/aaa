var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')

// Path constant
var ROOT_PATH = path.resolve(__dirname, './')
var SRC_PATH = path.resolve(ROOT_PATH, 'src')
var DIST_PATH = path.resolve(ROOT_PATH, 'dist')

module.exports = {
  entry: {
    app: './src/pages/index/main.js',
    student: './src/pages/student/main.js',
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: DIST_PATH,
    publicPath: '/',
    filename: '[name].js?v=[hash:7]',
    // chunkFilename: '[id].[chunkhash].js'
    chunkFilename: 'chunks/[id].[name].[chunkhash:8].js'
  },
  resolve: {
    // 自动补全拓展名，自己还是习惯自己加拓展名
    extensions: ['', '.js', 'vue', '.styl']
  },
  resolveLoader: {
    root: path.join(ROOT_PATH, 'node_modules')
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
      // css: ExtractTextPlugin.extract('vue-style', 'css'),
      // styl: ExtractTextPlugin.extract('vue-style', 'css!stylus!stylint'),
      // stylus: ExtractTextPlugin.extract('vue-style', 'css!stylus!stylint')
      css: 'vue-style!css',
      styl: 'vue-style!css!stylus!stylint',
      stylus: 'vue-style!css!stylus!stylint'
    }
  },
  // https://github.com/MoOx/eslint-loader
  eslint: {
    formatter: require('eslint-friendly-formatter'),
    configFile: path.resolve(ROOT_PATH, '.eslintrc.js')
  },
  // 配置 stylint 全局设置
  stylint: {
    // https://github.com/rossPatton/stylint#options
    config: path.resolve(ROOT_PATH, '.stylintrc')
  },
  devServer: {
    // http://webpack.github.io/docs/webpack-dev-server.html
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8082,
    noInfo: true,
    stats: {
      colors: true
    }
  },
  devtool: '#eval-source-map',
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    // new ExtractTextPlugin('style.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js?v=[hash:8]'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'pug-html!' + path.resolve(SRC_PATH, 'tpl.pug'),
      inject: true,
      chunks: ['vendors', 'app']
    }),
    new HtmlWebpackPlugin({
      filename: 'student.html',
      template: 'pug-html!' + path.resolve(SRC_PATH, 'student.pug'),
      inject: true,
      chunks: ['student', 'vendors']
    })
  ]
}
