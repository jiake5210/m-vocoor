import App from './App'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import routes from './router/index.js'

import MintUI from 'mint-ui'
import FastClick from 'fastclick'
import 'lib-flexible/flexible.js'

import 'normalize.css'
import './assets/mui/css/mui.min.css'
import '../static/css/global.scss'

Vue.use(MintUI)

Object.defineProperty(Vue.prototype, '$axios', {
  get () {
    return Axios
  }
})
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
