import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve)
    },
    {
      path: '/nav',
      name: 'nav',
      component: resolve => require(['@/components/nav'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/login'], resolve)
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: resolve => require(['@/components/helloWorld'], resolve)
    },
  ]
})
