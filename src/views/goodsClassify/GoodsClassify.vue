<template>
  <div>
    <!-- 这是首页 -->

    <!-- 三种搜索方式 -->
    <!-- <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search> -->
    <!-- <mt-search  cancel-text="取消" placeholder="搜索"></mt-search> -->

    <!-- <mt-search v-model="value" :result.sync="result"></mt-search> -->

    <!-- <mt-search v-model="value">
      <mt-cell v-for="item in result" :title="item.title" :value="item.value"></mt-cell>
    </mt-search>-->

    <!-- 轮播图 -->
    <div>111</div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
mt-swipe {
 height: 50px;
}
</style>