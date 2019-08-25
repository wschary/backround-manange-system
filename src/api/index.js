// 负责 配置axios  提供一个配置好的AXIOS即可。
import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 默认配置  基准地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 默认配置  请求头携带token
// axios.defaults.headers.Authorization = 'Bearer ' + store.getUser().token
// Vue.prototype.$http = axios

// 配置一个请求拦截器(在每次请求的头部加上一个token)
// 每次发送请求之前 执行拦截器
axios.interceptors.request.use((config) => {
  // 拦截成功
  // 加token
  config.headers.Authorization = 'Bearer ' + store.getUser().token
  return config
}, (err) => {
  // 拦截失败 (成功的业务中出现报错)
  return Promise.reject(err)
})

// 配置一个响应拦截器（在每次响应失败的时候判断token是否失效）
axios.interceptors.response.use(res => res, err => {
  // err 获取 状态码
  if (err.response.status === 401) {
    // token失效  清除存储token  重新登录
    store.delUser()
    // 登录path 是 '/login'
    // 1. 跳转到登录页面  hash = #/login  使用 location
    // window.location.hash = '#/login'
    // 2. 使用路由来进行跳转
    router.push('/login')
  }
  return Promise.reject(err)
})

export default axios
