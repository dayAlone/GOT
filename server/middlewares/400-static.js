import serve from 'koa-static-server'
import config from 'config'
let { folders: { dist: dist } } = config
export default serve({
    rootDir: dist,
    rootPath: '/layout/'
})
