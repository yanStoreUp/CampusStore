<template>
  <div>
    <!-- 搜索框 -->
    <!-- <div @click="search">
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
    </div>-->
    <div id="search">
      <input type="text" v-model="myVal" />
      <i class="iconfont icon-fangdajing"></i>
      <div id="searchButton" @click="search">搜索</div>
    </div>

    <div id="content">
      <!-- 历史记录 -->
      <div id="historyRecord">
        <div id="historyRecordTitle">历史记录</div>
        <ul ref="ulHistory">
        </ul>
      </div>

      <!-- 搜索发现 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myVal: ""
    };
  },
  methods: {
    search() {
      var li = document.createElement("li");
      li.innerHTML = `${this.myVal}`;
      this.$refs.ulHistory.appendChild(li);
    }
  }
};
</script>
<style lang="less" scoped>
// 搜索
#search {
  height: 56px;
  background-color: #d9d9d9;

  input {
    border-radius: 20px;
    font-size: 24px;
    border: 2px solid #fd5d1c;
    position: relative;
    float: left;
    width: 65%;
    height: 33px;
    margin: 8px 0;
    margin-left: 10px;
    padding-left: 35px;
  }
  //放大镜
  i {
    font-size: 24px;
    color: #d9d9d9;
    position: absolute;
    top: 15px;
    left: 20px;
  }
  //搜索按钮
  #searchButton {
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
    float: right;
    margin: 14px 10px 0 0;
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
    ul {
      ::v-deep li {
        float: left;
        padding: 4px 10px;
        border-radius: 23px;
        font-size: 13px;
        color: #8d8d8d;
        background-color: #f8f8f8;
        text-align: center;
        height: 15px;
        line-height: 15px;
        margin: 0 15px 15px 0;
      }
    }
  }
}
</style>