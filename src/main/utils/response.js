/*
 * @Description: 响应参数统一封装
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2021-12-29 09:57:33
 */
const Constant = require('./constant');

module.exports = class Response {
  constructor(code, message, data) {
    this.code = code
    this.message = message
    this.data = data
  }
  static success(data) {
    return new Response(Constant.SUCCESS_CODE, Constant.SUCCESS_MESSAGE, data)
  }
  static error() {
    return new Response(Constant.ERROR_CODE, Constant.ERROR_MESSAGE)
  }
  static error(message) {
    return new Response(Constant.ERROR_CODE, message)
  }
  static error(code, message) {
    return new Response(code, message)
  }
  static error(code, message, data) {
    return new Response(code, message, data)
  }
}
