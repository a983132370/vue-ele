// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'Qs'
import { Button, Notification,Alert, Pagination,Input,Loading} from 'element-ui';
import Vuex from 'vuex' //引入状态管理
//引入样式
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css';
import 'swiper/dist/css/swiper.css';

Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
Vue.prototype.$notify = Notification
Vue.prototype.$loading = Loading
Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Alert);
Vue.use(Pagination);
Vue.use(Input);
Vue.use(Vuex);

//https://blog.csdn.net/weixin_42406046/article/details/80624932
const ACCOUNT_LOGIN = 'ACCOUNT_LOGIN';
const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';
//注册状态管理全局参数
var store = new Vuex.Store({
  state:{
    isLogin: false,
    token:'',
    userID:'',
  },
  mutations: {
    //写法与getters相类似
    //组件想要对于vuex 中的数据进行的处理
    //组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
    //内部操作必须在此刻完成(同步)
    [ACCOUNT_LOGIN] (state) { // 登录
      state.isLogin = Boolean(true);
    },
    [ACCOUNT_LOGOUT] (state) { // 退出登录
      state.isLogin = Boolean(false);
    },
  },
  getters: {  // getters
    getIsLogin: function (state) {
      return state.isLogin
    }
  }
});
router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start();//loadong 效果
  // let loadingInstance = Loading.service({
  //   lock: true,
  //   text: 'Loading',
  //   spinner: 'el-icon-loading',
  //   background: 'rgba(0, 0, 0, 0.7)'
  // });
  // setTimeout(() => {
  //   loadingInstance.close();
  // }, 1000);
  // store.state.isLogin = sessionStorage.getItem('isLogin');//获取本地存储的token
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

router.afterEach(route => {
  // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
  //   Loading.close();
  // });
});

Vue.prototype.$store = store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
