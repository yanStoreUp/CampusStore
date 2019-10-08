var path = require('path')
// const htmlWebpackPlugin = require('html-webpack-plugin');
// const VueLoderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    devServer: {
        open: true,
        port: 3000,
        contentBase: './src',
        hot: true,
        proxy: {
            '/api': {
                target: 'http://39.97.33.178',
                changeOrigin: true
            }
        }
    },
    // plugins: [
    //     new htmlWebpackPlugin({
    //         template: path.join(__dirname, './src/index.html'),
    //         filename: 'index.html',
    //     }),
    //     new VueLoderPlugin({})
    // ],
}