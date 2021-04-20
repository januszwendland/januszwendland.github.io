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
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    entry: {
        'app': './src/app.js'
    },
    output: {
        filename: '[name].js'
    }
}
