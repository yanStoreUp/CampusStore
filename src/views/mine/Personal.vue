<template>

<div>

<mt-header fixed title="个人信息" id="subject"> 

<router-link to="/mine" slot="left">
    <mt-button icon="back">返回</mt-button>
</router-link>

</mt-header>

<div class="box">

<!-- 上传头像 -->
    <el-upload id="head"
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

 <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->


<!-- 账户名字 -->
<p class='name'>我是账户名字</P>

<p class='birthday userName'>我的名字:</P>
<p class='birthday email'>邮箱:</P>
<p class='birthday phonenumber'>联系方式</P>
<p class='birthday sex'>性别</P>
<p class='birthday remark'>备注</P>








</div>

</div>


</template>


<script>
export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style lang="less">
#subject {
    background-color: #EA5F5A;
}


.box {
    margin-top:80px;
    #head {
    width: 200px;
    margin: 0 auto;
    height: 200px;
    }
    .birthday {
    margin: 20px 20px;
    border-bottom: 1px solid #EFEFEF;
    padding: 10px;
    }  
    .userName {
    margin-top:70px;
    }
 
  .el-upload__input {
    visibility: hidden;
  }
  .mint-button--large {
    width: 80%;
    margin: 10px auto;
  }
  .el-upload {
  height: 200px;
  }
};


.avatar-uploader .el-upload {
    border-radius: 50%;
    border: 1px dashed #d9d9d9;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
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
    text-decoration:none; 
    color:#333; 
  } 

</style>