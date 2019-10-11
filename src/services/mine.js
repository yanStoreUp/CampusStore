// 我的

import http from './api'

// 登录
function gitEnter(username,rememberMe,password) {

    let formdata = new FormData() 
    formdata.append('username',`${username}`)
    formdata.append('rememberMe',true)
    formdata.append('password',`${password}`)
    http.post('/api/cityList',formdata);
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
    http.post('/api/registry',formdata)
}



export {
    gitEnter,
    gitnote,
    gitRegiste,

}