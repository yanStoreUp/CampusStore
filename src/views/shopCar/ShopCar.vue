<template>
  <div>
    <mt-header fixed title="购物车" id="top"></mt-header>
    <div @click="back()" id="back">&lt;返回</div>
    <div class="shopCarGoods">
      <div>
        <span @click="allSelected()" :class="[flag?'cir':'cirAll']"></span>
        <span>全选</span>
      </div>
      <div class="shopCarBox" v-for="(value,index) in inShopCar" :key="index">
        <div id="first">
          <span @click="selected(value,index)" :class="[!value.selected?'cir':'cirAll']"></span>
        </div>
        <div>
          <img :src="value.coverImg" alt />
        </div>
        <div class="title">
          <p>{{value.goodsName}}</p>
          <span @click="shopCarAdd(index)">-</span>
          <span>{{value.num}}</span>
          <span @click="shopCarSub(index)">+</span>
          <p>￥{{value.price}}</p>
        </div>
        <div>
          <div @click="delGoods(index)" class="el-icon-delete"></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>&nbsp;总价:</span>
      <span>￥{{settlement}}</span>
      <div @click="send = true" class="Settlement">送货上门</div>
    </div>
    <div v-show="send" id="send">
      <div id="sendBox">
        <el-input id="phone" v-model="phone" placeholder="请输入手机号"></el-input>
        <el-input id="address" v-model="address" placeholder="收货地址"></el-input>
        <p>总价：￥{{settlement}}</p>
        <el-button @click="send = false" id="sure" type="info" round>取消</el-button>
        <el-button @click="sendOrder()" id="cancel" type="success" round>确定</el-button>
      </div>
    </div>
    <div id="delSure" v-show="del">
        <h1>不想要我了吗QAQ</h1>
        <el-button @click="del = false" id="endSure" type="success" round>心软取消</el-button>
        <el-button @click="delSure()" id="endCancel" type="info" round>残忍确定</el-button>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
