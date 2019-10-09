module.exports = {
    devServer: {
        open: true,
        port: 8080,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://39.97.33.178',
                changeOrgin: true
            }
        }
    }
}