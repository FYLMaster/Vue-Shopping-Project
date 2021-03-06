// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*import './assets/css/style.css'*/

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import jquery from 'jquery'
Vue.prototype.$http = axios;

Vue.config.productionTip = false

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
