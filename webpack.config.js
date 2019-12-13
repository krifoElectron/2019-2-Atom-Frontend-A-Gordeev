const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const SRC_PATH = path.resolve(__dirname, 'src');
const IMG_PATH = path.resolve(__dirname, 'img');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
  context: SRC_PATH,
  entry: {
    index: './index.js',
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        include: SRC_PATH,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.jpe?g$/,
        include: IMG_PATH,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'build/images/[name].[ext]',
          },
        },
      },
      {
        test: /shadow\.css$/,
        include: SRC_PATH,
        use: [
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /index\.css$/,
        include: SRC_PATH,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'style.css',
    }),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
  ],
};
