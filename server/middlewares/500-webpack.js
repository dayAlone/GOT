import webpack from 'webpack'
import c2k from 'koa-connect'
import webpackDevMiddleware from 'koa-webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config'

const compiler = webpack(webpackConfig)

export default process.env.NODE_ENV === 'development' ? [
    webpackDevMiddleware(compiler, {
        noInfo: false,
        publicPath: '/layout/js/',
        quiet: true,
        stats: {
            chunk: false,
            chunkModules: false,
            version: false,
            colors: true,
            hash: false
        }
    }),
    c2k(webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr'
    }))
] : false
