import http from './api'

function sort() {
    return http.get('/api/cityList');
}

export {
    sort
}