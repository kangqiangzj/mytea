// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from "mint-ui"
import "./css/reset.css"
import "./css/page.css"
import "./iconfont/iconfont.css"
import "mint-ui/lib/style.css"
//import axios from "axios"
//Vue.prototype.$http = axios
import vueResource from "vue-resource"

Vue.use(vueResource)
Vue.use(Mint)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})