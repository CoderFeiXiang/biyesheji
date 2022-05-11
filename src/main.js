import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
Vue.use(VXETable)

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'
new Vue({
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount('#app')
