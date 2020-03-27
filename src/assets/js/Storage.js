/**
 * 本地存储扩展
 */
let Storage = {
  AUTH: 'FLV-AUTH',
  ACCOUNT: 'FLV-ACCOUNT',
  REMEMBER: 'FLV-REMEMBER',
  LOGIN_HISTORY: 'LH',
  AREA: 'FLV-AREA',
  get: function(key, isSession) {
    if (!this.isLocalStorage()) {
      return;
    }
    var value = this.getStorage(isSession).getItem(key);
    if (value && value != 'undefined') {
      return JSON.parse(value);
    } else {
      return undefined;
    }
  },
  set: function(key, value, isSession) {
    if (!this.isLocalStorage()) {
      return;
    }
    value = JSON.stringify(value);
    this.getStorage(isSession).setItem(key, value);
  },
  remove: function(key, isSession) {
    if (!this.isLocalStorage()) {
      return;
    }
    this.getStorage(isSession).removeItem(key);
  },
  getStorage: function(isSession) {
    return isSession ? sessionStorage : localStorage;
  },
  isLocalStorage: function() {
    try {
      if (!window.localStorage) {
        // eslint-disable-next-line no-undef
        log('不支持本地存储');
        return false;
      }
      localStorage.setItem('FORTEST', 1); //试探可否成功写入
      return true;
    } catch (e) {
      // eslint-disable-next-line no-undef
      log('本地存储已关闭');
      return false;
    }
  }
};

window.Storage = Storage;

export default Storage
