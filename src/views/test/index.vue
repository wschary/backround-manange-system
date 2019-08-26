<template>
  <div class='container'>
    <com-a>
      <!-- slot="content" 指定插入的插槽名称 -->
      <!-- slot-scope 获取组件内容给插槽传递的数据  scope是收集了当前插槽上所有绑定的数据  -->
      <!-- <div slot="content" slot-scope="scope">con1 {{scope.abc}}</div> -->
      <!-- 新写法使用 v-slot 指令  v-slot:插槽名称="作用域数据对象" -->
      <template v-slot:content="scope">con1 {{scope.abc}}</template>
      <div slot="footer">foot1</div>
    </com-a>
    <hr>
    <com-a>
      <div slot="content">con2</div>
      <div slot="footer">foot2</div>
    </com-a>
    <hr>
    <com-a></com-a>
  </div>
</template>

<script>
import ComA from '@/components/com-a'
export default {
  components: { ComA }
  // async created () {
  //   console.log('ok')
  //   // 使用 promise 方式
  //   // 调用A
  //   // this.$http.get('http://localhost:3000/a').then(res => {
  //   //   console.log(res.data)
  //   //   // 调用B
  //   //   return this.$http.get('http://localhost:3000/b')
  //   // }).then(res => {
  //   //   console.log(res.data)
  //   // })

  //   // 函数的返回值  加载await之后  是then接受的数据
  //   // 在使用await之后在 外层函数必须用async 来申明
  //   const resA = await this.$http.get('http://localhost:3000/a')
  //   const resB = await this.$http.get('http://localhost:3000/b')
  //   console.log(resA.data, resB.data)
  // }
}
</script>

<style scoped lang='less'></style>
