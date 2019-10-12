<template>
  <div>
    <mt-header fixed title="历史订单" id="subject">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="box">
      <ul>
        <li
          v-for="(item, index) in list"
          :class="{ move: candelete.total == item.total }"
          @touchstart="touchStart(item)"
          @touchend="touchEnd(item)"
        >
          <div>{{ item.rows.intro }}{{ item.total }}</div>
          <div>{{ item.rows.rows }}{{ item.total }}</div>
          

          <div class="del" @click="deleteItem(index)">删除</div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { gitOrder } from "@/services/mine.js";

export default {
  data() {
    return {
      // 数据
      list: [
        {
          total: 1,
          rows: {
              createTime: "创建时间",
              updateTime: "结束时间",
              orderId: "订单ID",
              userId: "用户ID",
              goodsList: "商品",
              status: "状态",
              address: "地址",
              total: "总金额",
              intro: "介绍",
          },
          code: "备注",          
        },
        {
          total: 2,
          rows: "请左滑动删除我吧"
        },
        {
          total: 3,
          rows: "请左滑动删除我吧"
        },
        {
          total: 4,
          rows: "请左滑动删除我吧"
        },
        {
          total: 5,
          rows: "请左滑动删除我吧"
        },
        {
          total: 6,
          rows: "请左滑动删除我吧"
        }
      ],
      clientNum: {}, // 记录开始滑动（x1）,结束滑动（x2）的鼠标指针的位置
      candelete: {} // 滑动的item
    };
  },
  methods: {
    /**
     * 删除item
     * index是下标
     */
    deleteItem(index) {
      this.list.splice(index, 1);
      // splice方法是删除数组某条数据，或者向某个位置添加数据
    },
    touchStart(item) {
      let touchs = event.changedTouches[0];
      // 记录开始滑动的鼠标位置
      this.clientNum.x1 = touchs.pageX;
      this.candelete = {};
    },
    touchEnd(item) {
      let touchs = event.changedTouches[0];
      // 记录结束滑动的鼠标位置
      this.clientNum.x2 = touchs.pageX;
      this.candelete = {};
      // 判断滑动距离大于50，判定为滑动成功，否则失败
      if (
        this.clientNum.x2 < this.clientNum.x1 &&
        Math.abs(this.clientNum.x1) - Math.abs(this.clientNum.x2) > 50
      ) {
        event.preventDefault();
        this.candelete = item;
      } else if (
        this.clientNum.x2 > this.clientNum.x1 &&
        Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1) > 10
      ) {
        event.preventDefault();
        this.candelete = {};
      }
    }
  },


  beforeMount() {
    gitOrder().then(res => {
      this.rows.createTime
    })
  }
};
</script>

<style lang="less">
#subject {
  background-color: #ea3d1d;
}

li {
  background: #fdfdfd;
  border-bottom: 1px solid #e1e1e1;
  line-height: 40px;
  position: relative;
  transform: translateX(0);
  transition: all 0.3s; /*滑动效果更生动*/
  padding-left: 10px;
}
ul {
  overflow-x: hidden; /*隐藏ul x轴的滚动条*/
}
li.move {
  transform: translateX(-60px); /*滑动后x轴位移-60px,使其可见*/
}
.del {
  position: absolute;
  top: 0;
  right: -1px;
  z-index: 3;
  width: 60px;
  height: 100%;
  text-align: center;
  color: #fff;
  background-color: #ff5b45;
  transform: translateX(60px); /*默认x轴位移60px，使其隐藏*/
}
</style>