<template>
  <el-container class="home-container">
    <el-aside :width="isCollapse?'64px':'200px'">
      <!-- logo -->
      <div class="logo" :class="{miniLogo:isCollapse}"></div>
      <!-- 导航菜单 -->
      <!-- default-active="/" 根据当路径来设置 this.$route.path -->
      <!-- this.$route 获取路由数据  this.$router 调用路由函数 -->
      <!-- 获取地址栏传参：user?id=100  this.$route.query.id  /user/100 this.$route.params.id  -->
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggleMenu()" class="icon el-icon-s-fold"></span>
        <span class="text">江苏传智播客科技教育有限公司</span>
        <el-dropdown class="my-dropdown">
          <span class="el-dropdown-link">
            <!-- 头像 用户名称 -->
            <img class="avatar" :src="photo" alt />
            <span class="username"> {{name}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <!--  slot="dropdown" 插槽 -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting" @click.native="setting()">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock" @click.native="logout()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- 二级路由对应组件渲染位置 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      isCollapse: false,
      name: '',
      photo: ''
    }
  },
  created () {
    const user = store.getUser()
    this.name = user.name
    this.photo = user.photo
  },
  methods: {
    // el-dropdown-item 绑定事件  不支持click
    // 当你给组件绑定事件的时候，如果组件没有支持这个事件，当然不会触发。
    // click是原生dom拥有的事件，目的给组件渲染后的dom绑定事件
    // 事件修饰符，例如 @click.prevent="函数"  阻止默认行为  @click.native 把原生事件绑定在组件上
    // https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6

    // 去设置页面
    setting () {
      this.$router.push('/setting')
    },
    // 退出登录
    logout () {
      // 清除存储用户信息
      store.delUser()
      // 跳转到登录
      this.$router.push('/login')
    },
    toggleMenu () {
      // 切换侧边栏展开与收起
      // 数据 isCollapse 默认值false 展开意思
      // 通过这个数据的状态去切换 侧边栏展开与收起 状态
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped lang='less'>
// FE  front end  前端工程师
// el-container 自定义标签是一个组件  渲染后的结构div span section  默认在标签上架上一个和组件名称一致的类名
.home-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
    background: #002033;
    .logo {
      width: 100%;
      height: 60px;
      background: #002244 url(../../assets/images/logo_admin.png) no-repeat
        center / 140px auto;
    }
    // 后面样式覆盖前面
    .miniLogo{
      background-image: url(../../assets/images/logo_admin_01.png);
      background-size: 36px auto;
    }
    .el-menu{
      border-right: none;
    }
  }
  .el-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 24px;
      vertical-align: middle;
      padding-right: 10px;
    }
    .text {
      vertical-align: middle;
    }
    .my-dropdown {
      float: right;
      .avatar {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .username {
        font-weight: bold;
        color: #333;
        vertical-align: middle;
      }
    }
  }
}
</style>
