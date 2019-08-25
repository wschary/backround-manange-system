<template>
  <div class='container' style="text-align:center">
    <img src="../../assets/images/welcome.jpg" alt="">
  </div>
</template>

<script>
export default {
  created () {
    // 测试 token 是否好使
    this.$http.get('http://ttapi.research.itcast.cn/mp/v1_0/articles')
      .then(res => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style scoped lang='less'></style>
