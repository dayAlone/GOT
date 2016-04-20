import webpack from 'webpack'
import config from 'config'
import autoprefixer from 'autoprefixer'

let webpackConfig = {
    entry: {
        app: [
            config.dir + '/client/js/index.js',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
        ]
    },
    output: {
        path: config.dir + '/public/js/',
        publicPath: '/layout/js/',
        filename: '[name].js',
        pathinfo: true
    },
    module: {
        noParse: [/moment.js/],
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-raw-loader']
            },
            {
                test: /\.styl$/,
                loaders: ['style-loader', 'css-raw-loader', 'postcss', 'stylus-loader']
            }
        ]
    },
    postcss() {
        return [autoprefixer(({ browsers: 'last 2 version' }))]
    },
    stylus: {
        use: [require('nib')()],
        import: ['~nib/lib/nib/index.styl']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}

export default webpackConfig
