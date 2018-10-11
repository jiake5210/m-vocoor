import App from './App'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import routes from './router/index.js'

import MintUI from 'mint-ui'
import FastClick from 'fastclick'

Object.defineProperty(Vue.prototype, '$axios', {
  get () {
    return Axios;
  }
})
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false)
}
const router = new VueRouter({
  routes
})
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')