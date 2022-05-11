const express = require('express')
const router = express.Router()
const services = require('./services.js')
// router.get('/',services.start)
// 登录功能
router.post('/api/login', services.login)
// 注册功能
router.post('/api/registered', services.registered)
//获取所有用户
router.post('/api/studentData', services.studentData)

module.exports = router
