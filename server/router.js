const express = require('express')
const router = express.Router()
const services = require('./services.js')
// router.get('/',services.start)
// 登录功能
router.post('/api/login', services.login)
// 注册功能
router.post('/api/registered', services.registered)
//获取不同类型用户
router.post('/api/userData', services.userData)
// 申请注册表
router.post('/api/applicationForm', services.applicationForm)
//管理员批准申请的账户
router.post('/api/approveAccount', services.approveAccount)
// 就业信息指导表
router.post('/api/jobFairInformation', services.jobFairInformation)

module.exports = router
