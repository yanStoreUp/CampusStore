<template>
  <div id="box">
    <!-- 顶部 -->
    <mt-header fixed title="购物车" id="top"></mt-header>
    <div @click="back()" id="back">&lt;返回</div>
    <!-- 左边分类 -->
    <div id="left">
      <li @click="getSort(value)" class="leftSort" ref="leftSort" v-for="value in sortLeftData" :key="value.id">{{value.name}}</li>
    </div>
    <!-- 右边分类对应的商品展示 -->
    <div id="right">
      <!-- 商品分类的名称 -->
      <div class="goodsSort">{{sortName}}</div>
      <!-- 商品展示卡片 -->
      <div @click="getGoodsId(value)" tag="div" class="goodsList" v-for="value in goodsArr" :key="value.id">
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
      goodsArr: []
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
      this.$store.commit('gerGoodsId',{ran:x})
      this.$router.push({path:'/goodsData'})
    } 
    // 改变选中样式





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
  width: 100px;
  li{
    height: 5vh;
    width: 94%;
    margin: 3px 0 0 3% ;
    background: white;
    border: 1px solid black;
    border-radius: 10px;
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