import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {  
  username: 'ada',
  password: 'www',
  isLogin: false
}
const mutations = {
  checkLogin(state) {
    if(state.name === "yangzhuo" && state.password === "123456") {
      state.isLogin = true;
      window.location.href = "../";
    }
  }
}
export default new Vuex.Store({  
  state  
})  