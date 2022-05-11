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

// 毕业生账户
export function stuData(data) {
  return request({
    url: '/api/studentData',
    method: 'get',
    data,
  })
}
