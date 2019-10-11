import http from './api'

function goodsData() {
    return http.post('/api/shop/shopGoods/open/list');
}


export {
    goodsData
}