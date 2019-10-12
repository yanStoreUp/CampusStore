<template>
    <div>
        <mt-header fixed title="注册" id="subject">

            <router-link to="/mine" slot="left">

                <mt-button icon="back">返回</mt-button>

            </router-link>


        </mt-header>

        <div class="box">


    <div id="imgs">

<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570869988818&di=33331d50bb607b91bd300857776b8f2b&imgtype=0&src=http%3A%2F%2Fimgnews.mumayi.com%2Ffile%2F2019%2F05%2F27%2F855173339c3a4158ba6839171720d76e.jpg" alt="">

    </div>




            <mt-field label="登录账户" placeholder="请输入登录账户" v-model="loginName" @keydown.native.capture="hintName()">

                <span class="hint">{{msgloginName}}</span>

            </mt-field>


            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" @keydown.native.capture="hintPassword()">

                <span class="hint">{{msgpassword}}</span>

            </mt-field>

            <mt-field label="再输入密码" placeholder="请再次输入密码" type="password" v-model="recur">

                <span class="hint">{{msgrecur}}</span>

            </mt-field>


            <mt-field label="昵称" placeholder="请输入昵称" v-model="userName">

            </mt-field>


            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phonenumber"
                      @keydown.native.capture="hintPhonenumber()">

                <span class="hint">{{msgphonenumbere}}</span>

            </mt-field>


            <mt-field label="验证码" placeholder="请输入验证码" v-model="captcha">


                <button class="{disabled: !this.canClick}" id="disabled" @click="countDown">

                    {{content}}

                </button>


            </mt-field>


            <mt-field label="个性签名" placeholder="个性签名" v-model="code"></mt-field>


            <mt-button type="primary" id="logon" @click="uploading">点击注册</mt-button>


        </div>


    </div>
</template>


<script>
    import {gitnote,gitRegiste} from '@/services/mine.js'

    export default {

        data() {

            return {

                content: '发送验证码',

                totalTime: 60,

                canClick: false, //添加canClick

                loginName: '',

                password: '',

                userName: '',

                phonenumber: '',

                captcha: '',

                code: '',

                msgloginName: '',

                msgpassword: '',

                msgphonenumbere: '',
                recur: '',
                msgrecur: '',

            }

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

                if (word == '') {

                    this.msgphonenumbere = '输入手机号'

                } else if (/^1[3|4|5|7|8][0-9]\d{7}$/.test(word)) {

                    this.msgphonenumbere = '';
                    this.canClick = true;
                } else {

                    this.msgphonenumbere = '请输入正的手机号';
                    this.canClick = false;


                }

            },


            countDown() {


                if (!this.canClick) return ;//改动的是这两行代码

                gitnote(this.phonenumber)
                this.canClick = false;

                this.content = this.totalTime + 's后重新发送';

                let clock = window.setInterval(() => {

                    this.totalTime--;

                    this.content = this.totalTime + 's后重新发送';

                    if (this.totalTime < 0) {

                        window.clearInterval(clock);

                        this.content = '重新发送验证码';

                        this.totalTime = 60;

                        this.canClick = true; //这里重新开启

                    }

                }, 1000)


            },

            uploading() {
                
                gitRegiste(this.loginName,this.password,this.userName,this.phonenumber,this.captcha).then(res => {
                        if (res.code == 0) {
                                this.$notify({
                                type: 'success',
                                message: '注册成功!',
                                duration: 3000 
                            })
                            this.$router.replace('/register')                              
                        } else {
                             this.$message({
                                type: 'error',
                                message: '再检查一下，还有些问题！',
                            })  
                        }
               })


        },

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

        },

    }
</script>
<style lang="less">
    #subject {
        background-color: #EA3D1D;
    }
    .box {
        margin-top: 50px;
        padding-left: 5px;
        padding-right: 5px;
        #imgs {
            width: 278px;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
        #logon {

            width: 80%;

            margin: 0px 10%
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