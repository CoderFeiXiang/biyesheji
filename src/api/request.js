import { request } from '@/utils/server.js'

// 登录
export function Login(data) {
  return request({
    url: '/api/login',
    method: 'post',
    data,
  })
}

// 注册
export function registered(data) {
  return request({
    url: '/api/registered',
    method: 'post',
    data,
  })
}

// 不同用户列表
export function userData(data) {
  return request({
    url: '/api/userData',
    method: 'post',
    data,
  })
}
//申请注册列表
export function applicationForm(data) {
  return request({
    url: '/api/applicationForm',
    method: 'post',
    data,
  })
}
//就业信息指导表
export function jobFairInformation(data) {
  return request({
    url: '/api/jobFairInformation',
    method: 'post',
    data,
  })
}
