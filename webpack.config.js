const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const resolve = path => require('path').resolve(process.cwd(), path);

module.exports = {
    entry: './src/index',
    output: {
        path: resolve('dist'),
        filename: 'app.js',
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }, {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: { localIdentName: '[hash:base64:8]', modules: true }
                }]
        }],
    },

    plugins: [new HtmlWebpackPlugin({ template: resolve('src/index.html') }), new webpack.EnvironmentPlugin(['NODE_ENV'])],

    devtool: 'source-map',
    target: 'web',

    devServer: {
        contentBase: resolve('dist'),
        historyApiFallback: true,
        port: 5000,
        watchOptions: {
            aggregateTimeout: 1000,
        }
    },
};
