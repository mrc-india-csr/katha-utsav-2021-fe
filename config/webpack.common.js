const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('dotenv').config()
const webpack = require('webpack');

const srcPath = path.join(__dirname, '../src/client');
const publicPath = '/';

module.exports = {
  cache: false,
  context: srcPath,
  entry: [
    '@babel/polyfill',
    path.join(__dirname, '../src/client/index'),
    path.join(__dirname, '../src/client/styles/main.scss'),
  ], output: {
    path: path.join(__dirname, '../dist'),
    filename: 'static/[name].[hash].js',
    publicPath,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
      appconstants: `${srcPath}/appconstants/`,
      components: `${srcPath}/components/`,
      containers: `${srcPath}/containers/`,
      store: `${srcPath}/store/`,
      helpers: `${srcPath}/helpers/`,
      assets: `${srcPath}/assets/`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: srcPath,
        loader: 'babel-loader',
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream',
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml',
        },
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      KATHA_API: JSON.stringify(process.env.KATHA_API),
  }), 
    new CopyWebpackPlugin({
      patterns: [

      {
        from: path.join(__dirname, '../public/'),
        to: path.join(__dirname, '../dist/'),
      },
    ]}),
    new MiniCssExtractPlugin({
      filename: "static/[name].css",
      chunkFilename: "static/[id].css"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'katha-utsav-2021-fe',
      template: path.join(__dirname, '../src/client/assets/template.html'),
    }),]

}