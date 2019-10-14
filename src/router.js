import HomePage from './views/homePage/HomePage.vue';
import ShopCar from './views/shopCar/ShopCar.vue';
import Sort from './views/sort/Sort.vue';
import goodsData from './views/sort/GoodsData.vue';

import HotGoods from './views/homePage/HotGoods.vue';
import OldGoods from './views/homePage/OldGoods.vue';
import RecommendGoods from './views/homePage/RecommendGoods.vue';
import Search from './views/homePage/Search.vue';

import VueRouter from 'vue-router';


// 个人信息引入
import Personal from './views/mine/Personal.vue';
// 历史订单引入
import Order from './views/mine/Order.vue';
// 登录引入
import Register from './views/mine/Register.vue';
// 注册引入
import Enroll from './views/mine/Enroll.vue';
// 我的引入
import Mine from './views/mine/Mine.vue';
// 修改信息 
import Change from './views/mine/Change.vue';
// 忘记密码
import Memory from './views/mine/Memory.vue';




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
  },
  {
    path:'/goodsData',
    component:goodsData,
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
    },
    {
      path: '/',
      redirect: '/HomePage'
    },

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
    {
      path: '/change',
      component: Change,
      meta: {
        title: '修改信息'
      },
    },
    {
      path: '/memory',
      component: Memory,
      meta: {
        title: '忘记密码'
      },
    }

  ]
})
export default router