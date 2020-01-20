/**
 * made by jzhao.
 **/

import Vue from 'vue'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css'
import '@/assets/styles/index.scss'
import 'font-awesome/css/font-awesome.css'
import echarts from 'echarts'
import axios from 'axios'
import '@/assets/iconfont/iconfont.css'
import './router-permission.js'
import router from "./router";

Vue.prototype.$axios = axios
// element-ui
Vue.use(ElementUI, {
  size: 'small'
})

// echarts
Vue.prototype.$echarts = echarts

axios.defaults.baseURL = process.env.VUE_APP_REST_URL

axios.interceptors.request.use(
  config => {
    // IE10 get请求因为缓存问题，导致无法发起真实请求
    // if (config.method === 'get') {
    //   if (!config.params) {
    //     config.params = {}
    //   }
    //   config.params['_t'] = new Date().getTime()
    // }

    // 为所有的请求添加访问令牌
    let token = window.localStorage.getItem('access_token')
    if (token == null) {
      console.warn('访问令牌为空，无法给请求添加令牌。')
    }
    config.headers.common['TOKEN'] = token
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    //config.headers.common['Accept'] = 'application/x-www-form-urlencoded, text/plain, */*'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // 非法的身份或者身份过期，需要重新登录
    if (error.response.status === 401) {
      //router.push('/Err401')
      window.localStorage.removeItem("access_token")
      window.localStorage.removeItem("username")
      Vue.prototype.$message.error('token过期，请重新登陆')
      router.push('/login')
      return
    }
    // 未授权访问，给用户提示或路由到一个其他错误页面
    if (error.response.status === 403) {
      router.push('/Err403')
      return
    }
    // 参数绑定异常或捕获到的业务异常
    if (error.response.status === 400 || error.response.status === 500) {
      Vue.prototype.$message.error(error.response.data.message || '服务器繁忙')
    }
    return Promise.reject(error)
  }
)