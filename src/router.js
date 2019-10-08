import Vue from 'vue'
import Router from 'vue-router'
import Mine from './views/mine/Mine.vue'
import Register from './views/mine/Register.vue'
import Enroll from './views/mine/Enroll.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/enroll',
      name: 'Enroll',
      component: Enroll
    },
    
  ]
})
