const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

let environment = process.env.NODE_ENV;

module.exports = {
    mode: environment,
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    entry: {
        'app': './src/js/index.js'
    },
    output: {
        filename: '[name].js'
    }
}
