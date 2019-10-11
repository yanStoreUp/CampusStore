// 我的

import http from './api'

// 登录
function gitEnter(username,password) {

    let formdata = new FormData() 
    formdata.append('username',`${username}`)
    formdata.append('rememberMe',true)
    formdata.append('password',`${password}`)
   return http.post('/api/login',formdata);
}

// 短信验证
function gitnote(mobile) {
    return http.get(`/api/short-message/vcode/${mobile}`)
}


// 注册 
function gitRegiste(loginName,password,userName,phonenumber,code){
    let formdata=new FormData()
    formdata.append('loginName',`${loginName}`)
    formdata.append('password',`${password}`)
    formdata.append('userName',`${userName}`)
    formdata.append('phonenumber',`${phonenumber}`)
    formdata.append('code',`${code}`)
    return http.post('/api/registry',formdata)
}




// 修改个人信息
function gitPerson() {
    return http.post('/api/system/user/profile/update/')
       
}

// 查看个人信息 
function gitExamine () {
    return http.get('/api/login-user/info')
}


export {
    gitEnter,
    gitnote,
    gitRegiste,
    gitExamine,
    gitPerson,

}