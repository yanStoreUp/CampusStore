// 我的

import http from './api'

// 获取二手商品
function getOldGoodsList() {
   return http.post('/api/shop/shopGoods/open/used/list');
}

// 短信验证
// function gitnote(mobile) {
//     return http.get(`/api/short-message/vcode/${mobile}`)
// }


// 获取商品列表
function getManyGoodsList(){
    return http.post('/api/shop/shopGoods/open/list')
}

// 获取轮播图列表
function getShufflingList(){
    return http.get('/api/shop/shopGoods/open/banner/list')
}

export {
    getOldGoodsList,
    getManyGoodsList,
    getShufflingList,
}