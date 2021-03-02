const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  return {
    mode: env.NODE_ENV || 'none',
    devtool: 'inline-source-map',
    entry: ['./src/script.ts', './src/style.scss'],
    output: {
      path: resolve(__dirname, './dist'),
      filename: '[name].[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.(sa?)?css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
  };
};