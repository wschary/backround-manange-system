<template>
  <div class='container'>
    <div>header</div>
    <div><slot name="content" :abc="msg" def="100">content</slot></div>
    <div><slot name="footer">footer</slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '组件内部数据COM-A'
    }
  }
}
</script>

<style scoped lang='less'></style>
