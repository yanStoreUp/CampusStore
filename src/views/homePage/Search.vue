<template>
  <div>
    <!-- 搜索框 -->
    <mt-search cancel-text="搜索" placeholder="女装时尚气质"></mt-search>

    <div id="content">
      <!-- 历史记录 -->
      <div id="historyRecord">
        <div id="historyRecordTitle">历史记录</div>
        <!-- <span>上衣</span>
        <span>连衣裙</span>
        <span>潮流女装网红套装</span>
        <span>潮流女装秋季新款</span> -->
        <ul>
            <li>上衣</li>
            <li>连衣裙</li>
            <li>潮流女装网红套装</li>
            <li>潮流女装秋季新款</li>
        </ul>
      </div>

      <!-- 搜索发现 -->
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
// 搜索
.mint-search {
  height: 100%;
  ::v-deep .mint-searchbar-inner {
    border-radius: 20px;
    font-size: 24px;
    border: 2px solid #fd5d1c;
    //放大镜
    i {
      font-size: 24px;
      color: #d9d9d9;
    }
  }
  //搜索二字
  ::v-deep .mint-searchbar-cancel {
    border: 2px solid #fd5d1c;
    padding: 4px 6px;
    border-radius: 23px;
    font-size: 13px;
    color: white;
    background-color: #fd5d1c;
    width: 29px;
    text-align: center;
    height: 15px;
    line-height: 15px;
  }
}
// 版心
#content {
  margin: 20px;
  // 历史记录
  #historyRecord {
    width: 100%;
    #historyRecordTitle {
      height: 35px;
      line-height: 35px;
      padding-left: 10px;
      color: black;
    }
    li {
        float: left;
      padding: 4px 10px;
      border-radius: 23px;
      font-size: 13px;
      color: 8d8d8d;
      background-color: #f8f8f8;
      text-align: center;
      height: 15px;
      line-height: 15px;
      margin: 0 15px 15px 0;
    }
  }
}
</style>