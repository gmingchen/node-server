/*
 * @Description: mysql 处理封装
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2021-12-29 09:57:33
 */
const mysql = require('mysql')
const { database } = require('../../resources/env')
const { parseDate2Str } = require('.')
const Page = require('./page')

const pool = mysql.createPool({
  host: database.ip,
  port: database.port,
  database: database.name,
  user: database.username,
  password: database.password,
  multipleStatements: true,
  charset: 'UTF8MB4',
  dateStrings: true
});

/**
 * 查询列表
 * @param {String} sql sql语句
 * @returns 
 */
function queryList(sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        reject(error);
        return
      }
      // todo: 返回日期处理
      // sql = sql.replace(/,created_at/, `,DATE_FORMAT(created_at,'%Y-%m-%d %H:%i:%S') as created_at`)
      console.info(new Date(), parseDate2Str(), sql);
      connection.query(sql, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results)
      })
      connection.release()
    })
  })
}

/**
 * 查询一条
 * @param {String} sql sql语句
 * @returns 
 */
function queryOne(sql) {
  return new Promise((resolve, reject) => {
    queryList(sql).then(results => {
      resolve(results && results.length > 0 ? results[0] : null)
    }).catch((error) => {
      reject(error)
    })
  })
}

/**
 * 查询分页 // todo: sql语句拼接的时候不需要加上 limit 这边会主动加上
 * @param {*} sql sql语句
 * @param {*} current 当前页
 * @param {*} size 分页大小
 * @returns 
 */
function queryPage(sql, current = 1, size = 10) {
  const countSql = sql.replace(/^select(.+?)from /, 'select count(*) from ').replace(/\s?$/, ';')
  sql = `${countSql} ${sql.replace(/\s?;$/, '')} limit ${ (current - 1) * size}, ${ size };`
  return new Promise((resolve, reject) => {
    queryList(sql).then(results => {
      let total = 0
      for (const key in results[0][0]) {
        total = results[0][0][key]
      }
      page = new Page(current, size, total, results[1])
      resolve(page)
    }).catch((error) => {
      reject(error)
    })
    
  })
}

/**
 * 插入数据
 * @param {String} sql sql语句
 * @returns 
 */
function insert(sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        reject(error);
        return
      }
      console.info(new Date(), parseDate2Str(), sql);
      connection.query(sql, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.insertId)
      })
      connection.release()
    })
  })
}

/**
 * 更新数据
 * @param {String} sql sql语句
 * @returns 
 */
function update(sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        reject(error);
        return
      }
      console.info(new Date(), parseDate2Str(), sql);
      connection.query(sql, (error, _results) => {
        if (error) {
          reject(error);
        }
        resolve(true)
      })
      connection.release()
    })
  })
}

/**
 * 删除数据
 * @param {String} sql sql语句
 * @returns 
 */
function deletion(sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        reject(error);
        return
      }
      console.info(new Date(), parseDate2Str(), sql);
      connection.query(sql, (error, _results) => {
        if (error) {
          reject(error);
        }
        resolve(true)
      })
      connection.release()
    })
  })
}

/**
 * 新增列名 列值 处理
 * @param {Array} keys 列
 * @param {Object} obj 对象
 * @returns 
 */
function insertFormat(obj, excludeKeys = []) {
  const columns = []
  const values = []
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key) && !excludeKeys.includes(key)) {
      columns.push(key)
      values.push(typeof obj[key] === 'string' ? `'${ obj[key] }'` : obj[key])
    }
  }
  return {
    columns,
    values
  }
}

/**
 * 更新列名 列值 处理
 * @param {Array} keys 列
 * @param {Object} obj 对象
 * @returns 
 */
function updateFormat(obj, excludeKeys = ['id']) {
  const result = []
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key) && !excludeKeys.includes(key)) {
      result.push(`${ key } = ${ typeof obj[key] === 'string' ? `'${ obj[key] }'` : obj[key] }`)
    }
  }
  return result
}

module.exports = {
  queryList,
  queryOne,
  queryPage,
  insert,
  update,
  deletion,
  insertFormat,
  updateFormat
}
