const db = require('./db.js')
exports.start = (req, res) => {}
// 获取所有用户信息
exports.studentData = (req, res) => {
  let article = ''
  let allData = 'select * from t_user'
  db.base(allData, (err, result) => {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message)
      return
    } else {
      let dataString = JSON.stringify(result)
      let data = JSON.parse(dataString)
      console.log(data)
      article = data
    }
    return res.json(article)
  })
}

// 登录处理
exports.login = (req, res) => {
  let username = req.body.username
  let psw = req.body.password
  let type = req.body.type
  // 查询语句
  let sql = 'select * from t_user where userId = ? and type =' + type
  db.base(sql, username, (result) => {
    if (!result.length) {
      return res.json({ status: -1, msg: '账号错误' })
    } else {
      // [ RowDataPacket { password: '123', username: 'admin', id: 1 } ]
      if (result[0].password == psw) {
        console.log(req.body)
        return res.json({ msg: '登录成功', status: 0, data: result })
      }
      return res.json({ status: -1, msg: '密码错误' })
    }
  })
}

// 注册处理
exports.registered = (req, res) => {
  console.log(req.body)
  // 先判断是否存在该用户
  let searchSql = 'select * from t_registered where phone = ' + req.body.phone
  db.base(searchSql, req.body.phone, (result) => {
    console.log(result.length)
    if (result.length != 0) {
      return res.json({ status: -1, msg: '账号已存在' })
    } else {
      // 注册语句
      let sql = ''
      if (req.body.type == 1) {
        sql =
          'insert into t_registered(name,type,phone) values' +
          "('" +
          req.body.name +
          "','" +
          req.body.type +
          "','" +
          req.body.phone +
          "')"
      } else if (req.body.type == 2) {
        sql =
          'insert into t_registered(enterpriseName,name,region,type,phone) values' +
          "('" +
          req.body.enterpriseName +
          "','" +
          req.body.name +
          "','" +
          req.body.region +
          "','" +
          req.body.type +
          "','" +
          req.body.phone +
          "')"
      } else if (req.body.type == 3) {
        sql =
          'insert into t_registered(class,name,type,phone) values' +
          "('" +
          req.body.class +
          "','" +
          req.body.name +
          "','" +
          req.body.type +
          "','" +
          req.body.phone +
          "')"
      }
      console.log(sql)
      db.base(sql, req.body.phone, (result) => {
        return res.json({ status: 1, msg: '提交成功' })
      })
    }
  })

  // console.log(sql)
}

exports.register = (req, res) => {
  console.log(req.body)
  res.send('测试')
}
