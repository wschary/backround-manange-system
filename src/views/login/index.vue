<template>
  <div class="container">
    <!-- 卡片 element-ui 组件 -->
    <el-card class="my-card">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:236px;margin-right:10px"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()" style="width:100%">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    // 定义校验函数  先申明
    // 1. 三个参数
    // 2. rule 校验规则对象  value 当前字段值 callback 校验后回调函数
    // 3. callback() 成功  callback(new Error('显示错误提示信息'))
    const checkMobile = (rule, value, callback) => {
      // 自己校验逻辑   必须是手机号格式：第一个数字 1 第二个数字 3-9  最后其它9个数字
      if (!/^1[3-9]\d{9}$/.test(value)) {
        // 格式不对
        return callback(new Error('手机号格式不对'))
      }
      callback()
    }
    return {
      // 表单数据对象
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      // 校验规则对象
      loginRules: {
        // 定义字段对应的校验规则(多种)
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // 手机格式校验  没有提供默认的校验规则  change 值改变触发
          { validator: checkMobile, trigger: 'change' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位数字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 对整个表单进行校验
      // 1. 给表单组件加ref属性   ref="loginForm"
      // 2. 获取组件实例（dom对象）
      // 3. 调用校验函数
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          // 进行登录即可
          // 调用接口，简单配置axios
          // 需要接口文档  信息： 地址 请求方式  传参 返回数据
          // 成功 跳转到首页
          // 失败 提示错误
          // this.$http
          //   .post(
          //     'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
          //     this.loginForm
          //   )
          //   .then(res => {
          //     // 成功 res 对象响应对象 res.data 主体
          //     // 保存  用户信息（token） 获取响应主体下data对象
          //     store.setUser(res.data.data)
          //     this.$router.push('/')
          //   })
          //   .catch(() => {
          //     // 失败
          //     this.$message.error('手机号或验证码错误')
          //   })

          // 使用 async await 发请求

          // 解构赋值
          // 得到 用户 信息  res.data.data  res = {data:{data:'用户信息',message:'提示'}}
          // 以前获取对象中的属性值：res.data ={data:'用户信息'}
          // ES6提供解构赋值语法：{data:{data:data}}

          // 捕获异常
          // 使用 try{ //当代码可能发生错误 }catch(err){ //触发catch函数 捕获到异常（报错） }
          // await接受成功的结果，那么失败怎么办？
          try {
            const { data: { data } } = await this.$http.post('authorizations', this.loginForm)
            store.setUser(data)
            this.$router.push('/')
          } catch (e) {
            // 提示
            this.$message.error('手机号或验证码错误')
          }
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .my-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 200px;
      margin: 0 auto 20px;
    }
  }
}
</style>
