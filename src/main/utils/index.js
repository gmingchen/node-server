/**
 * 日期转字符串
 * @param {*} time 日期 默认当前日期
 * @param {*} format 格式
 * @returns 
 */
function parseDate2Str(time = new Date(), format = '{y}-{M}-{d} {h}:{m}:{s}') {
  let result = ''
  let date = new Date()
  const type = typeof time
  if (type === 'object') {
    date = time
  } else if (type === 'number') {
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  result = format.replace(/\{[yMdhmsa]+\}/g, (val) => {
    const key = val.replace(/\{|\}/g, '')
    const value = formatObj[key]
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    return value.toString().padStart(2, '0')
  })
  return result
}

module.exports = {
  parseDate2Str
}