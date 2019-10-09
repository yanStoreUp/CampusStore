<template>
  <div>
    <!-- 这是首页 -->

    <!-- 搜索 -->
    <router-link to="/search">
      <mt-search placeholder="搜索"></mt-search>
    </router-link>
    <!-- 轮播图 -->
    <mt-swipe id="topSwiper" :auto="4000">
      <mt-swipe-item>
        <img src="@/assets/imgs/1.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/imgs/2.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/imgs/3.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/imgs/4.jpg" alt />
      </mt-swipe-item>
    </mt-swipe>

    <div id="streeMain">
      <div id="content">
        <!-- 热门商品 -->
        <div id="hotGoods">
          <router-link to="/hotGoods">
            <div class="hotGoodsTitle">热门商品</div>
          </router-link>
          <ul>
            <li>
              <img src="@/assets/imgs/1.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/2.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/3.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/4.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/5.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/6.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/7.jpg" alt />
              <div>发现世间</div>
            </li>
            <li>
              <img src="@/assets/imgs/8.jpg" alt />
              <div>发现世间</div>
            </li>
          </ul>
        </div>
        <!-- 二手商品 -->
        <div id="oldGoods">
          <router-link to="/oldGoods">
            <div class="oldGoodsTitle">二手商品</div>
          </router-link>
          <ul>
            <li>
              <img src="@/assets/imgs/1.jpg" alt />
              <div>发现世间好物</div>
            </li>
            <li>
              <img src="@/assets/imgs/2.jpg" alt />
              <div>发现世间好物</div>
            </li>
            <li>
              <img src="@/assets/imgs/3.jpg" alt />
              <div>发现世间好物</div>
            </li>
            <li>
              <img src="@/assets/imgs/4.jpg" alt />
              <div>发现世间好物</div>
            </li>
            <li>
              <img src="@/assets/imgs/5.jpg" alt />
              <div>发现世间好物</div>
            </li>
            <li>
              <img src="@/assets/imgs/6.jpg" alt />
              <div>发现世间好物</div>
            </li>
          </ul>
        </div>
        <!-- 推荐商品 -->
        <div id="recommendGoods">
          <router-link to="/recommendGoods">
            <div class="recommendGoodsTitle">推荐商品</div>
          </router-link>
          <ul>
            <li>
              <img src="@/assets/imgs/1.jpg" alt />
              <div>发现世间好物</div>
            </li>
            <li>
              <img src="@/assets/imgs/2.jpg" alt />
              <div>发现世间好物</div>
            </li>
            <li>
              <img src="@/assets/imgs/3.jpg" alt />
              <div>发现世间好物</div>
            </li>
            <li>
              <img src="@/assets/imgs/4.jpg" alt />
              <div>发现世间好物</div>
            </li>
            <li>
              <img src="@/assets/imgs/5.jpg" alt />
              <div>发现世间好物</div>
            </li>
            <li>
              <img src="@/assets/imgs/6.jpg" alt />
              <div>发现世间好物</div>
            </li>
            <li>
              <img src="@/assets/imgs/7.jpg" alt />
              <div>发现世间好物</div>
            </li>
            <li>
              <img src="@/assets/imgs/8.jpg" alt />
              <div>发现世间好物</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
//搜索框
.mint-search {
  height: 100%;
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
    // 热门商品
    #hotGoods {
      width: 100%;
      height: 235px;
      background-color: #FFFFFF;
      // 标题样式
      .hotGoodsTitle {
        height: 35px;
        line-height: 35px;
        padding-left: 10px;
        color: black;
      }
      ul {
        li {
          float: left;
          width: 25%;
          height: 100px;
          img {
            width: 90%;
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
    // 二手商品
    #oldGoods {
      width: 100%;
      height: 235px;
      background-color: #FFFFFF;
      margin: 25px 0;
      // 标题样式
      .oldGoodsTitle {
        height: 35px;
        line-height: 35px;
        padding-left: 10px;
        color: black;
      }
      ul {
        li {
          float: left;
          width: 33%;
          height: 100px;
          img {
            width: 90%;
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
    // 推荐商品
    #recommendGoods {
      width: 100%;
      height: 435px;
      background-color: #FFFFFF;
      // 标题样式
      .recommendGoodsTitle {
        height: 35px;
        line-height: 35px;
        padding-left: 10px;
        color: black;
      }
      ul {
        li {
          float: left;
          width: 50%;
          height: 100px;
          img {
            width: 90%;
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
</style>