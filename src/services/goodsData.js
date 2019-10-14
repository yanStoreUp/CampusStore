import http from './api'

function goodsData() {
    return http.post('/api/shop/shopGoods/open/list');
}
function goodsDatail(goodsId) {
    return http.get(`/api/shop/shopGoods/open/detail/${goodsId}`);
}


export {
    goodsData,
    goodsDatail
}