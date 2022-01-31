const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/pages/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node-modules/,
            },
            {
                test: /\.css$/,
                use: [miniCssPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
              },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
        }),
        new miniCssPlugin(),
    ]
}