<template>
  <div>
    <!-- 搜索框 -->
    <!-- <div @click="search">
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
    </div>-->
    <div id="search">
      <input type="text" v-model="myVal" placeholder="搜索" />
      <i class="iconfont icon-fangdajing"></i>
      <div id="searchButton" @click="search">搜索</div>
    </div>

    <!-- 搜索列表 -->
    <ul id="searchList" v-for="item in searchList" :key="item.goodsId">
      <li @click="getGoodsId(item)" ref="searchListLi">
        {{item.name}}
        <i class="iconfont icon-arrow-left-top" @click="textUp(item.name)"></i>
      </li>
    </ul>

    <div id="content" v-show="b">
      <!-- 历史记录 -->
      <div id="historyRecord">
        <span id="historyRecordTitle">历史记录</span>
        <i class="iconfont icon-lajitong" @click="empty"></i>
        <ul ref="ulHistory">
          <li v-for="item in commentList" :key="item">{{item}}</li>
        </ul>
      </div>

      <!-- 搜索发现 -->
      <div id="discover">
        <div id="discoverTitle">搜索发现</div>
        <ul>
          <li
            v-for="item in searchFoundList"
            :key="item.goodsId"
            @click="getGoodsId(item)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 设定一个localstroage的key
// let commentList = JSON.parse（localStroage.getItem（'commentList'）|| '[]“）
// //本地数据为空时就是空数组
// 将要保存的数据出进去
// commentLIst.push（bjj）
// 保存到localStroage
// localStroage.setItem('comment',JSON.stringify(commentList))

// var imgs = obj_mainform.archivesId  //声明个变量存储下数据
// localStorage.setItem('key',imgs);  //将变量imgs存储到name字段

// var naid = localStorage.getItem("key"); //获取指定key本地存储的值

import {
  getSearchResultList,
  getSearchFoundListList
} from "@/services/homePage";
export default {
  data() {
    return {
      // 搜索框中的内容
      myVal: "",
      //搜索列表
      searchList: [],
      //搜索发现列表
      searchFoundList: [],
      b: true,
      commentList: []
    };
  },
  created() {
    //获取轮播图列表
    getSearchFoundListList().then(res => {
      this.searchFoundList = res.rows;
    });
    this.commentList = JSON.parse(localStorage.getItem("comment") || "[]");
    this.commentList = [...new Set(this.commentList)]
  },
  watch: {
    myVal(newVal) {
      if (newVal != "") {
        this.b = false;
      } else {
        this.b = true;
      }
    }
  },
  methods: {
    //搜索按钮
    search() {
      // var li = document.createElement("li");
      // li.innerHTML = this.myVal;

      this.commentList.push(this.myVal)
      localStorage.setItem("comment", JSON.stringify(this.commentList));

      // let set = new Set(this.commentList.push(this.myVal))
      // localStorage.setItem("comment", JSON.stringify(set));

      // this.$refs.ulHistory.appendChild(li);
      getSearchResultList(this.myVal).then(res => {
        this.searchList = res.rows;
      });
    },
    //垃圾桶
    empty() {
      localStorage.clear();
      this.commentList = JSON.parse(localStorage.getItem("comment") || "[]");
    },
    //列表右侧箭头
    textUp(a) {
      this.myVal = a;
    },
    //商品详情
    getGoodsId(x) {
      this.$store.commit("gerGoodsId", { ran: x });
      this.$router.push({ path: "/goodsData" });
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
    font-size: 16px;
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
    font-size: 22px;
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

// 搜索列表
#searchList {
  li {
    font-size: 13px;
    padding-left: 30px;
    border-bottom: 1px solid #ddd;
    i {
      float: right;
      margin-right: 15px;
    }
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
      font-size: 20px;
    }
    i {
      margin-top: 8px;
      float: right;
      font-size: 20px;
    }
    ul {
      // height: 200px;
      ::v-deep li {
        float: left;
        padding: 4px 10px;
        border-radius: 23px;
        font-size: 13px;
        color: #606060;
        background-color: #f8f8f8;
        text-align: center;
        height: 15px;
        line-height: 16px;
        margin: 0 15px 15px 0;
      }
    }
  }
  // 搜索发现
  #discover {
    width: 100%;
    margin-top: 15px;
    #discoverTitle {
      height: 35px;
      line-height: 35px;
      padding-left: 10px;
      color: black;
      font-size: 20px;
    }
    ul {
      li {
        float: left;
        padding: 4px 10px;
        border-radius: 23px;
        font-size: 13px;
        color: #606060;
        background-color: #f8f8f8;
        text-align: center;
        height: 15px;
        line-height: 16px;
        margin: 0 15px 15px 0;
      }
    }
  }
}
</style>