import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import MoorUI from './index.js'
Vue.use(ElementUI)
Vue.use(MoorUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
