<template>
  <div>
    <!-- 顶部导航 -->
    <mt-header fixed :title="title"></mt-header>

    <!-- 中间部分 -->
    <div class="content">
      <router-view></router-view>
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
      this.$router.path == "./goodsClassify" &&
      this.$router.path != "./goodsClassify"
    ) {
      this.selected = "goodsClassify";
    } else if (this.$router.path == "./mine" && this.$router.path != "./mine") {
      this.selected = "mine";
    }
  },
  watch: {
    selected(newVal) {
      if (newVal == "goodsClassify") {
        this.$router.push({ path: "./goodsClassify" });
      } else if (newVal == "mine") {
        this.$router.push({ path: "./mine" });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  margin-top: 40px;
}
</style>





