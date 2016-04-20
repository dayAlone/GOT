import fs from 'fs'
import convert from 'koa-convert'

const excludes = [
    'index.js',
    '.DS_Store'
]

const middlewares = fs.readdirSync(__dirname).filter(file => { return !excludes.includes(file) }).sort()

const use = (app, func) => {
    if (typeof func === 'function') app.use(convert(func))
}

export default (app) => {
    middlewares.forEach((middleware) => {
        const data = require(`./${middleware}`)
        if (data && typeof data === 'object' && data.length > 0) {
            data.forEach(elem => {
                use(app, elem)
            })
        } else {
            use(app, data)
        }
    })
}
