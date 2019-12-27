const configWebpack = require ('./webpack.common');

const WebpackNotifierPlugin = require('webpack-notifier');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const path = require('path');

const configDev = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        port: 3000,
        open: true
        // hot:true
    },
    devtool: 'source-map',
    plugins: configWebpack.plugins.concat(
        [
            new WebpackNotifierPlugin({
            })
            // new BundleAnalyzerPlugin(),
        ]
    )
};

module.exports = Object.assign(configWebpack, configDev);