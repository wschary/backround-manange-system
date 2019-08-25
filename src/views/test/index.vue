<template>
  <div class='container'>Test</div>
</template>

<script>
export default {
  async created () {
    console.log('ok')
    // 使用 promise 方式
    // 调用A
    // this.$http.get('http://localhost:3000/a').then(res => {
    //   console.log(res.data)
    //   // 调用B
    //   return this.$http.get('http://localhost:3000/b')
    // }).then(res => {
    //   console.log(res.data)
    // })

    // 函数的返回值  加载await之后  是then接受的数据
    // 在使用await之后在 外层函数必须用async 来申明
    const resA = await this.$http.get('http://localhost:3000/a')
    const resB = await this.$http.get('http://localhost:3000/b')
    console.log(resA.data, resB.data)
  }
}
</script>

<style scoped lang='less'></style>
