const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: '/src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    // mode: 'production',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node-modules/,
                use: 'babel-loader',
            }
        ]
    },
    devServer: {
        open: true,
        port: 8000,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
}