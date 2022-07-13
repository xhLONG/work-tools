const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        //不设置 重写  http://wkt.myhope365.com/weChat
        //设置重写   http://wkt.myhope365.com
        proxy: {
            '/test-api': {         //代理名称,这里最好有一个
                target: 'https://api.ixiaowai.cn',  // 后台接口域名
                changeOrigin: true,  //是否跨域
                pathRewrite:{
                    '^/test-api':''//路径重写
                }
            }
        }
    }
})
