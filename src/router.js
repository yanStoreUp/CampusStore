import Vue from 'vue'
import Router from 'vue-router'
import Mine from './views/mine/Mine.vue'
import Register from './views/mine/Register.vue'
import Enroll from './views/mine/Enroll.vue'
import Home from './views/Home.vue'
import sort from './views/sort/Sort.vue'


import goodsClassify from './views/goodsClassify/GoodsClassify.vue'
import mine from './views/mine/Mine.vue'
import VueRouter from 'vue-router';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/goodsClassify'
  },{
      path: '/goodsClassify',
      component: goodsClassify,
      meta: {
          title: '首页'
      }
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
      path: '/enroll',
      name: 'Enroll',
      component: Enroll
    },
    {
      path: '/about',
      component: sort
    },
  ]
})