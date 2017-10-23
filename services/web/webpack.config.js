const HappyPack = require('happypack');
const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const webpack = require('webpack');
const routes = require('./src/routes');

const isProduction = process.env.NODE_ENV === 'production';
const rootPath = path.resolve(__dirname);
const entryPath = path.join(rootPath, 'src', 'index.js');
const outputPath = path.join(rootPath, 'dist');
const assetsPath = path.join(rootPath, 'assets');

module.exports = {
    entry: entryPath,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: [
                    'babel-loader',
                ],
                exclude: [
                    /node_modules/,
                ],
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico|ttf|otf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=[path][name].[ext]',
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        libraryTarget: 'umd',
        path: outputPath,
        publicPath: '/dist/',
    },
    plugins: [
        new HappyPack({
            loaders: [
                'babel-loader',
            ],
        }),
        new StaticSiteGeneratorPlugin({
            paths: routes.default.map(route => route.path),
            locals: {
                title: 'Starter App',
            },
        }),
    ]
        .concat(isProduction
            ? [
                new webpack.LoaderOptionsPlugin({
                    debug: false,
                }),
                new webpack.optimize.UglifyJsPlugin({
                    sourceMap: true,
                }),
            ]
            : []),
    resolve: {
        alias: {
            'assets': assetsPath,
        }
    },
    target: 'web'
};
