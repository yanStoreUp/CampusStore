<template>
  <div>
    <mt-header fixed title="我的" id="subject">
      <router-link to="/homePage" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="box">
      <!-- 上传头像 -->
      <div id="head">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      </div>

      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->

      <!-- 账户昵称 -->
      <p class="name">{{ msguserName }}</p>

      <!-- 历史订单 -->
      <p class="history Htop">
        <router-link to="/order"
          ><el-link type="primary">历史订单</el-link></router-link
        >
      </p>
      <!-- 个人信息 -->
      <p class="history">
        <router-link to="/personal"
          ><el-link type="success">个人信息</el-link></router-link
        >
      </p>
      <!-- 注销 -->
      <p class="history Hbut">
        <mt-button type="danger" class="logon" @click="writeOff"
          >注销</mt-button
        >
      </p>

      <!--
    <router-link to="/enroll"><mt-button type="default" class="logon">重新注册</mt-button></router-link>
    -->

      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import { gitExamine, gitLogout } from "@/services/mine.js";
var isLogon = 0;
export default {
  data() {
    return {
      imageUrl: "",
      msguserName: "",
      msgavatar: ""
    };
  },
  beforeMount() {
    gitExamine().then(res => {
      isLogon = res.code;
      if (isLogon == 403) {
        this.$notify({
        type: "success",
        message: "请先登录!",
        duration: 3000
      });
        this.$router.push("/register");
      } else {
        this.msguserName = res.data.userName;
        this.imageUrl = res.data.avatar;
      }
    });
  },
  methods: {
    writeOff() {
      gitLogout();
      this.$notify({
        type: "success",
        message: "注销成功!",
        duration: 3000
      });
      this.$router.replace("/register");
    }
  }
};
</script>
<style lang="less">
#subject {
  background-color: #ea3d1d;
}

.box {
  padding-top: 60px;
  #head {
    width: 150px;
    margin: 5px auto;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
  }
  .name {
    width: 100px;
    height: 30px;
    margin: 15px auto;
    font-size: 16px;
    text-align: center;
  }
  .history {
    margin: 20px 20px;
    border-bottom: 1px solid #efefef;
    padding: 10px;
  }
  .Htop {
    margin-top: 100px;
  }

  .logon {
    width: 80%;
    margin: 10px 10%;
  }
  .Hbut {
    border: none;
    margin-top: 60px;
  }

  .mint-button--large {
    width: 80%;
    margin: 10px auto;
  }
}

a {
  text-decoration: none;
  color: #333;
}
</style>
