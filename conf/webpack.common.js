const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
})

module.exports = {

  context: path.join(process.cwd(), 'src'),

  devtool: 'source-map',

  entry: {
    app: './index.js'
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].[hash].js',
    publicPath: '.',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['.js'],
    modules: [path.join(process.cwd(), 'src'), 'node_modules']
  },

  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }, {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }],
        fallback: 'style-loader'
      })
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {root: process.cwd()}),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    extractSass,
    new CopyWebpackPlugin([
      {from: 'assets', to: 'assets'}
    ])
  ]
}
