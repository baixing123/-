// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './config/rem'
import App from './App'
import router from './router/index.js'
// 全局注册
import axios  from 'axios'
 Vue.prototype.axios=axios
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  router
  // ,
  // store,
}).$mount("#app")
