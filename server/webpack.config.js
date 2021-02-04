const {resolve} = require('path');

module.exports = {
    entry: './communication.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname,'dist'),
    }
}