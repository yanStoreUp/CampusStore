import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router';

import mintUI from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false


// 安装路由
Vue.use(VueRouter)
Vue.use(mintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
