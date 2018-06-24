import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {  
  username: '',
  password: '',
  isLogin: false
}
const mutations = {
  checkLogin(state) {
    if(state.username === "yangzhuo" && state.password === "123456") {
      state.isLogin = true;
      window.location.href = "../#/admin";
    }else{
      alert("用户名或密码错误！")
    }
  },
  logout(state) {
    state.isLogin = false;
    console.log(state.isLogin)
  }
}
export default new Vuex.Store({  
  state, mutations  
})  