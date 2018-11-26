const Koa = require('koa')
const route = require('koa-route')
const static = require('koa-static')
const fs = require('fs')
const path = require('path')

const app = new Koa()
const port = process.env.PORT || '3333'
const assets = static(path.join(__dirname, '../dist'))

const index = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('/dist/index.html')
}

app.use(assets)
app.use(route.get('/', index))

app.listen(port)
