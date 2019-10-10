<template>
  <div id="box">
    <div id="left">
      <li @click="sortArr('a')">a</li>
      <li @click="sortArr('b')">b</li>
      <li @click="sortArr('c')">c</li>
      <li @click="sortArr('d')">d</li>
      <!-- <li @click="sortArr(x)" v-for="x in 26" :key="x">{{x}}</li> -->
    </div>
      <div id="right">
        <div class="goodsSort">分类</div>
        <div class="goodsList">1</div>
        <div class="goodsList">1</div>
        <div class="goodsList">1</div>
        <div class="goodsList">1</div>
      </div>
      <div id="right">
        <div class="goodsSort">分类</div>
        <div class="goodsList" v-for="value in goodsArr" :key="value">{{value}}</div>
    </div>
  </div>
</template>

<script>
import { sort } from "../../services/sort";
export default {
  data() {
    return {
      sortLeftData: [],
      goodsArr: {}
    };
  },
  created() {
    sort().then(res => {
      this.sortLeftData = res.data.cities;
    });
  },
  methods: {
    sortArr(x) {
      this.goodsArr = {};
      var goodsObj = new Object();
      this.sortLeftData.forEach(v => {
        if (goodsObj[v.py.charAt(0)]) {
          goodsObj[v.py.charAt(0)].push(v.nm);
        } else {
          goodsObj[v.py.charAt(0)] = [v.nm];
        }
      });
      this.goodsArr = goodsObj[x];
    }
  }
};
</script>

<style lang="less">
* {
  list-style: none;
}
#left {
  float: left;
  // height: 500px;
  width: 100px;
  background-color: skyblue;
}
#right {
  //   height: 500px;
  width: calc(100vw - 100px);
  margin-left: 100px;
  background-color: tomato;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction:row;
  .goodsSort{
    width: 100%;
    height: 30px;
    background-color: white;
  }
  .goodsList {
    margin: 15px 5px 5px 5px;
    width: 30vw;
    height: 20vh;
    background-color: orange;
    border-radius: 10px;
  }
}
</style>