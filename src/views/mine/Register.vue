<script src="../../services/api.js"></script>
<template>
  <div>
    <mt-header fixed title="登录" id="subject">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="box">
      <div class="logo"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1543566503,4176103758&fm=26&gp=0.jpg" alt=""></div>
      <el-row type="flex" justify="center" class="boxs">
        <el-form ref="loginForm" :model="user" status-icon label-width="80px">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input v-model="password" type="password"></el-input>
          </el-form-item>
          <div class="boxx">
            <el-button class="forget" type="primary" icon="el-icon-upload" @click="login">登录</el-button>
          
          
          <router-link to="/memory">
          <mt-button type="default" class="forget" size="small">忘记密码</mt-button>
          </router-link>
          <router-link to="/enroll">
          <mt-button type="default" class="forget" size="small">马上注册</mt-button>
          </router-link>
          </div>
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
import { gitEnter } from "@/services/mine.js";

export default {
  methods: {
    login() {
      gitEnter(this.username, this.password).then(res => {

        if (res.code == 0) {
          this.$notify({
            type: "success",
            message: "欢迎你," + this.username + "!",
            duration: 3000
          });
          this.$router.replace("/mine");
        } else {
          this.$message({
            type: "error",
            message: "用户名或密码错误"
          });
        }
      });
    }
  },

  data() {
    return {
      username: "",
      password: "",
      user: {}
    };
  }
};
</script>
 

<style lang="less" >
#subject {
  background-color: #EA3D1D;
}

.box {
  padding-top: 40px;
  .logo {
    width: 200px;
    height: 200px;
    margin: 20px auto;
    
    img {
      width: 200px;
      height: 200px;
    }
  }
  .forget {
    width: 80%;
    margin: 10px 10%;
    padding: 9px 15px; 
    font-size: 12px;
  }
  .boxs {
      margin: 50px 0px 0px ;
  }
  .boxx {
      margin-top: 50px;
  }
  .el-form-item__label {
    text-align: left;
  }
  .el-form-item__content {
      margin-left: 0px; 
  }
}
</style>