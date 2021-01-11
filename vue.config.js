const path = require('path'); //引入path模块

function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'release' ? './' : '/',
  outputDir: 'build',//打包后的目录名称
  assetsDir: '',//定义静态资源文件目录
  indexPath: 'index.html',//打包后的主文件名称
  filenameHashing: false,//生成的静态资源在它们的文件名中是否包含了hash,false为关闭文件名哈希
  runtimeCompiler: true,//是否可以在 Vue 组件中使用 template 选项；（true会让应用额外增加 10kb 左右）
  pages: {
    index: {
      entry: 'src/main.js',// page 的入口
      template: 'public/index.html',// 模板来源
      filename: 'index.html',// 在 dist/index.html 的输出
      title: 'Index Page', // 当使用 title 选项时， （template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>）
      chunks: ['chunk-vendors', 'chunk-common', 'index']// 在这个页面中包含的块，默认情况下会包含，提取出来的通用 chunk 和 vendor chunk。
    }
  },
  lintOnSave: 'error',//是否在开发环境下通过eslint-loader在每次保存时lint代码。（设置为 true，warning时 错误会编译成警告，error时lint输出为编译错误，导致编译失败。）
  transpileDependencies: [],//默认忽略所有node_modules中的文件。  选项中列出来可以通过Babel显式转义一个依赖。
  productionSourceMap: true,//是否需要生产环境的source map，false可以加速生产环境构建，默认true。
  crossorigin: undefined,//设置Link和script标签的crossorigin属性。 默认undefined。（该枚举属性指定在加载相关图片时是否必须使用CORS，不设置将不使用CORS加载）
  integrity: false,//是否在link和script标签上启用Subresource Integrity（SRI）
  devServer: {
    port:4000,
    proxy: {
      '/': {
        target: 'http://localhost:7777',
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    },//可以是一个指向开发环境 API 服务器的字符串，开发环境下将 API 请求代理到 API 服务器的配置。
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')); // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  css: {
    requireModuleExtension: true,//设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    //extract:'',//是否将组件中的 CSS 提取至一个独立的 CSS 文件中（ 生产环境下是 true，开发环境下是 false）
    loaderOptions: {    //向 CSS 相关的 loader 传递选项
      css: {},
      scss: {},
      sass: {}
    }
  }
};
