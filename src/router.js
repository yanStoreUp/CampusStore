import Vue from 'vue'
import Router from 'vue-router'
import sort from './views/sort/Sort.vue'
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
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/about',
      component: sort
    },
    {
      path: '/enroll',
      name: 'Enroll',
      component: Enroll
    },
    
  ]
})
