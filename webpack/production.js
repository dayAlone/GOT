import webpack from 'webpack'
import config from 'config'
import CompressionPlugin from 'compression-webpack-plugin'

// PostCSS plugins
import autoprefixer from 'autoprefixer'
import mqpacker from 'css-mqpacker'
import cssnano from 'cssnano'
import base64 from 'postcss-inline-base64'

export default {
    entry: {
        app: [
            config.dir + '/client/js/index.js'
        ]
    },
    output: {
        path: config.dir + '/public/js/',
        publicPath: '/layout/js/',
        filename: '[name].js',
        pathinfo: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.styl$/,
                loaders: ['style-loader', 'css-raw-loader', 'postcss', 'stylus-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-raw-loader', 'postcss']
            }
        ]
    },
    postcss() {
        return [
            autoprefixer(({ browsers: 'last 2 version' })),
            mqpacker({ sort: true }),
            cssnano({ reduceIdents: false }),
            base64({ baseDir: `${config.dist}/css/`})
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new CompressionPlugin({
            asset: '{file}.gz',
            algorithm: 'gzip',
            regExp: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
