<template>
  <div id="box">
    <!-- 顶部 -->
    <mt-header fixed title="购物车" id="top"></mt-header>
    <div @click="back()" id="back">&lt;返回</div>
    <!-- 左边分类 -->
    <div id="left">
      <li
        @click="getSort(value)"
        class="leftSort"
        v-for="value in sortLeftData"
        :key="value.id"
      >{{value.name}}</li>
    </div>
    <!-- 右边分类对应的商品展示 -->
    <div id="right">
      <!-- 商品展示卡片 -->
      <div
        @click="getGoodsId(value.goodsId)"
        class="sort-goodsList"
        v-for="value in goodsArr"
        :key="value.id"
      >
        <!-- 商品图片 -->
        <img :src="value.coverImgUrl" alt />
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
    this.goodsArr = [];
    // 获取对应分类的商品列表
    sort.sortArr().then(res => {
      res.rows.forEach(v => {
        if (v.categoryId == 7) {
          this.goodsArr.push(v);
        }
      });
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getSort(x) {
      // console.log(x)
      // 初始化分类商品列表
      this.goodsArr = [];
      // 获取商品分类名称
      this.sortName = x.name;
      // 获取对应分类的商品列表
      sort.sortArr().then(res => {
        res.rows.forEach(v => {
          if (v.categoryId == x.categoryId) {
            this.goodsArr.push(v);
          }
        });
      });
    },
    //获取商品id放入store中用来渲染商品详情页面
    getGoodsId(x) {
      // console.log(x)
      // this.$store.commit('gerGoodsId',{ran:x})
      this.$router.push({
        path: "/goodsData",
        query: { obj: x }
      });
    }
  }
};
</script>

<style lang="less">
#box {
  overflow: hidden;
}
* {
  list-style: none;
}
#left {
  margin-top: 40px;
  float: left;
  width: 90px;
  li {
    border-bottom: 1px solid white;
    height: 5vh;
    width: 94%;
    margin: 3px 0 0 3%;
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
  .sort-goodsList {
    margin: 15px 5px 5px 5px;
    overflow: hidden;
    background-color: #ea5f5a;
    border-radius: 10px;
    img {
      width: 30vw;
      height: 130px;
    }
    div {
      text-align: center;
    }
    #goodsTitle {
      width: 30vw;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>