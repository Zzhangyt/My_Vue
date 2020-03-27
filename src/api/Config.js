let Config = {
  baseUrl:''
};
if (process.env.NODE_ENV === 'development') {
  let _url  = '//wenzhou.dev.enesource.com';
  Config.baseUrl = _url + '/workflow'
}else if (process.env.NODE_ENV === 'developmentDev') {
  let _url  = 'http://122.228.156.194:8081/backend';
  Config.baseUrl = _url + '/wenzhou'
}else if (process.env.NODE_ENV === 'developmentTest') {
  let _url  = '//wenzhou.dev.enesource.com';
  Config.baseUrl = _url + '/wenzhou'
}else if (process.env.NODE_ENV === 'release'){
  let _url  = '';
  Config.baseUrl = _url + ''
}
export default Config
