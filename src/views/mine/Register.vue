<template>
<div>
<mt-header fixed title="登录" id="subject">

<router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
</router-link>
</mt-header>

<div class="box">


    <div class="logo">这是logo的地方</div>
    <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="user.pass" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
            </el-form-item>

            <router-link to="/enroll"><mt-button type="default" id="logon">重新注册</mt-button></router-link>


        </el-form>
    </el-row>
    </div>
    </div>
    
</template>

<script>
    export default {
        methods: {
            login () {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        if (this.user.name === 'admin' && this.user.pass === '123') {
                            this.$notify({
                                type: 'success',
                                message: '欢迎你,' + this.user.name + '!',
                                duration: 3000 
                            })
                            this.$router.replace('/')
                        } else {
                            this.$message({
                                type: 'error',
                                message: '用户名或密码错误',
                                showClose: true
                            })
                        }
                    }
                    else {
                        return false
                    }
                })
            }
        },
        data () {
            return {
                user: {},
                rules: {
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            }
        }
    }
</script>
 

<style lang="less" >
#subject {
    background-color: #EA5F5A;
}

.box {
    margin-top:40px; 
    .logo {
      width: 200px;
      height: 200px;
      background-color: red;
      margin: 20px auto;
    }
    #logon {
      width: 80%;
      margin: 30px 10%;
    }
  }
</style>