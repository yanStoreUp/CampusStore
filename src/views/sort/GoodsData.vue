<template>
  <div>
    <!-- 顶部 -->
    <mt-header fixed title="购物车" id="top"></mt-header>
    <div @click="back()" id="back">&lt;返回</div>
    <div class="goodsimg">
      <img :src= sortGoods.coverImgUrl>
    </div>
    <div class="goodsDatas">
      <h2>￥{{sortGoods.price}}</h2>
      <p>{{sortGoods.name}}</p>
      <p>{{sortGoods.intro}}</p>
      <p>商品展示：</p>
      <div id="goodsShow" v-html='sortGoods.content'>
      </div>
    </div>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter">
      <div v-show="flag" class="cir1"></div>
    </transition>
    <div @click="add(sortGoods.goodsId)" id="addToCar">
      <span id="font" class="iconfont icon-gouwuche"></span>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
import {shopCarAdd} from '../../services/shopcar'
export default {
  data() {
    return {
      // 该商品是否添加购物车了
      flag: false,
      // 存放图片墙的地址的列表
      imgWallList:[]
    };
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    add(x) {
      shopCarAdd(x)
      // 添加购物车的提示
      if (this.flag) {
        MessageBox("提示", "已经添加购物车，更改数量请去购物车中更改");
      } else {
        MessageBox("提示", "添加购物车成功!");
      }
      this.flag = true;
    },
    // 添加购物车时的动画
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
      el.style.width = "100vw";
      el.style.height = "60vh";
      el.style.borderRadius = "0";
      el.style.opacity = "0.5";
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.opacity = "0.5";
      el.style.transform = "translate(calc(100vw - 80px),calc(100vh - 135px))";
      el.style.width = "80px";
      el.style.height = "80px";
      el.style.borderRadius = "50%";
      el.style.transition = "all 0.5s linear";
      done();
    }
  },
  computed:{
    // 获取到当前页面展示的商品
    sortGoods(){
      return this.$store.state.sortGoods
    }
  }
};
</script>

<style lang="less">

.goodsimg {
  img {
    margin-top: 40px;
    width: 100vw;
    height: 30vh;
  }
}
.goodsDatas {
  padding: 0px 10px;
  h2 {
    color: red;
  }
  #goodsShow {
      img {
        margin-left: 1vw;
        width: 45vw !important;
        height: 30vh;
    }
  }
}
#addToCar {
  position: fixed;
  top: calc(100vh - 135px);
  left: calc(100vw - 80px);
  width: 80px;
  height: 80px;
  background: #EA5F5A;
  border-radius: 50%;
  #font {
    font-size: 40px;
    margin-left: 20%;
    line-height: 80px;
  }
}
.cir1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background: #EA5F5A;
}
</style>