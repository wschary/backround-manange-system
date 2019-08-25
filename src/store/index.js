// 提供存储信息的函数  提供获取用户信息的函数  提供删除用户信息的安函数
const KEY = 'hm-toutiao-79-user'
export default {
  setUser (user) {
    // 把user对象存储到sessionStorage
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  getUser () {
    // 把sessionStorage获取出来，转换对象。
    const jsonStr = window.sessionStorage.getItem(KEY) || '{}'
    // null.abc 报错  {}.abc undefined
    return JSON.parse(jsonStr)
  },
  delUser () {
    // 删除 KEY 对应的数据
    window.sessionStorage.removeItem(KEY)
  }
}
