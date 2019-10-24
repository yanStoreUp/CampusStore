<template>
  <div>
    <!-- 顶部导航 -->
    <!-- <mt-header fixed :title="title"></mt-header> -->

    <!-- 中间部分 -->
    <div class="main">
      <transition name="app-router" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <!--底部导航-->
    <mt-tabbar v-model="selected" id="footer" v-show = this.$store.state.show>
      <mt-tab-item id="HomePage">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        <span slot="icon" class="iconfont icon-shouye1" style="font-size:"></span>
        首页
      </mt-tab-item>
      <mt-tab-item id="Sort">
        <span slot="icon" class="iconfont icon-shangpinfenlei"></span>
        商品分类
      </mt-tab-item>
      <mt-tab-item id="ShopCar">
        <span slot="icon" class="iconfont icon-gouwuche"></span>
        购物车
      </mt-tab-item>
      <mt-tab-item id="Mine">
        <span slot="icon" class="iconfont icon-wode2"></span>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>

import { gitExamine } from "./services/mine.js"
export default {
  data() {
    return {
      selected: "HomePage",
      title: "欢迎来到校园商城",
    };
  },
  created() {
    if(this.$route.path == "/"){
      this.$store.commit('changeShow', {show:false})
    }else if (this.$route.path == "/homePage") {
      this.show = true;
      this.selected = "HomePage";
    } else if (this.$route.path == "/sort") {
      this.show = false 
      this.selected = "Sort";
    } else if (this.$route.path == "/shopCar") {
      this.show = true
      this.selected = "ShopCar";
    } else if (this.$route.path == "/mine") {
      this.show = true
      this.selected = "Mine";
    }
  },
  watch: {
    selected(newVal) {
      if (newVal == "HomePage" && this.$route.push != "/homePage") {
        this.$router.push({ path: "/homePage" });
      } else if (newVal == "Sort" && this.$route.push != "/sort") {
        this.$router.push({ path: "/sort" });
      } else if (newVal == "ShopCar" && this.$route.push != "/shopCar") {
        this.$router.push({ path: "/shopCar" });
      } else if (newVal == "Mine" && this.$route.push != "/mine") {
        this.$router.push({ path: "/mine" });
      }
    }
  },

  
  mounted() {
    gitExamine().then(res => {
      if (res.code == 403) {
        this.$notify({
        type: "success",
        message: "您还未登录哦",
        duration: 3000
      });
      } else {
        this.$notify({
        type: "success",
        message: "欢迎您来到校园商城",
        duration: 3000
      });
      }
    });
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  overflow-x: hidden;
  // height: calc(100vh - 55px); //减去底部的高度
  padding-bottom:55px;
  // margin-bottom: 100px
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

//底部导航
#footer {
  position: fixed; 
  bottom:0;
  left: 0;
  span {
    font-size: 20px;
  }
}
</style>
