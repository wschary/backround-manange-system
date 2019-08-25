import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 导入 axios  和  存取token的文件

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

export default axios

axios.interceptors.request.use((config) => {
  config.headers.Athorization = 'Bearer ' + store.getUser().token
  return config
}, (err) => {
  return Promise.reject(err)
})
axios.interceptors.response.use((res) => {
  return res
}, (err) => {
  if (err.response.status === 401) {
    store.delUser()
    router.push('/login')
  }
  return Promise.reject(err)
})
