import fetch from "./getData";
import Config from "./Config";
import Storage from "../assets/js/Storage";
const Api = {
  getList(params) {
    beforeHttp(params);
    params.baseUrl = Config.baseUrl;
    params.url = '/user/baseload';
    return fetch(params)
  }
};
// eslint-disable-next-line no-unused-vars
function beforeHttp(params) {
  if(params.data instanceof FormData){
    return
  }
  params.data = params.data || {}
  let userObj = Storage.get("user", true) || {};
  if (params && params.data) {
    params.data = Object.assign({
      companyId: userObj.companyId,
      token: userObj.token,
      userId: userObj.userId,
      accountId: userObj.accountId
    }, params.data);
    if (!params.data.timestamp) {
      let timestamp = new Date().getTime();
      Object.assign(params.data, {timestamp: timestamp})
    }
  }
}

export default Api
