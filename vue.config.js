const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',    // 启动页地址
  outputDir: 'dist', // 打包的目录
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint校验
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '192.168.28.50',
    port: 8081, // 服务端口
    https: false,
    proxy: null, // 设置代理
    // 如果需要代理，如下写法
    // proxy:{
    //   "/myDouyu":{//设置自己的请求地址
    //     target:'https://m.douyu.com/api/room/list',//目标服务器路径
    //     changeOrigin:true,
    //     pathRewrite:{
    //       "^/myDouyu":''
    //     }
    //   }
    // },
  }
})
