<template>
  <div>
    <mt-header fixed title="购物车" id="top"></mt-header>
    <div @click="back()" id="back">&lt;返回</div>
    <div class="shopCarGoods">
      <div>
        <span @click="allSelected()" :class="[flag?'cir':'cirAll']"></span>
        <span>全选</span>
      </div>
      <div class="shopCarBox" v-for="value in inShopCar" :key="value.goodsId">
        <div>
          <span @click="selected(value)" :class="[!value.selected?'cir':'cirAll']"></span>
        </div>
        <div>
          <img :src="value.coverImg" alt />
        </div>
        <div class="title">
          <p>{{value.goodsName}}</p>
          <span @click="shopCarAdd(value.goodsId)">-</span>
          <span>{{value.num}}</span>
          <span @click="shopCarSub(value.goodsId)">+</span>
          <p>￥{{value.price}}</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>&nbsp;总价:</span><span>￥{{settlement}}</span>
      <div class="Settlement">
          送货上门
      </div>
    </div>
  </div>
</template>
<script>

import {
  shopCarGoods,
  shopCarDel,
  shopCarChange
} from "../../services/shopcar";
import sort from "../../services/sort";
export default {
  data() {
    return {
      flag: true,
      inShopCar: [],
      selectedGoodsList: [],
      settlement:0
    };
  },
  watch:{
    selectedGoodsList:{
      handler(){
      this.settlement = 0;
      this.selectedGoodsList.forEach(v =>{
        this.settlement += v.price * v.num
      })
      },
      immediate:true,
      deep:true,
    }
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    // 购物车减少货物
    shopCarAdd(x) {
    debugger
      this.inShopCar.forEach(v => {
        if (v.goodsId == x) {
          if (v.num <= 1) {
            shopCarDel(v.shoppingCartId);
            // // 刷新页面不然看不见移除商品
            // this.$router.go(0);
            shopCarGoods().then(res => {
              this.inShopCar = res.list;
            })
          } else {
            v.num--;
            shopCarChange(v.shoppingCartId, v.num);
          }
        }
      })
    },
    // 购物车增加货物
    shopCarSub(x) {
      this.inShopCar.forEach(v => {
        if (v.goodsId == x) {
          v.num++;
          shopCarChange(v.shoppingCartId, v.num);
        }
      });
    },
    //控制全选
    allSelected() {
      this.flag = !this.flag;
      if (!this.flag) {
        // 若果点了全选 就将购物车里所有对象值放入选中清单
        this.selectedGoodsList = Object.values(this.inShopCar);
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
    selected(x) {
      //判断代表选中货物的数组里是否存在所操作货物
      if (
        this.selectedGoodsList.some(v => {
          return v === x;
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
      sort.sortArr().then(res => {
        this.inShopCar.forEach(v => {
          res.rows.forEach(z => {
            // 如果商品是购物车里的商品
            if (v.goodsId == z.goodsId) {
              v.price = z.price;
            }
          });
        });
      });
    });
  }
};
</script>
<style lang="less">
#back{
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
#top{
  background: #EA5F5A;
}
.shopCarGoods {
  height: 20vh;
  margin: 50px 0px 0 10px;
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
      margin-top: calc(15vh - 17px);
    }
    img {
      margin: 5vw 5vw 0 5vw;
      width: 35vw;
      height: 18vh;
    }
    .title {
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
.footer{
  width: 100vw;
  height: 10vh;
  background: #EA5F5A;
  position: fixed;
  top: calc(90vh - 55px);
  left: 0;
  span{
      height: 10vh;
      line-height: 10vh;
      font-size: 25px;
    }
  .Settlement{
    float: right;
    width: 40vw;
    height: 10vh;
    background: skyblue;
    font-size: 25px;
    color: white;
    line-height: 10vh;
    text-align: center;
    font-weight:bold;

  }
}
</style>
