const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

let environment = process.env.NODE_ENV;

module.exports = {
    mode: environment,
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        compatConfig: {
                            MODE: 2,
                            WATCH_ARRAY: false
                        }
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({ __VUE_OPTIONS_API__: true, __VUE_PROD_DEVTOOLS__: true })
    ],
    entry: {
        'app': './src/js/index.js'
    },
    output: {
        filename: '[name].js'
    }
}
