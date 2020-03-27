const path = require('path'); //引入path模块

function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  devServer: {
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')); // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  css: {
    loaderOptions: {
      css:{},
      scss:{},
      sass: {}
    }
  }
};
