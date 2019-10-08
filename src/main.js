import Vue from 'vue'
import app from './App.vue'
import router from './router'
import store from './store'



//引入路由
import VueRouter from 'vue-router'

//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//引入图标
import './assets/font/iconfont.css'

//引入main.css
import './main.css'

// 引入swiper
// import { Swipe, SwipeItem } from 'mint-ui';

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

Vue.use(VueRouter)

Vue.use(MintUI)


var vm = new Vue({
  el: '#app',
  router,
  store,
  render: c => c(app)
})