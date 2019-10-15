<template>
  <div id="box">
    <!-- 顶部 -->
    <mt-header fixed title="购物车" id="top"></mt-header>
    <div @click="back()" id="back">&lt;返回</div>
    <!-- 左边分类 -->
    <div id="left">
      <li @click="getSort(value)" class="leftSort" v-for="value in sortLeftData" :key="value.id">{{value.name}}</li>
    </div>
    <!-- 右边分类对应的商品展示 -->
    <div id="right">
      <!-- 商品展示卡片 -->
      <div @click="getGoodsId(value.goodsId)" class="goodsList" v-for="value in goodsArr" :key="value.id">
        <!-- 商品图片 -->
        <img  :src=value.coverImgUrl alt="">
        <!-- 商品名称 -->
        <div id="goodsTitle">{{value.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入接口
import sort from "../../services/sort";
export default {
  data() {
    return {
      // 商品分类列表
      sortLeftData: [],
      // 商品分类名称
      sortName: "分类",
      // 对应分类商品列表
      goodsArr: [
        {
            "createTime": "2019-10-11 23:53:04",
            "updateTime": "2019-10-15 10:12:44",
            "params": {},
            "goodsId": 3,
            "categoryId": 7,
            "name": "小米10 ",
            "subName": "小米10 透明版",
            "coverImgUrl": "https://inews.gtimg.com/newsapp_bt/0/10510868733/1000",
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
            "orderBy": 220,
            "zan": 200,
            "readNum": 200,
            "sendTime": "2019-10-11 23:53:04"
        },{
            "createTime": "2019-10-15 05:08:42",
            "updateTime": "2019-10-15 05:10:53",
            "params": {},
            "goodsId": 39,
            "categoryId": 9,
            "name": "海绵宝宝",
            "subName": "Nike Kyrie 5 X Spongebob 欧文5海绵宝宝 派大星联名 CJ6950-700 ",
            "coverImgUrl": "https://gd2.alicdn.com/imgextra/i2/0/O1CN01esLxy523GTKSGSGd4_!!0-item_pic.jpg",
            "intro": "Nike Kyrie 5 X Spongebob 欧文5海绵宝宝 派大星联名 CJ6950-700 ",
            "content": "<p><img style=\"width: 800px;\" src=\"https://gd3.alicdn.com/imgextra/i3/2518497228/O1CN01HYyYt723GTJdkbZhI_!!2518497228.jpg\"><img style=\"width: 800px;\" src=\"https://gd1.alicdn.com/imgextra/i1/2518497228/O1CN0114UOTi23GTJWHEi9A_!!2518497228.jpg\"><img style=\"width: 800px;\" src=\"https://gd1.alicdn.com/imgextra/i1/2518497228/O1CN01aYZlHC23GTJYqm4cE_!!2518497228.jpg\"><img style=\"width: 800px;\" src=\"https://gd4.alicdn.com/imgextra/i4/2518497228/O1CN01nZ7j1223GTJWQXgyz_!!2518497228.jpg\"><br></p>",
            "price": 200.00,
            "type": "0",
            "isHot": "1",
            "isUsed": "1",
            "isRecommend": "0",
            "isBanner": "0",
            "isHeightCover": "0",
            "enable": "1",
            "orderBy": 200,
            "zan": 0,
            "readNum": 0,
            "sendTime": "2019-10-15 05:08:42"
        },{
            "createTime": "2019-10-13 05:30:09",
            "updateTime": "2019-10-14 09:33:48",
            "params": {},
            "goodsId": 29,
            "categoryId": 10,
            "name": "阿狸鸭",
            "subName": "阿狸迷你公仔动物园系列盲盒动漫周边摆件礼物潮流玩具手办",
            "coverImgUrl": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/3710951441/O1CN01Zk4I4U1MW1Er9M80G_!!0-item_pic.jpg_230x230.jpg_.webp",
            "intro": "阿狸迷你公仔动物园系列盲盒动漫周边摆件礼物潮流玩具手办",
            "content": "<p><img src=\"https://img.alicdn.com/imgextra/i3/3710951441/O1CN01m7Mchu1MW1D3RsNxO_!!3710951441.jpg\" style=\"width: 679px;\"><br></p>",
            "price": 520.00,
            "type": "手办",
            "isHot": "1",
            "isUsed": "1",
            "isRecommend": "1",
            "isBanner": "1",
            "bannerUrl": "https://img.alicdn.com/imgextra/i3/3710951441/O1CN01m7Mchu1MW1D3RsNxO_!!3710951441.jpg",
            "isHeightCover": "1",
            "coverHeightUrl": "https://img.alicdn.com/imgextra/i3/3710951441/O1CN01m7Mchu1MW1D3RsNxO_!!3710951441.jpg",
            "enable": "1",
            "orderBy": 200,
            "zan": 0,
            "readNum": 0,
            "sendTime": "2019-10-13 05:30:09"
        },
      ]
    };
  },
  created() {
    // 获取商品分类列表
    sort.sort().then(res => {
      // console.log(res.rows)
      this.sortLeftData = res.rows;
    });
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    getSort(x) {
      // console.log(this.$refs)
      // 初始化分类商品列表
      this.goodsArr = []
      // 获取商品分类名称
      this.sortName = x.name;
      // 获取对应分类的商品列表
      sort.sortArr().then(res => {
        res.rows.forEach(v =>{
          if(v.categoryId == x.categoryId){
            this.goodsArr.push(v)
          }
        });
      });
    },
    //获取商品id放入store中用来渲染商品详情页面
    getGoodsId(x){
      // console.log(x)
      // this.$store.commit('gerGoodsId',{ran:x})
      this.$router.push({
        path:'/goodsData',
        query:{obj:x}
        })
    } 
  }
};
</script>

<style lang="less">
#box{
  overflow: hidden;
}
* {
  list-style: none;
}
#left {
  margin-top: 40px;
  float: left;
  width: 90px;
  li{
    border-bottom: 1px solid white;
    height: 5vh;
    width: 94%;
    margin: 3px 0 0 3% ;
    background: white;
    text-align: center;
    line-height: 5vh;
  }
}
#right {
  margin-top: 40px;
  //   height: 500px;
  width: calc(100vw - 100px);
  margin-left: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  .goodsSort {
    text-indent: 5px;
    width: 100%;
    height: 30px;
    background-color: white;
  }
  .goodsList {
    margin: 15px 5px 5px 5px;
    overflow: hidden;
    background-color: #EA5F5A;
    border-radius: 10px;
    img{
      width: 30vw;
      height: 20vh;
    }
    div{
      text-align: center;
    }
    #goodsTitle{
      width: 30vw;
      white-space:nowrap;
      text-overflow:ellipsis;
      overflow: hidden;
    }
  }
}
</style>