<template>
  <div>
    <mt-header fixed title="个人信息" id="subject">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="box">
      <!-- 上传头像 -->
      <el-upload
        id="head"
        class="avatar-uploader"
        action="/api/system/user/profile/update/avatar/nos"        
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        name="avatarfile"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon" id="heads"></i>
      </el-upload>

      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->

      <!-- 账户名字 -->
      <p class="birthday loginName">
        <span class="left">登录账户:</span>
        <span class="matter">{{ msgloginName }}</span>
      </p>
      <p class="birthday userName">
        <span class="left">昵称:</span>
        <span class="matter">{{ msguserName }}</span>
      </p>
      <p class="birthday email">
        <span class="left">邮箱</span>
        <span class="matter">{{ msgemail }}</span>
      </p>
      <p class="birthday phonenumber">
        <span class="left">电话号码</span>
        <span class="matter">{{ msgphonenumber }}</span>
      </p>
      <p class="birthday sex">
        <span class="left">性别</span>
        <span class="matter">{{ msgsex }}</span>
      </p>
      <p class="birthday remark">
        <span class="left">个性签名</span>
        <span class="matter">{{ msgremark }}</span>
      </p>
      <router-link to="/change">
      <mt-button type="primary" id="logon">修改信息</mt-button>
      </router-link>
    
    </div>
  </div>
</template>


<script>
import { gitExamine } from "@/services/mine.js";

export default {
  data() {
    return {
      imageUrl: "",
      msgloginName: "",
      msguserName: "",
      msgemail: "",
      msgphonenumber: "",
      msgsex: "",
      msgremark: "",
      msgavatar: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, avatarfile) {
      this.imageUrl = URL.createObjectURL(avatarfile.raw);
    },
    beforeAvatarUpload(avatarfile) {
    
      const isJPG = avatarfile.type === "image/jpeg";
      const isLt2M = avatarfile.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;   
    },

  },



  beforeMount() {
    
    gitExamine().then(res => {
      this.msgloginName = res.data.loginName;
      this.msguserName = res.data.userName;
      this.msgemail = res.data.email;
      this.msgphonenumber = res.data.phonenumber;
      this.msgloginName = res.data.loginName;
      this.msgremark = res.data.remark;
      this.imageUrl = res.data.avatar;
    });
  }
};
</script>
<style lang="less">
#subject {
  background-color: #EA3D1D;
}
.box {
  margin-top: 60px;
  #head {
    width: 150px;
    margin: 30px auto;
    height: 150px;
  }
  .birthday {
    margin: 20px 20px;
    border-bottom: 1px solid #efefef;
    padding: 10px;
  }
  .left {
    width: 35%;
    display: inline-block;
  }
  .matter {
    width: 65%;
    display: inline-block;
  }

  .el-upload__input {
    visibility: hidden;
  }
  .mint-button--large {
    width: 80%;
    margin: 10px auto;
  }
}

.avatar-uploader .el-upload {
  border-radius: 50%;
  border: 1px dashed #d9d9d9;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
a {
  text-decoration: none;
  color: #333;
}
</style>