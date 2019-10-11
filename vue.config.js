module.exports = {
    devServer: {
        open: true,
        port: 8080,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://59.111.92.205:8088',
                changeOrgin: true
            }
        },proxy: {
            '/api': {
                target: 'http://39.97.33.178',
                changeOrgin: true
            }
        }
    }
}