let Config = {
  baseUrl:''
};
if (process.env.NODE_ENV === 'development') {
  let _url  = '//localhost:4000';
  Config.baseUrl = _url + '/api/v1'
}else if (process.env.NODE_ENV === 'developmentDev') {
  let _url  = 'http://122.228.156.194:8081/backend';
  Config.baseUrl = _url + '/wenzhou'
}else if (process.env.NODE_ENV === 'developmentTest') {
  let _url  = '//wenzhou.dev.enesource.com';
  Config.baseUrl = _url + '/wenzhou'
}else if (process.env.NODE_ENV === 'release'){
  let _url  = '//60.205.170.107';
  Config.baseUrl = _url + '/api/v1'
}else {
  let _url  = '//60.205.170.107';
  Config.baseUrl = _url + '/api/v1'
}
export default Config;
