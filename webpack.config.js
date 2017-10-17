const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const SOURCE_PATH = path.resolve(__dirname, 'src')
const DESTINATION_PATH = path.resolve(__dirname, 'dist')

const htmlInjectConfig = new HtmlWebpackPlugin({
    template: SOURCE_PATH + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: SOURCE_PATH + '/app/app.js',
    output: {
        path: DESTINATION_PATH,
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'env',
                        'react'
                    ]
                }
            },
            {
                test: /.scss$/,
                loader: ExtractTextWebpackPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        htmlInjectConfig,
        new ExtractTextWebpackPlugin('styles/main.css', {
            allChunks: true
        })
    ]
}
