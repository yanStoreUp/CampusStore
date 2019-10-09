import Mine from './views/mine/Mine.vue'

import Register from './views/mine/Register.vue'
import Enroll from './views/mine/Enroll.vue'
import Sort from './views/sort/Sort'


// import goodsClassify from './views/goodsClassify/GoodsClassify.vue'
import HomePage from './views/homePage/HomePage.vue'
import ShopCar from './views/shopCar/ShopCar.vue'
import VueRouter from 'vue-router';

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: '/HomePage'
  }, {
    path: '/homePage',
    component: HomePage,
    meta: {
      title: '首页'
    }
  }, {
    path: '/sort',
    component: Sort,
    meta: {
      title: '商品分类'
    }
  }, {
    path: '/shopCar',
    component: ShopCar,
    meta: {
      title: '购物车'
    }
  }, {
    path: '/mine',
    component: Mine,
    meta: {
      title: '我的'
    },
    children: [{
        path: 'register',
        component: Register,
        meta: {
          title: '登录'
        }
      },
      {
        path: 'enroll',
        component: Enroll,
        meta: {
          title: '注册'
        }
      }
    ]
  }]
})
export default router
