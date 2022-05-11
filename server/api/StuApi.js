// 用于创建接口
const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
// 连接数据库
const conn = mysql.createConnection(models.mysql)
conn.connect()
/* const jsonWrite = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1', msg: '操作失败'
    });
  } else {
    res.json(
      ret
    );
  }
}; */

// 接口：查询表
router.get('/showStu', (req, res) => {
  res.send('连接成功')
})

module.exports = router
