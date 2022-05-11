const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*', //允许所有域名访问
      'Access-Control-Allow-Credentials': 'true', //是否允许后续请求携带认证信息（cookies）,该值只能是true,否则不返回
    },
    // proxy: {
    //   '/api': {
    //      target: 'http://127.0.0.0:8081',
    //     // target: 'http://www.zhipin.com/wapi/zpCommon/data/city.json',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '',
    //     },
    //   },
    // },
  },
}
