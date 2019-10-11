<template>
  <div>
    <mt-header fixed title="购物车"></mt-header>
    <div class="shopCarGoods">
      <div>
        <span @click="allSelected()" :class="[flag?'cir':'cirAll']"></span>
        <span>全选</span>
      </div>
      <div class="shopCarBox" v-for="value in obj" :key="value.id">
        <div>
          <span @click="selected(value)" :class="[!value.selected?'cir':'cirAll']"></span>
        </div>
        <div>
          <img src="../../../../public/imag/5.jpg" alt />
        </div>
        <div class="title">
          <p>{{value.nm}}</p>
          <span>+</span>
          <span>{{value.num}}</span>
          <span>-</span>
          <p>￥{{value.pirce}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true,
      obj: {
        obj1: {
          id: 11,
          nm: "小米11",
          num: 1,
          pirce: 5000
        },
        obj2: {
          id: 12,
          nm: "小米12",
          num: 2,
          pirce: 5000
        },
        obj3: {
          id: 13,
          nm: "小米13",
          num: 3,
          pirce: 5000
        }
      },
      selectedGoodsList: []
    };
  },
  methods: {
    allSelected() {
      this.flag = !this.flag;
      if (!this.flag) {
        // 若果点了全选 就将购物车里所有对象值放入选中清单
        this.selectedGoodsList = Object.values(this.obj);
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
          this.selectedGoodsList = []        
        });
      }

    },
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
      this.obj = { ...this.obj };
    }
  }
};
</script>
<style lang="less">
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
      width: 22vw;
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
</style>
