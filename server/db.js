// 数据库连接
let mysql = require('mysql')
exports.base = (sql, data, callback) => {
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '916214luo',
    database: 'employment_administration',
  })
  connection.connect()
  connection.query(sql, data, function (error, results, fields) {
    if (error) throw error
    callback && callback(results)
  })
  connection.end()
}
