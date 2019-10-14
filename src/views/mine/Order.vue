<template>
  <div>
    <mt-header fixed title="历史订单" id="subject">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="bos">
      <ul>
        <li
          v-for="(item, index) in list"
          :class="{ move: candelete.total == item.total }"
          @touchstart="touchStart(item)"
          @touchend="touchEnd(item)"
          :key="item.orderId"
        >
          <div class="monad">
            <div class="time">
              <span class="createTime">{{ item.createTime }}</span>
              <span class="status">{{ item.status }}</span>
            </div>

            <div
              v-for="(goodItem) in item.goodsList"
              :key="item.orderId + '-' + goodItem.shoppingCartId"
            >
              <div class="goodsList">
                <div class="createTime">
                  <img :src="goodItem.coverImg" alt="" />
                  <div class="introduce">
                    <div>名称: {{ goodItem.goodsName }}</div>
                    <div>数量: {{ goodItem.num }}</div>
                    <div class="total">价格:￥{{ goodItem.price }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="address">收货地址: {{ item.address }}</div>
              <div class="mobile">联系方式 : {{ item.mobile }}</div>
              <div class="total rightTotal">总价 : ￥{{ item.total }}</div>
            </div>
            <!-- {{ item.list.orderId }}
          {{ item.list.userId }}
          {{ item.list.goodsList }}
          {{ item.list.address }}
          {{ item.list.total }}
          {{ item.list.intro }} -->
          </div>

          <div class="del" @click="deleteItem(index)">删除</div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { gitOrder } from "@/services/mine.js";
var obj;
var newArr = [];
export default {
  data() {
    return {
      // 数据
      list: [],
      newArr: [],
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
      this.list = res.rows;

      for (let item of this.list) {
        item.goodsList = JSON.parse(item.goodsList);
        this.newArr.push(item);
      }
    });
  },
  mounted() {
    if (0) {
    }
  }
};
</script>

<style lang="less">
.bos {
  background: #d9d9d93b;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 45px;
}
#subject {
  background-color: #ea3d1d;
}

li {
  background: #fdfdfd;
  border-bottom: 1px solid #e1e1e1;
  line-height: 30px;
  position: relative;
  transform: translateX(0);
  transition: all 0.3s; /*滑动效果更生动*/
  padding-left: 10px;
  margin-top: 8px;
  padding-bottom: 10px;
  padding-top: 10px;
  .time {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e1;

    .status {
      color: #ea3d1d;
      display: inline-block;
      float: right;
      padding-right: 20px;
    }
  }
  .createTime {
    display: flex;
  }

  .goodsList {
    img {
      width: 80px;
      margin-top: 5px;
    }
    .introduce {
      font-size: 15px;
      width: 50%;
      margin-left: 14px;
    }
  }
  .address {
    border-top: 1px solid #e1e1e1;
  }
  .total {
    color: #ea3d1d;
    font-size: 16px;
  }
  .rightTotal,
  .mobile {
    display: inline-block;
  }
  .rightTotal {
    margin-left: 8%;
    font-size: 20px;
  }
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
  background-color: #ea3d1d;
  transform: translateX(60px); /*默认x轴位移60px，使其隐藏*/
}
</style>