// import Vue from 'vue'


import goodsClassify from './views/goodsClassify/GoodsClassify.vue'
import mine from './views/mine/Mine.vue'
import VueRouter from 'vue-router';

// Vue.use(Router)

const router = new VueRouter({
  routes:[{
    path:'/',
    redirect:'/goodsClassify'
  },{
    path:'/goodsClassify',
    component:goodsClassify
  },{
    path:'/mine',
    component:mine
  }]
})

export default router
