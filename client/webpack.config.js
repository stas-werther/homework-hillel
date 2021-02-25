const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  return {
    mode: env.NODE_ENV || 'none',
    entry: ['./src/script.js', './src/style.scss'],
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
      ],
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