const db = require('./db.js')
exports.start = (req, res) => {}
// 获取不同用户列表
exports.userData = (req, res) => {
  console.log(req.body.type)
  // 查询语句
  let sql = ''
  if (req.body.type == 1) {
    sql = 'select * from t_admin where type = ' + req.body.type
    if (req.body.userId != '') {
      sql = sql + " and userId like '" + '%' + req.body.userId + "%'"
    }
    if (req.body.name != '') {
      sql = sql + " and name like '" + '%' + req.body.name + "%'"
    }
    if (req.body.phone != '') {
      sql = sql + " and phone like  '" + '%' + req.body.phone + "%'"
    }
    if (req.body.states != '') {
      sql = sql + ' and states = ' + req.body.states
    }
  } else if (req.body.type == 2) {
    sql = 'select * from t_company where type = ' + req.body.type
    if (req.body.enterpriseName != '') {
      sql =
        sql +
        " and enterpriseName like '" +
        '%' +
        req.body.enterpriseName +
        "%'"
    }
    if (req.body.name != '') {
      sql = sql + " and name like '" + '%' + req.body.name + "%'"
    }
    if (req.body.phone != '') {
      sql = sql + " and phone like  '" + '%' + req.body.phone + "%'"
    }
    if (req.body.states != '') {
      sql = sql + ' and states = ' + req.body.states
    }
  } else if (req.body.type == 3) {
    sql = 'select * from t_student where type = ' + req.body.type
    if (req.body.name != '') {
      sql = sql + " and name like '" + '%' + req.body.name + "%'"
    }
    if (req.body.sex != '') {
      sql = sql + ' and sex = ' + req.body.sex
    }
    if (req.body.college != '') {
      sql = sql + " and college like  '" + '%' + req.body.college + "%'"
    }
    if (req.body.class != '') {
      sql = sql + " and class like '" + '%' + req.body.class + "%'"
    }
  }
  console.log(sql)
  db.base(sql, (err, result) => {
    console.log(result)
    // if (err) {
    //   console.log('[SELECT ERROR] - ', err.message)
    //   return
    // } else {
    //   let dataString = JSON.stringify(result)
    //   let data = JSON.parse(dataString)
    //   console.log(data)
    //   article = data
    // }
    return res.json({
      status: 1,
      msg: '成功',
      data: result,
    })
  })
}

// 管理员同意申请的账号
exports.approveAccount = (req, res) => {
  let sql = ''
  if (req.body.type == 1) {
    sql =
      'insert into t_admin(name,type,phone) values' +
      "('" +
      req.body.name +
      "','" +
      req.body.type +
      "','" +
      req.body.phone +
      "')"
  } else if (req.body.type == 2) {
    sql =
      'insert into t_company(enterpriseName,name,region,type,phone) values' +
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
      'insert into t_student(class,name,type,phone) values' +
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
  db.base(sql, (err, result) => {
    console.log(result)
    if (result.length != 0) {
      return res.json({
        status: 1,
        msg: '成功',
        data: result,
      })
    }
    // if (err) {
    //   console.log('[SELECT ERROR] - ', err.message)
    //   return
    // } else {
    //   let dataString = JSON.stringify(result)
    //   let data = JSON.parse(dataString)
    //   console.log(data)
    //   article = data
    // }
  })
}

// 申请注册表
exports.applicationForm = (req, res) => {
  let sql = ''
  if (req.body.name == '' && req.body.phone == '' && req.body.type == '') {
    sql = 'select * from t_registered'
  } else {
    sql = 'select * from t_registered where'
    if (req.body.name != '') {
      sql = sql + ' name like ' + "'%" + req.body.name + "%'"
    }
    if (req.body.phone != '') {
      sql = sql + ' and phone like ' + "'%" + req.body.phone + "%'"
    }
    if (req.body.type != '') {
      sql = sql + ' and type = ' + req.body.type
    }
  }
  console.log(sql)
  db.base(sql, (err, result) => {
    console.log(result)
    if (result.length > 0) {
      return res.json({ status: 0, msg: '成功', data: result })
    } else {
      return res.json({ status: -1, msg: '异常' })
    }
  })
}

// 就业信息指导表
exports.jobFairInformation = (req, res) => {
  console.log(req.body)
  let sql = 'select * from t_jobfairinformation where  '
  if (
    req.body.jyzdTitle == '' &&
    req.body.region == '' &&
    req.body.data == ''
  ) {
    sql = 'select * from t_jobfairinformation'
  }
  if (req.body.jyzdTitle != '') {
    sql = sql + "jyzdTitle like '" + '%' + req.body.jyzdTitle + '%' + "'"
  }
  if (req.body.region) {
    sql = sql + "region like '" + '%' + req.body.region + '%' + "'"
  }
  if (req.body.data) {
    sql = sql + "data like '" + '%' + req.body.data + '%' + "'"
  }
  console.log(sql)
  db.base(sql, (err, result) => {
    console.log(result)
    if (result.length > 0) {
      return res.json({ status: 0, msg: '成功', data: result })
    } else {
      return res.json({ status: -1, msg: '异常' })
    }
  })
}

// 登录处理
exports.login = (req, res) => {
  let username = req.body.username
  let psw = req.body.password
  let type = req.body.type
  // 查询语句
  let sql = ''
  if (type == 1) {
    sql =
      "select * from t_admin where userId = '" +
      req.body.username +
      "'and type = 1"
  } else if (type == 2) {
    sql =
      "select * from t_company where userId = '" +
      req.body.username +
      "' and type = 2"
  } else if (type == 3) {
    sql =
      "select * from t_student where userId = '" +
      req.body.username +
      "' and type = 3"
  }
  db.base(sql, username, (result) => {
    if (!result.length) {
      return res.json({ status: -1, msg: '账号错误' })
    } else {
      console.log(result)
      if (result[0].password == psw) {
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
    if (result.length != 0) {
      return res.json({ status: -1, msg: '该电话已注册,请联系管理员' })
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
        return res.json({ status: 1, msg: '提交成功,请等待管理员审核' })
      })
    }
  })

  // console.log(sql)
}

exports.register = (req, res) => {
  console.log(req.body)
  res.send('测试')
}
