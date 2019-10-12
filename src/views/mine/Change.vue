<template>
  <div>
    <mt-header fixed title="修改信息" id="subject">
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

      <p class="birthday userName">
        <span class="left">昵称:</span>
        <span class="matter"><span class="original">原:</span>{{ msguserName }}</span>
        <el-input v-model="userName" placeholder="修改你的昵称" class="inputs" ></el-input>

      </p>
      <p class="birthday email">
        <span class="left">邮箱</span>
        <span class="matter"><span class="original">原:</span>{{ msgemail }}</span>
        <el-input v-model="email" placeholder="修改你的邮箱" class="inputs" ></el-input>

      </p>
      <p class="birthday phonenumber">
        <span class="left">电话号码</span>
        <span class="matter"><span class="original">原:</span>{{ msgphonenumber }}</span>
        <el-input v-model="phonenumber" placeholder="修改你的电话号码" class="inputs" ></el-input>

      </p>
      <p class="birthday sex">
        <span class="left">性别</span>
        <span class="matter"><span class="original">原:</span>{{ msgsex }}</span>
        <el-input v-model="sex" placeholder="修改你的性别" class="inputs" ></el-input>

      </p>
      <p class="birthday remark">
        <span class="left">个性签名</span>
        <span class="matter"><span class="original">原:</span>{{ msgremark }}</span>
        <el-input v-model="remark" placeholder="个性签名" class="inputs" ></el-input>
        
      </p>
      <router-link to="/change">
      <mt-button type="primary" id="logon" @click.native.capture="submits()">修改信息</mt-button>
      </router-link>
    
    </div>
  </div>
</template>


<script>
import { gitExamine,gitPerson,gitavatar} from "@/services/mine.js";

export default {
  data() {
    return {
      imageUrl: "",
      msguserName: "",
      msgemail: "",
      msgphonenumber: "",
      msgsex: "",
      msgremark: "",
      userName: "",
      email: "",
      phonenumber: "",
      sex: "",
      remark: "",
      avatar: "",
      
      
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
   

    submits() {
    gitPerson(this.userName,this.email,this.phonenumber,this.sex,this.remark).then(res => {
      if (res.code == 0) {
              this.$notify({
              type: 'success',
              message: '操作成功!',
              duration: 3000 
          })
          this.$router.replace('/personal')                              
      } else {
          this.$message({
          type: 'error',
          message: '修改失败！',
        })  
      }
    })
  
},
  },
  beforeMount() {
    gitExamine().then(res => {
      this.msguserName = res.data.userName;
      this.msgemail = res.data.email;
      this.msgphonenumber = res.data.phonenumber;
      this.msgmsgsex = res.data.msgsex;   
      this.msgremark = res.data.remark;
      this.imageUrl = res.data.avatar;
    })
  }
}
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
    width: 26%;
    display: inline-block;
  }
  .matter {
    width: 74%;
    display: inline-block;
    .original {
    margin-right: 10px;
  }
  }
  

  .el-upload__input {
    visibility: hidden;
  }
  .mint-button--large {
    width: 80%;
    margin: 10px auto;
  }
  .inputs {
    margin-top: 10px;
    width: 65%;
    margin-left: 25%;
    margin-right: 10%
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
  width: 150px !important; 
  height: auto;
  display: block;
}
a {
  text-decoration: none;
  color: #333;
}
</style>