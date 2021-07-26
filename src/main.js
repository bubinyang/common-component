import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router';

import 'element-ui/lib/theme-chalk/index.css';
import publicComponents from './components/publicCompoents.js';
import './style/base.scss';
import MoorUI from './index.js';
import monent from 'moment';
Vue.prototype.$moment = monent;
Vue.use(ElementUI);
Vue.use(MoorUI);
Vue.use(publicComponents);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
