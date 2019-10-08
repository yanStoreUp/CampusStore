// import Vue from 'vue'


import goodsClassify from './views/goodsClassify/GoodsClassify.vue'
import mine from './views/mine/Mine.vue'
import VueRouter from 'vue-router';

// Vue.use(Router)

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/goodsClassify'
  }, {
    path: '/goodsClassify',
    component: goodsClassify,
    meta: {
      title: '首页'
    }
  }, {
    path: '/mine',
    component: mine,
    meta: {
      title: '我的'
    }
  }]
})

export default router