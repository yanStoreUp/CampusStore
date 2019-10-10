


<<<<<<< HEAD
=======

>>>>>>> master
import HomePage from './views/homePage/HomePage.vue'
import ShopCar from './views/shopCar/ShopCar.vue'
import Sort from './views/sort/Sort.vue'

import HotGoods from './views/homePage/HotGoods.vue'
import OldGoods from './views/homePage/OldGoods.vue'
import RecommendGoods from './views/homePage/RecommendGoods.vue'
import Search from './views/homePage/Search.vue'

import VueRouter from 'vue-router';
import GoodsData from './views/sort/GoodsData.vue'


// 个人信息引入
import Personal from './views/mine/Personal.vue'
// 历史订单引入
import Order from './views/mine/Order.vue'
// 登录引入
import Register from './views/mine/Register.vue'
// 注册引入
import Enroll from './views/mine/Enroll.vue'
// 我的引入
import Mine from './views/mine/Mine.vue'


const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/HomePage'
<<<<<<< HEAD
    },
    {
=======
    }, {
>>>>>>> master
      path: '/homePage',
      component: HomePage,
      meta: {
        title: '首页'
      }
<<<<<<< HEAD
    },
    {
=======
    }, {
>>>>>>> master
      path: '/sort',
      component: Sort,
      meta: {
        title: '商品分类'
      }
<<<<<<< HEAD
    },
    {
      path: '/goodsData',
      component: GoodsData,
      meta: {
        title: '商品详情'
      }
    },
    {
=======
    }, {
>>>>>>> master
      path: '/shopCar',
      component: ShopCar,
      meta: {
        title: '购物车'
      }
<<<<<<< HEAD
    },
    {
=======
    }, {
>>>>>>> master
      path: '/mine',
      component: Mine,
      meta: {
        title: '我的'
<<<<<<< HEAD
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
    }
=======
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
    },
      {
    path: '/',
    redirect: '/HomePage'
  },
    // children: [{
    //     path: 'register',
    //     component: Register,
    //     meta: {
    //       title: '登录'
    //     }
    //   },
    //   {
    //     path: 'enroll',
    //     component: Enroll,
    //     meta: {
    //       title: '注册'
    //     }
    //   }
    // ]

  {
    path: '/register',
    component: Register,
    meta: {
      title: '登录'
    },
  },
  {
    path: '/enroll',
    component: Enroll,
    meta: {
      title: '注册'
    },
  },
  {
    path: '/personal',
    component: Personal,
    meta: {
      title: '个人信息'
    },
  },
  {
    path: '/order',
    component: Order,
    meta: {
      title: '历史订单'
    },
  },

>>>>>>> master
  ]
})
export default router