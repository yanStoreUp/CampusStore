<template>
  <div>
    <!-- 这是二手商品 -->
    <!-- 顶部导航 -->
    <!-- <mt-header fixed title="二手商品"></mt-header> -->
    <mt-header title="二手商品">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <!-- <mt-button @click="handleClose">关闭</mt-button> -->
      </router-link>
    </mt-header>

    <!-- 版心 -->
    <div id="content">
      <!-- 栅格系统 -->
      <el-row
        :gutter="20"
        v-for="item in oldGoods"
        :key="item.goosId"
        style="border-bottom:1px solid #ccc"
      >
        <!-- 栅格系统左边 -->
        <el-col :span="10" class="gridLeft">
          <div class="grid-content bg-purple">
            <img :src="item.coverImgUrl" alt @click="getGoodsId(item.goodsId)" />
          </div>
        </el-col>
        <!-- 栅格系统右边 -->
        <el-col :span="14" class="gridRight">
          <div class="grid-content bg-purple" @click="getGoodsId(item.goodsId)">
            <div style="font-size:14px;font-weight:100">
              <i class="iconfont icon-remen"></i>
              {{item.name}}
            </div>
            <div style="font-size:13px">{{item.intro}}</div>
            <div class="price">
              <span style="font-size:11px">￥</span>
              <span class="priceNumber">{{item.price}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getOldGoodsList } from "@/services/homePage";

export default {
  data() {
    return {
      oldGoods: []
    };
  },
  methods: {
    getGoodsId(x) {
      this.$router.push({
        path: "/goodsData",
        query: { obj: x }
      });
    }
  },
  created() {
    getOldGoodsList().then(res => {
      this.oldGoods = res.rows;
      // console.log(res);
    });
  }
};
</script>
<style lang="less" scoped>
// 顶部导航
.mint-header {
  background-color: #ea5f5a;
}

#content {
  margin: -3px 10px 10px 10px;
  overflow: hidden;
  // 栅格系统左边
  .gridLeft {
    margin: 10px 0;
    .grid-content {
      height: 110px;
      img {
        border: 2px solid #fb1805;
        border-radius: 8px;
        width: 100%;
        height: 100%;
      }
    }
  }
  // 栅格系统右边
  .gridRight {
    margin-top: 16px;
    .grid-content {
      height: 110px;
      i {
        color: white;
        border: 1px solid #fa022d;
        background: #fa022d;
        margin-right: 5px;
      }
      .price {
        color: #ff541b;
        margin: 5px 0;
      }
    }
  }
}
</style>