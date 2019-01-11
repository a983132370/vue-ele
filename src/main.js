// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'Qs'
import { Button, Notification } from 'element-ui';

//引入样式
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css';
import 'swiper/dist/css/swiper.css';

Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
Vue.prototype.$notify = Notification
Vue.config.productionTip = false

Vue.use(Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
