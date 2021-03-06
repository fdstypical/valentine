const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPluginConfig = {
  filename: 'index.html',
  favicon: path.resolve(__dirname, '../static/favicon.ico'),
  hash: true,
};

const plugins = {
  production: [
    new HTMLWebpackPlugin({
      ...htmlPluginConfig,
      template: path.resolve(__dirname, '../static/template.html'),
      minify: {
        collapseWhitespace: true
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
  ],
  development: [
    new HTMLWebpackPlugin({
      ...htmlPluginConfig,
      template: path.resolve(__dirname, '../static/template.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

module.exports = { plugins };