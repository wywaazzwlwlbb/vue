
module.exports = {
    publicPath: './',
    devServer: {
        host: '0.0.0.0',//设置外部可以访问自己的服务器
        port: 8080,
        https: false,
        hotOnly: true,//在没有页面刷新的情况下启用热模块替换（请参阅）作为构建失败时的后备
        disableHostCheck: true,//设置true为此选项时会绕过主机检查。不建议这样做，因为不检查主机的应用程序容易受到DNS重新绑定攻击。
        proxy: {  //axios.get("http://localhost:3000/position/find")
            '/api': {
                target: "http://api.zhuishushenqi.com/",
                changeOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/test': {
                target: "http://chapterup.zhuishushenqi.com",
                changeOrigin: true,//允许跨域
                pathRewrite: {
                    '^/test': ''
                }
            },
        }
    }
}