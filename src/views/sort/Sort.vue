<template>
  <div id="box">
    <div id="left">
      <li @click="sortArr('a')">a</li>
      <li @click="sortArr('b')">b</li>
      <li @click="sortArr('c')">c</li>
      <li @click="sortArr('d')">d</li>
      <!-- <li @click="sortArr(x)" v-for="x in 26" :key="x">{{x}}</li> -->
    </div>
    <div>
      <div>分类</div>
      <div id="right">
        <div class="goodsList" v-for="value in goodsArr" :key="value">{{value}}</div>
      </div>
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
      // console.log(res.data.cities[0].nm)
      this.sortLeftData = res.data.cities;
      console.log(this.sortLeftData);
    });
  },
  methods: {
    sortArr(x) {
      this.goodsArr = {};
      var goodsObj = new Object();
      var str = "shanghai";
      this.sortLeftData.forEach(v => {
        if (goodsObj[v.py.charAt(0)]) {
          goodsObj[v.py.charAt(0)].push(v.nm);
        } else {
          goodsObj[v.py.charAt(0)] = [v.nm];
        }
      });
      this.goodsArr = goodsObj[x];
      console.log(this.goodsArr);
    }
  }
};
</script>

<style lang="less">
* {
  list-style: none;
}
#box {
  position: relative;
}
#left {
  float: left;
  // height: 500px;
  width: 100px;
  background-color: skyblue;
}
#right {
  position: absolute;
  //   height: 500px;
  width: calc(100vw - 100px);
  margin-left: 100px;
  background-color: tomato;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .goodsSort {
  }
  .goodsList {
    margin: 5px 5px 0px 0px;
    width: 30vw;
    height: 20vh;
    background-color: orange;
    border-radius: 10px;
  }
}
</style>