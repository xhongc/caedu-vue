import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/homePage'
import Login from '@/pages/login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/login/',
      name: 'login',
      component: Login
    }
  ]
})
