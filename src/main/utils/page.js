/*
 * @Description: 分页封装
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2021-12-29 09:57:33
 */
module.exports = class Page {
  constructor(current, size, total, list) {
    this.current = +current
    this.size = +size
    this.total = +total
    this.pages = Math.ceil(total / size)
    this.list = list
  }
}