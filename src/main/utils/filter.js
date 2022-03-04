/*
 * @Description: 过滤处理
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2021-12-29 09:57:33
 */
const R = require('./response');
const Constant = require('./constant');
const { parseDate2Str } = require('./index')

module.exports = (app) => {
  app.use(async (ctx, next) => {
    console.log(new Date(), parseDate2Str(), ctx.request.header.host, ctx.request.url, ctx.request.method);
    console.log(new Date(), parseDate2Str(), ctx.query, ctx.body || {});
    try {
      await next()
    } catch (error) {
      if (error.code) {
        ctx.body = R.error(Constant.ERROR_CODE, 'SQL异常')
      } else if (error.message.split(':').length === 2) {
        const [code, message] = error.message.split(':')
        ctx.body = R.error(code, message)
      } else {
        ctx.body = R.error()
      }
    }
    switch (+ctx.status) {
      case 404:
        ctx.body = R.error(Constant.NOT_FOUND_CODE, Constant.NOT_FOUND_MESSAGE)
        break;
    }
  })
}