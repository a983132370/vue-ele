// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'Qs'
import { Button, Notification,Alert} from 'element-ui';
import Vuex from 'vuex' //引入状态管理

//引入样式
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css';
import 'swiper/dist/css/swiper.css';

Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
Vue.prototype.$notify = Notification
Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Alert);
Vue.use(Vuex);

//https://blog.csdn.net/weixin_42406046/article/details/80624932
const ADD_ACCOUNT = 'ADD_ACCOUNT'; // 用常量代替事件类型，使得代码更清晰
const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT';
const ACCOUNT_LOGIN = 'ACCOUNT_LOGIN';
const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';
//注册状态管理全局参数
var store = new Vuex.Store({
  state:{
    isLogin:false,
    token:'',
    userID:'',
  },
  mutations: {
    //写法与getters相类似
    //组件想要对于vuex 中的数据进行的处理
    //组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
    //内部操作必须在此刻完成(同步)
    [ACCOUNT_LOGIN] (state) { // 登录
      sessionStorage.setItem("isLogin", true);
      state.isLogin = true;
    },
    [ADD_ACCOUNT] (state, token) { // 第一个参数为 state 用于变更状态 登录
      sessionStorage.setItem("token", token);
      state.token = token;
    },
    [REMOVE_ACCOUNT] (state, token) { // 退出登录
      sessionStorage.removeItem("token", token);
      state.token = token;
    },
    [ACCOUNT_LOGOUT] (state) { // 退出登录
      sessionStorage.setItem("isLogin", false);
      state.isLogin = false;
    },
  }
});
router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start();//loadong 效果
  store.state.isLogin = sessionStorage.getItem('isLogin');//获取本地存储的token
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.isLogin) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

// router.afterEach(route => {
//   iView.LoadingBar.finish();
// });

Vue.prototype.$store = store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
