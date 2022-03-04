const Mysql = require('../../../utils/mysql')

/**
 * 分页列表
 * @param {Number} current 当前页
 * @param {Number} size 分页大小
 * @param {String} username 用户名
 * @param {String} nickname 昵称
 * @returns 
 */
const page = (current, size, username, nickname) => {
  let sql = `select * from user`
  sql += ` where 1 = 1`
  sql += username ? ` and username like '%${ username }%'` : ''
  sql += nickname ? ` and nickname like '%${ nickname }%'` : ''
  sql += ` order by created_at desc`
  return Mysql.queryPage(sql, current, size)
}

/**
 * 信息
 * @param {Number} id ID
 * @returns 
 */
const info = (id) => {
  const sql = `select * from user where id = ${ id }`
  return Mysql.queryOne(sql)
}

/**
 * 新增
 * @param {Object} user 对象 
 * @returns 
 */
const create = (user) => {
  const { columns, values } = Mysql.insertFormat(user, ['id'])
  const sql = `insert into user (${ columns.join(',') }) values (${ values.join(',') });`
  return Mysql.insert(sql)
}

/**
 * 编辑
 * @param {Object} user 对象 
 * @returns 
 */
const update = (user) => {
  const columns = Mysql.updateFormat(user)
  const sql = `update user set ${ columns.join(',') } where id = ${ user.id };`
  return Mysql.update(sql)
}

/**
 * 删除
 * @param {Array} ids ID 数组
 * @returns 
 */
const deletion = (ids) => {
  const sql = `delete from user where id in (${ ids.join(',') })`
  return Mysql.deletion(sql)
}

module.exports = {
  page,
  info,
  create,
  update,
  deletion
}
