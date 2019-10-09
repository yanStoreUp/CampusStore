import Router from 'vue-router'
import Mine from './views/mine/Mine.vue'
import Register from './views/mine/Register.vue'
import Enroll from './views/mine/Enroll.vue'
import Sort from './views/sort/Sort'


import goodsClassify from './views/goodsClassify/GoodsClassify.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
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
    path: '/mine',
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
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    },
    
  ]
})