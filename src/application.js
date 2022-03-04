const Koa = require('koa')
const cors = require('koa2-cors');
const Body = require('koa-body')
const BodyParser = require('koa-bodyparser')
const Static = require('koa-static')

const { env, service, file } = require('./resources/env')
const Router = require('./main/router')
const Filter = require('./main/utils/filter')

const app = new Koa()

// 设置跨域
app.use(cors({
  origin: function() {
    return '*';
  },
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))

// 设置静态文件夹
app.use(Static(__dirname + '/resources/static'))

// 设置请求体 文件大小
app.use(Body({
  multipart: true,
  formidable: {
    maxFileSize: file.size
  }
}))

// 设置请求参数支持 json 格式
app.use(new BodyParser())

// 拦截处理
Filter(app)

// 使用路由 并启动服务
app.use(Router.routes()).listen(service.port)

console.log(new Date(), `Node started on port(s): ${ service.port } (http) with context path '${ service.contextPath }' - ${ env }`)
