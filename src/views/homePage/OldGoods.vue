<template>
  <div>
    <!-- 这是二手商品 -->

     <!-- Tab渲染在这 -->
    <Tab></Tab>
    <!-- 子路由渲染在这 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Tab from "@/components/index/Tab.vue";
export default {
  components: {
    Tab
  }
};
</script>