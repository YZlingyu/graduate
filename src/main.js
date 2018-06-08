// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import Vuex from 'vuex' 
import store from './store'
import * as common from './common/common.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex);
Vue.prototype.$echarts = echarts 
import d3 from 'd3'


Vue.use(d3)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
