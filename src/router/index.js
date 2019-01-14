import Vue from 'vue'
import Router from 'vue-router'
import headbar from '@/pages/headbar'
import login from '@/pages/login'
import register from '@/pages/register'
import home from '@/pages/home'
import player from '@/pages/player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'headbar',
      component: headbar,
      children: [
        {
          path: '/',
          name: 'home',
          component: home
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        },
        {
          path: '/player',
          name: 'player',
          component: player,
          // meta: {
          //   requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          // },
        }
      ]
    },
    // { path: '*', component: P404 }  //这里是保证错误地址会跳转到404界面进行提示
  ]
})
