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
function gitPerson(userName,email,phonenumber,sex,remark) {

    let formdata=new FormData()
    formdata.append('email',`${email}`)
    formdata.append('userName',`${userName}`)
    formdata.append('phonenumber',`${phonenumber}`)
    formdata.append('sex',`${sex}`)
    formdata.append('remark',`${remark}`)
    return http.post('/api/system/user/profile/update/',formdata)
       
}

// 查看个人信息 
function gitExamine () {
    return http.get('/api/login-user/info')
}

// 忘记密码 
function gitPassword(loginName,password,phonenumber,code){
    let formdata = new FormData()
    formdata.append('loginName',loginName)
    formdata.append('password',password)
    formdata.append('phonenumber',phonenumber)
    formdata.append('code',code)
    formdata.append("rememberMe",true)
   return http.post('/api/password/forget',formdata)
}

// 修改头像
function gitavatar(avatarfile){
    let formdate=new FormData()
    formdate.append('avatarfile',`${avatarfile}`)
     return http.post('/api/system/user/profile/update/avatar/nos',formdate)
}

// 注销
function gitLogout () {
    return http.get('/api/logout')
}

// 订单列表
function gitOrder () {
    return http.post('/api/shop/shopOrder/site/login-user/list')
}


export {
    gitEnter,
    gitnote,
    gitRegiste,
    gitExamine,
    gitPerson,
    gitPassword,
    gitavatar,
    gitLogout,
    gitOrder,
}