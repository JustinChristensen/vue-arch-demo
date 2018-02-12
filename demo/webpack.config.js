const { DefinePlugin } = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { resolve } = require('path')
const { NODE_ENV } = process.env
const dirs = {}

dirs.src = './src'
dirs.dist = './dist'

function getPlugins() {
    const plugins = [
        new DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new HtmlPlugin({
            template: resolve(dirs.src, 'index.html'),
            filename: 'index.html',
            inject: true
        })
    ]

    if (NODE_ENV === 'production') {
        plugins.push(new UglifyJsPlugin({
            parallel: true,
            cache: true
        }))
    }

    return plugins
}

function getFileName() {
    return NODE_ENV === 'production' ?
        `[name].min.js` :
        `[name].js`
}

module.exports = {
    entry: resolve(dirs.src),
    output: {
        path: resolve(dirs.dist),
        filename: getFileName()
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        mainFiles: ['main']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: getPlugins()
}
