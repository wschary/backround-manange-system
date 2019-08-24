import Vue from 'vue'
import App from './App.vue'

import ELEMENTUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.less'

// @ src的绝对路径 在vue-cli的项目中才可使用
// 目录的默认索引文件  index文件  .js .vue .json 优先级按照现在的顺序
import router from '@/router'

Vue.use(ELEMENTUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// main.js 是入口文件，职责：
// 1. 所有的全局依赖的包 文件 导入
// 2. 创建vue根实例
// App.vue 根组件
