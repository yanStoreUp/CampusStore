<template>
  <div>
    <!-- 顶部导航 -->
    <!-- <mt-header fixed :title="title"></mt-header> -->

    <!-- 中间部分 -->
    <div class="content">
      <transition name="app-router" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <!--底部导航-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="HomePage">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        <span slot="icon" class="iconfont icon-shouye"></span>
        首页
      </mt-tab-item>
      <mt-tab-item id="Sort">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        商品分类
      </mt-tab-item>
      <mt-tab-item id="ShopCar">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        购物车
      </mt-tab-item>
      <mt-tab-item id="Mine">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import { isNotBlank } from "./utils/commen-util";
export default {
  data() {
    return {
      selected: "HomePage",
      title: "欢迎来到校园商城"
    };
  },
  created() {
    if (this.$route.path == "/homePage") {
      this.selected = "HomePage";
    } else if (this.$route.path == "/sort") {
      this.selected = "Sort";
    }else if (this.$route.path == "/shopCar") {
      this.selected = "ShopCar";
    }else if (this.$route.path == "/mine") {
      this.selected = "Mine";
    }
  },
  watch: {
    selected(newVal) {
      if (newVal == "HomePage" && this.$route.push != "/homePage") {
        this.$router.push({ path: "/homePage" });
      } else if (newVal == "Sort" && this.$route.push != "/sort") {
        this.$router.push({ path: "/sort" });
      }else if (newVal == "ShopCar" && this.$route.push != "/shopCar") {
        this.$router.push({ path: "/shopCar" });
      }else if (newVal == "Mine" && this.$route.push != "/mine") {
        this.$router.push({ path: "/mine" });
      }
    },
    $router(newVal) {
      if (isNotBlank(newVal.meta.title)) {
        this.title = newVal.meta.title;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  width: 100%;
  overflow-x: hidden;
  height: calc(100vh - 50px);
}
.app-router-enter,
.app-router-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.app-router-leave-to {
  transform: translateX(-100%);
}
.app-router-enter-active,
.app-router-leave-active {
  transition: all 0.4s ease;
}
.logon {
  width: 80%;
  margin: 10px;
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
