<template>
  <div>
    <div class="goodsimg">
      <img src="../../../../public/imag/5.jpg" />
    </div>
    <div class="goodsDatas">
      <h2>￥5000</h2>
      <p>美女美女美女美女美女美女美女美女美女美女美女美女美女美女美女</p>
      <p>尺寸：一人来高</p>
      <div>
        商品展示：
        <div>
          <img src="../../../../public/imag/1.jpg" />
          <img src="../../../../public/imag/2.jpg" />
          <img src="../../../../public/imag/3.jpg" />
          <img src="../../../../public/imag/6.jpg" />
          <img src="../../../../public/imag/10.jpg" />
          <img src="../../../../public/imag/11.jpg" />
          <img src="../../../../public/imag/12.jpg" />
          <img src="../../../../public/imag/13.jpg" />
          <img src="../../../../public/imag/14.jpg" />
        </div>
      </div>
    </div>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
      <div v-show="flag" class="cir1"></div>
    </transition>
    <div id="addToCar">
      <span @click="flag = !flag" id="font" class="iconfont icon-gouwuche"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
      el.style.width = '100vw';
      el.style.height = '60vh';
      el.style.borderRadius = '0';
      el.style.opacity = '0.5';
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.opacity = '0.5';
      el.style.transform = "translate(calc(100vw - 80px),calc(100vh - 135px))";
      el.style.width = '80px';
      el.style.height = '80px';
      el.style.borderRadius = '50%';
      el.style.transition = "all 0.5s linear";
      done();
    },
    afterEnter(el) {
      this.flag = false;
    }
  }
};
</script>

<style lang="less">
.goodsimg {
  img {
    width: 100vw;
    height: 30vh;
  }
}
.goodsDatas {
  padding: 0px 10px;
  h2 {
    color: red;
  }
  div {
    div {
      img {
        width: 46vw;
        height: 30vh;
      }
    }
  }
}
#addToCar {
  position: fixed;
  top: calc(100vh - 135px);
  left: calc(100vw - 80px);
  width: 80px;
  height: 80px;
  background: orange;
  border-radius: 50%;
  #font {
    font-size: 40px;
    margin-left: 20%;
    line-height: 80px;
  }
}
.cir1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background: orange;
}
</style>