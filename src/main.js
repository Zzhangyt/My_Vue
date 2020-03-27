import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
// eslint-disable-next-line no-unused-vars
import Storage from "./assets/js/Storage";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import el from "element-ui/src/locale/lang/el";

Vue.use(ElementUI);


Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  if (!Storage.get('user',true) && to.name !== 'Login') {
    next({path:'/login'})
  }else {
    const loginTime = new Date().getTime()/1000;
    Storage.set('loginTime',parseInt(loginTime),true);
    let startTime = Storage.get('loginTime',true);
    if (!startTime) {
      Storage.set('loginTime',parseInt(loginTime),true);
      next()
    }else {
      next()
    }
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
