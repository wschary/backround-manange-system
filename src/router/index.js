// 职责：创建一个router实例导出给main.js使用

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  // 路由规则
  routes: []
})

export default router
