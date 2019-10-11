module.exports = {
    devServer: {
        open: true,
        port: 8088,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://59.111.92.205:8088',
                changeOrgin: true
            }
        },
    }
}