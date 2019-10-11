import http from './api'

function sort() {
    return http.post('/api/shop/shopCategory/open/list');
}
function sortArr() {
    return http.post('/api/shop/shopGoods/open/list');
}

export default{
    sort,
    sortArr
}