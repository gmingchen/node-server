const Router = require('koa-router')

const { service, folder } = require('../../resources/env')
const R = require('../utils/response');

const router = new Router({
  prefix: service.contextPath
})

router.get('/', async (ctx) => {
  ctx.body = R.success()
})

// 获取 src / main / modules 下面的 模块
const modules = require('require-all')({
  dirname: __dirname + '/../modules/',
  filter: /^[A-Za-z0-9]+\.js$/,
})

// 给模块中 controller 文件夹下面的 js 文件的路由统一添加模块名为路由 
for(const key in modules) {
  for(const name in modules[key][folder.controller]) {
    if (modules[key][folder.controller].hasOwnProperty(name)) {
      const moduleRouter = modules[key][folder.controller][name]
      router.use(`/${key}`, moduleRouter.routes(), moduleRouter.allowedMethods())
    }    
  }
}

module.exports = router
