const Dao = require('../dao');
const { parseDate2Str } = require('../../../utils');

/**
 * 分页列表
 * @param {Number} current 当前页
 * @param {Number} size 分页大小
 * @param {String} username 用户名
 * @param {String} nickname 昵称
 * @returns 
 */
const page = (current, size, username, nickname) => {
  return Dao.page(current, size, username, nickname)
}

/**
 * 信息
 * @param {Number} id ID
 * @returns 
 */
const info = (id) => {
  return Dao.info(id)
}

/**
 * 新增
 * @param {Object} user 对象 
 * @returns 
 */
const create = async (user) => {
  user.created_at = parseDate2Str()
  return Dao.create(user)
}

/**
 * 编辑
 * @param {Object} user 对象 
 * @returns 
 */
const update = async (user) => {
  return Dao.update(user)
}

/**
 * 删除
 * @param {Array} ids 
 * @returns 
 */
const deletion = async (ids) => {
  return Dao.deletion(ids)
}

module.exports = {
  page,
  info,
  create,
  update,
  deletion
}
