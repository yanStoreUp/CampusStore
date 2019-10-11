import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sortGoods:{
      "createTime": "2019-10-11 23:53:04",
      "updateTime": "2019-10-12 00:16:27",
      "params": {},
      "goodsId": 3,
      "categoryId": 7,
      "name": "小米10 ",
      "subName": "小米10 透明版",
      "coverImgUrl": "https://tianliang-web-vue.nos-eastchina1.126.net/shop/小米10-1182488036617748480.jpg",
      "intro": "小米10 透明探索版    5g全网通 ",
      "content": "<p><img style=\"width: 121px;\" src=\"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=399832200,2946125863&amp;fm=85&amp;app=63&amp;f=JPG?w=121&amp;h=75&amp;s=93E3D606E977581D085A3B53030050F8\"><img style=\"width: 121px;\" src=\"https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=2874077076,402850139&amp;fm=85&amp;s=C3312B667697C59A1B40F5DA0300C091\"><img style=\"width: 121px;\" src=\"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=338685928,2882997914&amp;fm=85&amp;app=63&amp;f=JPEG?w=121&amp;h=75&amp;s=AF344B864F45BD34DA97D0D50300409D\"><img style=\"width: 25%;\" src=\"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3260336281,3602382733&amp;fm=85&amp;app=57&amp;f=JPEG?w=121&amp;h=75&amp;s=5FB58B44E2136FC40088C1D3030090AB\"><br></p>",
      "price": 5000.00,
      "type": "其他",
      "isHot": "1",
      "isUsed": "0",
      "isRecommend": "1",
      "isBanner": "1",
      "bannerUrl": "https://tianliang-web-vue.nos-eastchina1.126.net/shop/小米10-1182489213770137600.jpg",
      "isHeightCover": "1",
      "enable": "1",
      "orderBy": 200,
      "zan": 200,
      "readNum": 200,
      "sendTime": "2019-10-11 23:53:04"
  },
  },
  mutations: {
    gerGoodsId(state,payload) {
      state.sortGoods = payload.ran;
    }
  },
  actions: {

  }
})
