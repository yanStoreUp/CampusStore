


import HomePage from './views/homePage/HomePage.vue'
import ShopCar from './views/shopCar/ShopCar.vue'
import Mine from './views/mine/Mine.vue'
import Sort from './views/sort/Sort.vue'

import HotGoods from './views/homePage/HotGoods.vue'
import OldGoods from './views/homePage/OldGoods.vue'
import RecommendGoods from './views/homePage/RecommendGoods.vue'
import Search from './views/homePage/Search.vue'

import VueRouter from 'vue-router';

const router = new VueRouter({
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
      }
    },


    {
      path: '/hotGoods',
      component: HotGoods
    },
    {
      path: '/oldGoods',
      component: OldGoods
    },
    {
      path: '/recommendGoods',
      component: RecommendGoods
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
export default router