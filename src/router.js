import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/xinx',
      component:()=>import('./views/Xinx.vue')
    },
    {
      path:'/login',
      component:()=>import('./views/Login.vue')
    },
    {
      path:'/home',
      component:()=>import('./views/Home.vue')
    }
  ]
})
