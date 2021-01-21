const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = [
  {
    entry: './src/App.tsx',
    target: 'electron-renderer',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }],
        },
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: __dirname + '/dist',
      filename: 'App.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),

      new CopyPlugin({
        patterns: [{ from: 'public/images', to: 'images' }],
      }),
      new CleanWebpackPlugin({
        dry: true,
        verbose: true,
        cleanOnceBeforeBuildPatterns: ['dist/electron.js'],
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env.NODE_ENV),
      }),
    ],
  },
];
