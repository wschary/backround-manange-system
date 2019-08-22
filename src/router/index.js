// 职责：创建一个router实例导出给main.js使用
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  // 路由规则
  routes: [
    // name: 'login' 给当前路由取名
    // 跳转使用：$router.push('/login') 或者 $router.push({name:'login'})
    { path: '/login', name: 'login', component: Login }
  ]
})

export default router
