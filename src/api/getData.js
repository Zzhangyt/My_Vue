import axios from 'axios'
import Config from './Config'
// import * as http from "node/http";
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
},function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
},function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
});
export default function fetch(options) {
  options = options || {};
  return new Promise((resolve, reject) => {
    axios({
      method: options.method || 'get',
      url: options.url,
      baseURL:options.baseUrl || Config.baseUrl,
      header: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "POST,GET",
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Expose-Headers': 'Authorization',
      },
      //`params`选项是要随请求一起发送的请求参数----一般链接在URL后面
      //他的类型必须是一个纯对象或者是URLSearchParams对象
      params: options.data,
      // //`paramsSerializer`是一个可选的函数，起作用是让参数（params）序列化
      // //例如(https://www.npmjs.com/package/qs,http://api.jquery.com/jquery.param)
      // eslint-disable-next-line no-unused-vars
      paramsSerializer: function (params) {

      },
      //`data`选项是作为一个请求体而需要被发送的数据
      //该选项只适用于方法：`put/post/patch`
      //当没有设置`transformRequest`选项时dada必须是以下几种类型之一
      //string/plain/object/ArrayBuffer/ArrayBufferView/URLSearchParams
      //仅仅浏览器：FormData/File/Bold
      //仅node:Stream
      data: options.data,
      // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
      transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data;
      }],
      timeout:2000,
      // `withCredentials` 表示跨域请求时是否需要使用凭证
      withCredentials: false, // 默认的
      // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
      responseType: 'json', // 默认的
      // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
      xsrfCookieName: 'XSRF-TOKEN', // default
      // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
      xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的
      // `onUploadProgress` 允许为上传处理进度事件
      // eslint-disable-next-line no-unused-vars
      onUploadProgress: function (progressEvent) {
        // 对原生进度事件的处理
        // console.log(progressEvent);
      },
      // `onDownloadProgress` 允许为下载处理进度事件
      // eslint-disable-next-line no-unused-vars
      onDownloadProgress: function (progressEvent) {
        // 对原生进度事件的处理
        // console.log(progressEvent);
      },
      // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
      // `keepAlive` 默认没有启用
      // eslint-disable-next-line no-undef
      // httpAgent: new http.Agent({ keepAlive: false }),
      // eslint-disable-next-line no-undef
      // httpsAgent: new http.Agent({ keepAlive: false }),
      // `maxContentLength` 定义允许的响应内容的最大尺寸
      maxContentLength: 2000,
    }).then(response => {
      if (response.data) {
        resolve(response.data)
      }else {
        resolve(response)
      }

    }).catch(error => {
      this.$message.info('请求超时');
      reject(error)
    })
  })
}
