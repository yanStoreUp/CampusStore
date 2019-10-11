import http from './api'

function shopCarAdd(goodsId) {
    let formdata = new FormData()
    formdata.append('goodsId',`${goodsId}`)
    return http.post('/api/shop/shopShoppingCart/site/add',formdata);
}


export {
    shopCarAdd
}