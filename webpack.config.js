var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'whatwg-fetch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'sourcemap',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        "presets": ["es2015", "stage-0", "react"],
        "plugins": ["react-hot-loader/babel", 'transform-async-to-generator', 'transform-decorators-legacy']
      }
    }, {
      test: /\.scss$/,
      loader: "style!css!postcss!resolve-url!sass?sourceMap"
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=assets/[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: './index.hbs'
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/,
      debug: true,
      options:  {
        postcss: function() {
          return [precss, autoprefixer];
        },
        context: path.join(__dirname, 'src'),
        output: {
          path: path.join(__dirname, 'dist')
        }
      }
    })
  ],
};