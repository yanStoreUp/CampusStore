import http from './api'

function shopCarAdd(goodsId) {
    let formdata = new FormData()
    formdata.append('goodsId',`${goodsId}`)
    return http.post('/api/shop/shopShoppingCart/site/add',formdata);
}
function shopCarGoods() {
    return http.get('/api/shop/shopShoppingCart/site/login-user/list');
}
function shopCarDel(ids){
    let formdata = new FormData()
    formdata.append('ids',`${ids}`)
    return http.post('/api/shop/shopShoppingCart/site/remove',formdata);
}
function shopCarChange(id,num){
    return http.get(`/api/shop/shopShoppingCart/site/change/num/${id}/${num}`);
}


export {
    shopCarAdd,
    shopCarGoods,
    shopCarDel,
    shopCarChange
}