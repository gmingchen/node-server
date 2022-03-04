const router = require('koa-router')()
const R = require('../../../utils/response')
const Service = require ('../service')
const Constant = require('../../../utils/constant');

// #region 分页列表
/** 
 * 分页列表
 *
 * @api {GET} /slipper/user/page page
 * @apiDescription 用户分页列表
 * @apiVersion 1.0.0
 * @apiGroup User
 * @apiName page
 * @apiParamExample 请求参数示例
 * {
 *     page: 1, // 当前页
 *     size: 10, // 页面大小
 *     username: '', // 用户名
 *     nickname: '', // 昵称
 * }
 * @apiSuccessExample 响应结果示例
 * {
 *     code: 0,
 *     message: '成功!',
 *     data: {
 *         current: 1, // 当前页
 *         size: 1, // 页面大小
 *         total: 1, // 总条数
 *         pages: 1, // 总页数
 *         list: [{
 *         	   id: '', // ID
 *         	   username: '', // 用户名
 *         	   password: '', // 密码
 *         	   nickname: '', // 昵称
 *         	   mobile: '', // 手机号
 *         	   email: '', // 邮箱
 *         	   sex: '', // 性别：0-女 1-男 2-未知
 *             created_at: '' // 创建时间
 *         }]
 *     }
 * }
 */
//#endregion
router.get('/page', async (ctx) => {
  const { current, size, username, nickname } = ctx.query
  await Service.page(current, size, username, nickname).then(r => {
    ctx.body = R.success(r)
  })
})

// #region 信息
/** 
 * 信息
 *
 * @api {GET} /slipper/user/info info
 * @apiDescription 用户信息
 * @apiVersion 1.0.0
 * @apiGroup User
 * @apiName info
 * @apiParamExample 请求参数示例
 * {
 *     id: 1, // ID
 * }
 * @apiSuccessExample 响应结果示例
 * {
 *     code: 0,
 *     message: '成功!',
 *     data: {
 *         id: '', // ID
 *         username: '', // 用户名
 *         password: '', // 密码
 *         nickname: '', // 昵称
 *         mobile: '', // 手机号
 *         email: '', // 邮箱
 *         sex: '', // 性别：0-女 1-男 2-未知
 *         created_at: '' // 创建时间
 *     }
 * }
 */
//#endregion
router.get('/info', async (ctx) => {
  const { id } = ctx.query
  await Service.info(id).then(r => {
    ctx.body = R.success(r ? r : {})
  })
})

// #region 新增
/** 
 * 新增
 *
 * @api {POST} /slipper/user/create create
 * @apiDescription 用户新增
 * @apiVersion 1.0.0
 * @apiGroup User
 * @apiName create
 * @apiParamExample 请求参数示例
 * {
 *     username: '', // 用户名
 *     password: '', // 密码
 *     nickname: '', // 昵称
 *     mobile: '', // 手机号
 *     email: '', // 邮箱
 *     sex: '', // 性别：0-女 1-男 2-未知
 * }
 * @apiSuccessExample 响应结果示例
 * {
 *     code: 0,
 *     message: '成功!'
 * }
 */
//#endregion
router.post('/create', async (ctx) => {
  const user = ctx.request.body
  await Service.create(user).then(r => {
    ctx.body = R.success(r)
  })
})

// #region 编辑
/** 
 * 编辑
 *
 * @api {POST} /slipper/user/update update
 * @apiDescription 用户编辑
 * @apiVersion 1.0.0
 * @apiGroup User
 * @apiName update
 * @apiParamExample 请求参数示例
 * {
 *     id: '', // ID
 *     username: '', // 用户名
 *     password: '', // 密码
 *     nickname: '', // 昵称
 *     mobile: '', // 手机号
 *     email: '', // 邮箱
 *     sex: '', // 性别：0-女 1-男 2-未知
 * }
 * @apiSuccessExample 响应结果示例
 * {
 *     code: 0,
 *     message: '成功!'
 * }
 */
//#endregion
router.post('/update', async (ctx) => {
  const user = ctx.request.body
  await Service.update(user).then(r => {
    ctx.body = R.success(r)
  })
})

// #region 删除
/** 
 * 删除
 *
 * @api {POST} /slipper/user/delete delete
 * @apiDescription 用户删除
 * @apiVersion 1.0.0
 * @apiGroup User
 * @apiName delete
 * @apiParamExample 请求参数示例
 * {
 *     ids: [], // ID数组
 * }
 * @apiSuccessExample 响应结果示例
 * {
 *     code: 0,
 *     message: '成功!'
 * }
 */
//#endregion
router.post('/delete', async (ctx) => {
  const { ids } = ctx.request.body
  if (ids && ids.length) {
    await Service.deletion(ids).then(_r => {
      ctx.body = R.success()
    })
  } else {
    ctx.body = R.error(Constant.VALIDATE_ERROR_CODE, Constant.VALIDATE_ERROR_MESSAGE, 'ID不能为空')
  }
})

module.exports = router