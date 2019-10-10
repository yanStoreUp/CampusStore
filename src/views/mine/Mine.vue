<template>

<div>
<mt-header fixed title="我的" id="subject">

<router-link to="/" slot="left">
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

<!-- 历史订单 -->
<p class='history Htop'>
<router-link to="/order"><el-link type="primary">历史订单</el-link></router-link>
</p>
<!-- 个人信息 -->
<p class='history'>
<router-link to="/personal"><el-link type="success">个人信息</el-link></router-link>
</p>
<!-- 注销 -->
<p class='history Hbut'>
<router-link to="/register"><mt-button type="danger" class="logon">注销</mt-button></router-link>
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
// body {
//     background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570619519934&di=951ac4c170dfe05b759e99b3fb501608&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201409%2F14%2F20140914005104_TsBrF.jpeg")
// }
#subject {
    background-color: #EA5F5A;
}


.box {
    margin-top:70px;
    #head {
    width: 200px;
    margin: 0 auto;
    height: 200px;
  }
  .name {
    width: 100px;
    height: 30px;
    margin: 15px auto;
    font-size: 16px;
  }
  .history {
    margin: 20px 20px;
    border-bottom: 1px solid #EFEFEF;
    padding: 10px;
  }
  .Htop {
      margin-top:100px;
  }

  .logon {
    width: 80%;
    margin: 10px 10%;
  }
  .Hbut {
      border: none;
      margin-top:60px;
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
