// 我的

import http from './api'

// 获取二手商品
function getOldGoodsList() {
   return http.post('/api/shop/shopGoods/open/used/list');
}


// 获取商品列表
function getManyGoodsList(){
    return http.post('/api/shop/shopGoods/open/list')
}

// 获取轮播图列表
function getShufflingList(){
    return http.get('/api/shop/shopGoods/open/banner/list')
}

// 推荐商品列表
function getRecommendGoodsList(){
    return http.post('/api/shop/shopGoods/open/recommend/list')
}

// 搜索关键字(根据关键字在后台调数据) 
function getSearchResultList(name){
    let formdata=new FormData()
    formdata.append('name',`${name}`)
    return http.post('/api/shop/shopGoods/open/list',formdata)
}


// 搜索发现列表
function getSearchFoundListList(){
    return http.get('/api/shop/shopGoods/open/banner/list')
}


export {
    getOldGoodsList,
    getManyGoodsList,
    getShufflingList,
    getRecommendGoodsList,
    getSearchResultList,
    getSearchFoundListList
}