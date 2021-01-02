module.exports = {
    publicPath: '/internal/',
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
        } else {
        }
    }
}
