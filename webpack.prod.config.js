const configWebpack = require ('./webpack.common');
const WebpackBar = require('webpackbar');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

const configProd = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: false,
    plugins: configWebpack.plugins.concat(
        [
            new WebpackBar(),
            new WebpackNotifierPlugin({
            })
        ]
    )
};

module.exports = Object.assign(configWebpack, configProd);