const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  return {
    mode:'development',
    entry: ['./src/index.js', './src/style.scss'],
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
                test:/\.js/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{presets:["@babel/preset-env"]}
                    }
                ]
            }
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