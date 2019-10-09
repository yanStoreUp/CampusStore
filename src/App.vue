<template>
  <div>
    <!-- 顶部导航 -->
    <!-- <mt-header fixed :title="title"></mt-header> -->

    <!-- 中间部分 -->
    <div class="content">
      <transition name='app-router' mode='out-in'>
        <router-view></router-view>
      </transition>
    </div>

    <!--底部导航-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="goodsClassify">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        <span slot="icon" class="iconfont icon-shouye"></span>
        首页
      </mt-tab-item>
      <mt-tab-item id="mine">
        <!-- <img slot="icon" src="../assets/100x100.png" /> -->
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>

export default {
  data() {
    return {
      selected: "goodsClassify",
      title: "欢迎来到校园商城"
    };
  },
  created() {
    if (
      this.$router.path == "/goodsClassify" &&
      this.$router.path != "/goodsClassify"
    ) {
      this.selected = "goodsClassify";
    } else if (this.$router.path == "/mine" && this.$router.path != "/mine") {
      this.selected = "mine";
    }
  },
  watch: {
    selected(newVal) {
      if (newVal == "goodsClassify") {
        this.$router.push({ path: "/goodsClassify" });
      } else if (newVal == "mine") {
        this.$router.push({ path: "/mine" });
      }
    },
    $router(newVal){
      if(isNotBlank(newVal.meta.title)){
        this.title=newVal.meta.title
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
.app-router-leave-to{
  opacity: 0;
  transform: translateX(100%)
}
.app-router-leave-to{
  transform: translateX(-100%)
}
.app-router-enter-active,
.app-router-leave-active{
  transition: all .4s ease
}
.logon {
    width: 80%;
    margin:10px;
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
    }}
</style>
