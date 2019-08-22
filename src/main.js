import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// main.js 是入口文件，职责：
// 1. 所有的全局依赖的包 文件 导入
// 2. 创建vue根实例
// App.vue 根组件
