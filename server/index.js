import Koa from 'koa'
import initMiddlewares from './middlewares'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

initMiddlewares(app)

router.get('/', ctx => {
    ctx.body = ctx.render('index')
})

router.get('/robots.txt', ctx => {
    ctx.body = `User-agent: *
    \n Disallow: /`
})

app.use(router.routes())
app.listen(process.env.PORT || 3000)