import {
  shopCarGoods,
  shopCarDel,
  shopCarChange,
  shopCarSettlementApi
} from "../../services/shopcar";
import sort from "../../services/sort";
export default {
  data() {
    return {
      id:0,
      del:false,
      phone: "",
      address: "",
      send: false,
      flag: true,
      inShopCar: [],
      selectedGoodsList: [],
      settlement: 0
    };
  },
  watch: {
    selectedGoodsList: {
      handler() {
        this.settlement = 0;
        this.selectedGoodsList.forEach(v => {
          this.settlement += v.price * v.num;
        });
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // 提价订单
    sendOrder() {
      var reg = /^((13[0-2])|(15[056])|(18[5-6])|145|176)\d{8}$/;
      if (reg.test(this.phone) && this.address != "") {
        MessageBox("提示", "结算成功");
        this.selectedGoodsList.forEach(v => {
          shopCarDel(v.shoppingCartId).then(res => {
            // 如果后台购物车商品删除成功操作成功的
            if (res.code == 0) {
              shopCarGoods().then(res => {
                this.inShopCar = res.list;
              });
            }
          });
        });
        let goodsList = JSON.stringify(this.selectedGoodsList);
        // console.log(goodsList);
          shopCarSettlementApi(
            goodsList,
            this.address,
            this.phone,
            this.settlement
          );
        this.send = false;
        this.settlement = 0;
      } else {
        alert(
          "信息输入有误！"
        );
      }
    },
    // 删除商品
    delGoods(x) {
      this.del = true;
      this.id = x;
    },
    delSure(){
      shopCarDel(this.inShopCar[this.id].shoppingCartId).then(res => {
        // 如果后台购物车商品删除成功操作成功的
        if (res.code == 0) this.inShopCar.splice(this.id, 1);
      });
      this.del = false;
      this.settlement = 0;
        this.selectedGoodsList.forEach(v => {
          this.settlement += v.price * v.num;
        });
    },
    // 返回上一级
    back() {
      this.$router.go(-1);
    },
    // 购物车减少货物
    shopCarAdd(x) {
      if (this.inShopCar[x].num <= 1) {
        this.inShopCar[x].num = 1;
        alert('别点了再点就没了！')
      } else {
        this.inShopCar[x].num -= 1;
        shopCarChange(this.inShopCar[x].shoppingCartId, this.inShopCar[x].num);
      }
    },
    // 购物车增加货物
    shopCarSub(x) {
      // console.log(this.inShopCar[x])
      this.inShopCar[x].num += 1;
    },
    //控制全选
    allSelected() {
      this.flag = !this.flag;
      if (!this.flag) {
        // 若果点了全选 就将购物车里所有对象值放入选中清单
        [...this.selectedGoodsList] = [...this.inShopCar];
        this.selectedGoodsList.forEach(v => {
          // 将所有商品表示选中的标志改成选中
          v.selected = true;
        });
      } else {
        // 如果取消全选
        this.selectedGoodsList.forEach(v => {
          // 将商品的选中标志位改成未选中
          v.selected = false;
          // 去除列表所有商品
          this.selectedGoodsList = [];
        });
      }
    },
    // 控制单间货物的选取
    selected(x, y) {
      //判断代表选中货物的数组里是否存在所操作货物
      if (
        this.selectedGoodsList.some(v => {
          return v.goodsId === x.goodsId;
        })
      ) {
        //如果有就标记一下表示取消并且去掉
        x.selected = false;
        //去掉操作货物
        let a = this.selectedGoodsList.indexOf(x);
        this.selectedGoodsList.splice(a, 1);

      } else {
        //如果没有就加入列表并且标记一下表示选中
        x.selected = true;
        this.selectedGoodsList.push(x);
      }
      //手动改变一下对象不然不会更改
      this.inShopCar = [...this.inShopCar];
    }
  },
  created() {
    // 将购物车商品从后台取出放入列表中
    shopCarGoods().then(res => {
      this.inShopCar = res.list;
    });
  }
};
</script>
<style lang="less">
#delSure{
  position: fixed;
  top: 30vh;
  left: 10vw;
  z-index:2000;
  width: 80vw;
  height: 30vh;
  background: rgba(0, 0, 0, 0.5);
  h1{
    color: white;
    text-align: center;
    line-height: 120px;
  }
  #endSure{
    position: fixed;
    top: 50vh;
    left: 20vw;
  }
  #endCancel{
    position: fixed;
    top: 50vh;
    left: 55vw;
  }
}
#send {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8000;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  #sendBox {
    width: 90vw;
    height: 50vh;
    margin: 18vh 5vw 0;
    background-color: #f2f2f2;
    border-radius: 10px;
    #phone {
      width: 80vw;
      margin: 4vh 5vw 0;
      border: 1px solid #ea5f5a;
    }
    #address {
      width: 80vw;
      margin: 8vh 5vw 0;
      border: 1px solid #ea5f5a;
    }
    p {
      height: 10vh;
      width: 80vw;
      margin: 8vh 5vw 0;
    }
    #sure {
      position: fixed;
      top: 58vh;
      left: calc(50vw - 145px);
    }
    #cancel {
      position: fixed;
      top: 58vh;
      left: calc(50vw + 80px);
    }
  }
}
#back {
  text-indent: 10px;
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  color: white;
  z-index: 5000;
}
#top {
  background: #ea5f5a;
}
.shopCarGoods {
  height: 20vh;
  padding: 50px 0px 0 10px;
  .cir {
    display: inline-block;
    width: 6vw;
    height: 6vw;
    border: 1px solid #ea5f5a;
    border-radius: 15px;
  }
  .cirAll {
    display: inline-block;
    width: calc(6vw + 2px);
    height: calc(6vw + 2px);
    background: #ea5f5a;
    border-radius: 15px;
  }
  .shopCarBox {
    height: 20vh;
    display: flex;
    flex-direction: row;
    div:nth-of-type(1) {
      height: 20vh;
      margin-top: calc(15vh - 37px);
      font-size: 30px;
    }
    img {
      margin: 5vw 5vw 0 5vw;
      width: 35vw;
      height: 18vh;
    }
    .title {
      width: 30vw;
      p {
        font-size: 4vw;
      }
      span {
        font-size: 4vw;
        text-align: center;
        line-height: 6vw;
        margin-right: 1vw;
        display: inline-block;
        width: 6vw;
        height: 6vw;
        border: 1px solid black;
      }
    }
  }
}
.footer {
  width: 100vw;
  height: 10vh;
  background: #ea5f5a;
  position: fixed;
  top: calc(90vh - 55px);
  left: 0;
  span {
    height: 10vh;
    line-height: 10vh;
    font-size: 25px;
  }
  .Settlement {
    float: right;
    width: 40vw;
    height: 10vh;
    background: skyblue;
    font-size: 25px;
    color: white;
    line-height: 10vh;
    text-align: center;
    font-weight: bold;
  }
}
</style>
