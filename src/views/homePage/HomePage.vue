<template>
  <div style="overflow:hidden">
    <!-- 这是首页 -->

    <!-- 搜索 -->
    <div id="search">
      <router-link to="/search">
        <mt-search placeholder="搜索"></mt-search>
      </router-link>
    </div>

    <!-- 轮播图 -->
    <mt-swipe id="topSwiper" :auto="4000">
      <mt-swipe-item v-for="item in shufflingList" :key="item.goodsId">
         <img :src="item.coverImgUrl" alt />
      </mt-swipe-item>
    </mt-swipe>

    <div id="streeMain">
      <div id="content">
        <!-- 二手商品调接口 -->
        <div id="oldGoods">
          <router-link to="/oldGoods">
            <div class="oldGoodsTitle">二手商品</div>
          </router-link>
          <ul>
            <el-row>
              <el-col :span="8" v-for="item in oldGoods" :key="item.goodsId">
                <div id="liOut" class="grid-content bg-purple">
                  <li>
                    <img :src="item.coverImgUrl" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
            </el-row>
          </ul>
        </div>



        <!-- 推荐商品 -->
        <div id="recommendGoods">
          <router-link to="/recommendGoods">
            <div class="recommendGoodsTitle">推荐商品</div>
          </router-link>
          <!-- 瀑布流 -->
          <div id="pb">
            <ul class="ul1" ref="ulLeft">
              <li v-for="item in ulLeftList" :key="item.goodsId">
                <img :src="item.coverImgUrl" alt @load="onImageLoad()" />
                <div class="describe">{{item.name}}</div>
              </li>
            </ul>
            <ul class="ul2" ref="ulRight">
              <li v-for="item in ulRightList" :key="item.goodsId">
                <img :src="item.coverImgUrl" alt @load="onImageLoad()" />
                <div class="describe">{{item.name}}</div>
              </li>
            </ul>
          </div>
        </div>

        <!-- 刷新 -->
        <!-- <mt-loadmore
          :top-method="loadTop"
          :bottom-method="loadBottom"
          :bottom-all-loaded="allLoaded"
          ref="loadmore"
        >-->
        <!-- <ul>
          <li v-for="item in oldGoods" :key="item.goodsId">
            <img :src="item.bannerUrl" alt />
          </li>
          <li v-for="item in goodsList" :key="item.goodsId">
            <img :src="item.coverImgUrl" alt />
          </li>
        </ul> -->
        <!-- </mt-loadmore> -->
      </div>
    </div>
  </div>
</template>
<script>
import { getOldGoodsList, getManyGoodsList,getShufflingList  } from "@/services/homePage";

export default {
  data() {
    return {
      //二手商品列表
      oldGoods: [],
      //瀑布流列表
      ulLeftList: [],
      ulRightList: [],
      //所有商品列表
      goodsList: [],
      //轮播图列表
      shufflingList:[]
    };
  },
  methods: {
    //  图片加载完之后执行的函数
    onImageLoad() {
      if (this.goodsList.length > 0) {
        if (this.$refs.ulLeft.offsetHeight < this.$refs.ulRight.offsetHeight) {
          this.ulLeftList.push(this.goodsList.shift());
        } else {
          this.ulRightList.push(this.goodsList.shift());
        }
      }
    }
  },
  created() {
    //对接口的调用进行封装  ↓5
    // this.axios.get("/api/cityList").then(res=>{
    //     debugger
    // })
    //获取二手商品列表
    getOldGoodsList().then(res => {
      this.oldGoods = res.rows;
    });
    //获取商品列表
    getManyGoodsList().then(res => {
      this.goodsList = res.rows;
      this.ulLeftList.push(this.goodsList.shift());
    });
    //获取轮播图列表
    getShufflingList().then(res => {
      this.shufflingList = res.rows;
    });
  }
};
</script>
<style lang="less" scoped>
//搜索框
.mint-search {
  height: 56px;
  position: fixed;
  z-index: 1000;
  width: 100%;
  ::v-deep .mint-searchbar-inner {
    border-radius: 20px;
    font-size: 24px;
    border: 2px solid #fd5d1c;
    i {
      font-size: 24px;
      color: #d9d9d9;
    }
  }
}

// 轮播图
#topSwiper {
  height: 200px;
  margin-top: 56px;
  img {
    width: 100%;
    height: 100%;
  }
}
// 三种商品的背景
#streeMain {
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  // 版心
  #content {
    margin: 0 25px;
    padding-top: 15px;

    // 瀑布流
    #pb {
      width: 100%;
      overflow: hidden;
      /* background: darkslategrey; */
      .ul1 {
        width: 48%;
        float: left;
        margin: 1%;
        // background: dimgrey;
        ::v-deep li {
          width: 100%;
          margin-bottom: 5px;
          img {
            width: 100%;
          }
          .describe {
            font-size: 12px;
          }
        }
      }
      .ul2 {
        width: 48%;
        float: right;
        margin: 1%;
        // background: dimgrey;
        ::v-deep li {
          width: 100%;
          margin-bottom: 5px;
          img {
            width: 100%;
          }
          .describe {
            font-size: 12px;
          }
        }
      }
    }

    // 热门商品
    #hotGoods {
      width: 100%;
      // height: 235px;
      background-color: #ffffff;
      // 标题样式
      .hotGoodsTitle {
        height: 35px;
        line-height: 35px;
        padding-left: 10px;
        color: black;
      }
      // ul {
      //   li {
      //     float: left;
      //     width: 25%;
      //     height: 100px;
      //     img {
      //       width: 90%;
      //       height: 80px;
      //     }
      //     div {
      //       width: 100%;
      //       height: 20px;
      //       font-size: 12px;
      //     }
      //   }
      // }
      ul {
        #liOut {
          padding: 10px;

          li {
            width: 100%;
            height: 100px;
            padding: 5%;
            img {
              width: 100%;
              height: 80px;
            }
            div {
              width: 100%;
              height: 20px;
              font-size: 12px;
            }
          }
        }
      }
    }
    // 二手商品
    #oldGoods {
      width: 100%;
      // height: 235px;
      background-color: #ffffff;
      margin: 25px 0;
      // 标题样式
      .oldGoodsTitle {
        height: 35px;
        line-height: 35px;
        padding-left: 10px;
        color: black;
      }
      ul {
        #liOut {
          padding: 10px;

          li {
            width: 100%;
            height: 100px;
            padding: 5%;
            img {
              width: 100%;
              height: 80px;
            }
            div {
              width: 100%;
              height: 20px;
              font-size: 12px;
            }
          }
        }
      }
    }
    // 推荐商品
    #recommendGoods {
      width: 100%;
      // height: 435px;
      background-color: #ffffff;
      // 标题样式
      .recommendGoodsTitle {
        height: 35px;
        line-height: 35px;
        // padding-left: 10px;
        color: black;
      }
      ul {
        #liOut {
          padding: 10px;

          li {
            width: 100%;
            height: 100px;
            padding: 5%;
            img {
              width: 100%;
              height: 80px;
            }
            div {
              width: 100%;
              height: 20px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>