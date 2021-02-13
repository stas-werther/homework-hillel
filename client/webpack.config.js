const { resolve } = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env) =>{
    console.log(env)
    return {
        mode: 'development',
        entry: ['./src/index.js'],
        output: {
            path: resolve(__dirname, './dist'),
            filename: 'index.js'
        },
        plugins: [
            new htmlWebPackPlugin({
                template: './src/index.html',
            })
        ],
    }
}