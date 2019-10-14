


<template>
  <div>
    <mt-header fixed title="忘记密码" id="subject">
      <router-link to="/register" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="box">
      <div class="imgs"><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1342176314,1471641206&fm=26&gp=0.jpg" alt=""></div>

      <mt-field
        label="登录账户"
        placeholder="请输入登录账户"
        v-model="loginName"
        @keydown.native.capture="hintName()"
      >
        <span class="hint">{{ msgloginName }}</span>
      </mt-field>

      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        @keydown.native.capture="hintPassword()"
      >
        <span class="hint">{{ msgpassword }}</span>
      </mt-field>

      <mt-field
        label="再输入密码"
        placeholder="请再次输入密码"
        type="password"
        v-model="recur"
      >
        <span class="hint">{{ msgrecur }}</span>
      </mt-field>

      <mt-field
        label="手机号"
        placeholder="请输入手机号"
        type="tel"
        v-model="phonenumber"
        @keydown.native.capture="hintPhonenumber()"
      >
        <span class="hint">{{ msgphonenumbere }}</span>
      </mt-field>

      <mt-field label="验证码" placeholder="请输入验证码" v-model="code">
        <button
          class="{disabled: !this.canClick}"
          id="disabled"
          @click="countDown"
        >
          {{ content }}
        </button>
      </mt-field>
      <mt-button type="primary" id="logon" @click="uploading"
        >点击修改</mt-button
      >
    </div>
  </div>
</template>


<script>
import { gitnote, gitPassword } from "@/services/mine.js";

export default {
  data() {
    return {
      content: "发送验证码",
      totalTime: 60,
      canClick: false, //添加canClick

      loginName: "",

      password: "",
      phonenumber: "",
      code: "",
      msgloginName: "",
      msgpassword: "",
      msgphonenumbere: "",
      recur: "",
      msgrecur: "",
      imageUrl: ""
    };
  },

  methods: {
    hintName() {
      if (this.loginName.length == 0) {
        this.msgloginName = "用户名不能为空";
      } else if (this.loginName.length < 4) {
        this.msgloginName = "用户名至少4个字符";
      } else {
        this.msgloginName = "";
      }
    },

    hintPassword() {
      if (this.password.length == 0) {
        this.msgpassword = "密码不能为空";
      } else if (this.password.length < 5) {
        this.msgpassword = "密码至少6个字符";
      } else {
        this.msgpassword = "";
      }
    },

    hintPhonenumber() {
      var word = this.phonenumber.trim();

      if (word == "") {
        this.msgphonenumbere = "输入手机号";
      } else if (/^1[3|4|5|7|8][0-9]\d{7}$/.test(word)) {
        this.msgphonenumbere = "";
        this.canClick = true;
      } else {
        this.msgphonenumbere = "请输入正的手机号";
        this.canClick = false;
      }
    },

    countDown() {
      if (!this.canClick) return; //改动的是这两行代码

      gitnote(this.phonenumber);
      this.canClick = false;

      this.content = this.totalTime + "s后重新发送";

      let clock = window.setInterval(() => {
        this.totalTime--;

        this.content = this.totalTime + "s后重新发送";

        if (this.totalTime < 0) {
          window.clearInterval(clock);

          this.content = "重新发送验证码";

          this.totalTime = 60;

          this.canClick = true; //这里重新开启
        }
      }, 1000);
    },

    uploading() {
      gitPassword(
        this.loginName,
        this.password,
        this.phonenumber,
        this.code
      ).then(res => {
        if (res.code == 0) {
          this.$notify({
            type: "success",
            message: "修改成功,赶快去登录吧!",
            duration: 3000
          });
          this.$router.replace("/register");
        } else {
          this.$message({
            type: "error",
            message: "再检查一下，还有些问题！"
          });
        }
      });
    }
  },

  watch: {
    password() {
      if (this.recur == this.password) {
        this.msgrecur = "两次密码相同";
      } else {
        this.msgrecur = "两次密码不同,请重新输入";
      }
    },
    recur() {
      if (this.recur == this.password) {
        this.msgrecur = "两次密码相同";
      } else {
        this.msgrecur = "两次密码不同,请重新输入";
      }
    }
  }
};
</script>
<style lang="less">
#subject {
  background-color: #EA3D1D;
}
.box {
  padding-top: 60px;
  padding-left: 5px;
  padding-right: 5px;
  #head {
    width: 150px;
    margin: 5px auto;
    height: 150px;
    .el-upload {
      width: 150px;
      height: 150px;
    }
  }
  .imgs {
    margin: 0 auto;
    width: 287px;
    height: 228px
  }

  .avatar-uploader-icon {
    width: 150px;
    height: 150px;
    visibility: hidden;
  }

  #logon {
    width: 80%;

    margin: 30px 10%;
  }

  .hint {
    font-size: 12px;

    color: red;
  }

  #disabled {
    height: 40px;

    width: 110px;

    padding: 0px;

    margin: 0px;

    color: white;

    border: 1px solid #EA3D1D;

    background-color: #EA3D1D;

    outline: none;

    text-align: center;
  }
  .mint-cell-wrapper {
    margin-top: 15px;
  }
}
</style>

