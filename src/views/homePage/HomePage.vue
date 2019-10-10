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
      <mt-swipe-item>
        <img src="@/assets/imgs/goods/1.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/imgs/goods/2.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/imgs/goods/3.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/imgs/goods/4.jpg" alt />
      </mt-swipe-item>
    </mt-swipe>

    <div id="streeMain">
      <div id="content">
        <!-- 热门商品 -->
        <div id="hotGoods">
          <router-link to="/hotGoods">
            <div class="hotGoodsTitle">热门商品</div>
          </router-link>
          <!-- <ul>
            <li>
              <img src="@/assets/imgs/rendering/rd1.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/goods/2.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/goods/3.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/goods/4.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/goods/5.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/goods/6.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/goods/7.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/goods//8.jpg" alt />
              <div>发现世间</div>
            </li>
          </ul>-->
          <ul>
            <el-row>
              <el-col :span="6">
                <div id="liOut" class="grid-content bg-purple">
                  <li>
                    <img src="@/assets/imgs/goods/1.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="6">
                <div id="liOut" class="grid-content bg-purple-light">
                  <li>
                    <img src="@/assets/imgs/goods/2.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="6">
                <div id="liOut" class="grid-content bg-purple">
                  <li>
                    <img src="@/assets/imgs/goods/3.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="6">
                <div id="liOut" class="grid-content bg-purple-light">
                  <li>
                    <img src="@/assets/imgs/goods/4.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="6">
                <div id="liOut" class="grid-content bg-purple">
                  <li>
                    <img src="@/assets/imgs/goods/1.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="6">
                <div id="liOut" class="grid-content bg-purple-light">
                  <li>
                    <img src="@/assets/imgs/goods/2.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="6">
                <div id="liOut" class="grid-content bg-purple">
                  <li>
                    <img src="@/assets/imgs/goods/3.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="6">
                <div id="liOut" class="grid-content bg-purple-light">
                  <li>
                    <img src="@/assets/imgs/goods/4.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
            </el-row>
          </ul>
        </div>
        <!-- 二手商品 -->
        <div id="oldGoods">
          <router-link to="/oldGoods">
            <div class="oldGoodsTitle">二手商品</div>
          </router-link>
          <ul>
            <el-row>
              <el-col :span="8">
                <div id="liOut" class="grid-content bg-purple">
                  <li>
                    <img src="@/assets/imgs/goods/1.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="8">
                <div id="liOut" class="grid-content bg-purple-light">
                  <li>
                    <img src="@/assets/imgs/goods/2.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="8">
                <div id="liOut" class="grid-content bg-purple">
                  <li>
                    <img src="@/assets/imgs/goods/3.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8">
                <div id="liOut" class="grid-content bg-purple">
                  <li>
                    <img src="@/assets/imgs/goods/1.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="8">
                <div id="liOut" class="grid-content bg-purple-light">
                  <li>
                    <img src="@/assets/imgs/goods/2.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="8">
                <div id="liOut" class="grid-content bg-purple">
                  <li>
                    <img src="@/assets/imgs/goods/3.jpg" alt />
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

          <ul>
            <el-row>
              <el-col :span="12">
                <div id="liOut" class="grid-content bg-purple">
                  <li>
                    <img src="@/assets/imgs/goods/1.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="12">
                <div id="liOut" class="grid-content bg-purple-light">
                  <li>
                    <img src="@/assets/imgs/goods/2.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <div id="liOut" class="grid-content bg-purple">
                  <li>
                    <img src="@/assets/imgs/goods/1.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="12">
                <div id="liOut" class="grid-content bg-purple-light">
                  <li>
                    <img src="@/assets/imgs/goods/2.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <div id="liOut" class="grid-content bg-purple">
                  <li>
                    <img src="@/assets/imgs/goods/1.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
              <el-col :span="12">
                <div id="liOut" class="grid-content bg-purple-light">
                  <li>
                    <img src="@/assets/imgs/goods/2.jpg" alt />
                    <div>发现世间好物</div>
                  </li>
                </div>
              </el-col>
            </el-row>
          </ul>
        </div>

        <!-- 瀑布流 -->
        <div id="pb">
          <ul class="ul1">
            <!-- <li></li>
            <div><img src="写意/img/fangda.png" alt=""></div>-->
          </ul>
          <ul class="ul1"></ul>
          <ul class="ul1"></ul>
          <ul class="ul1"></ul>
        </div>

        <!-- 刷新 -->
        <mt-loadmore
          :top-method="loadTop"
          :bottom-method="loadBottom"
          :bottom-all-loaded="allLoaded"
          ref="loadmore"
        >
          <ul>
            <li v-for="item in cities" :key='item'>{{ item.id }}</li>
          </ul>
        </mt-loadmore>
      </div>
    </div>
  </div>
</template>
<script>
import { getCityList } from "@/services/city";

export default {
  data() {
    return {
      cities: []
    };
  },
  created() {
    //对接口的调用进行封装  ↓5
    // this.axios.get("/api/cityList").then(res=>{
    //     debugger
    // })
    getCityList().then(res => {
      this.cities = res.data.cities;
    });
  },
  mounted() {
    //瀑布流
    var uls = document.getElementById("pb").getElementsByTagName("ul");
    // debugger
    var n = 0;
    for (var i = 0; i < 30; i++) {
      n++;
      var img = document.createElement("img");
      img.src = `/rendering/rd${n}.jpg`;
      img.onload = function() {
        var li = document.createElement("li");
        li.appendChild(this);
        // li.innerHTML += `<div><img src="写意/img/fangda.png" alt=""></div>`;
        li.innerHTML += `<div class='describe'>￥999 2019人付款</div>`;
        uls[minIndex()].appendChild(li);
      };
    }

    function minIndex() {
      var min = 0;
      for (var i = 1; i < uls.length; i++) {
        if (uls[min].offsetHeight > uls[i].offsetHeight) {
          min = i;
        }
      }
      return min;
    }
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
        width: 23%;
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