var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    context: __dirname,
    entry: "./src/app.loader.js",
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    watch: true,
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[ext]'
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            },
            {
                test: /\.css$/,
                loader: "style!css?minimize"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};