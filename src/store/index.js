import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 100,
    value:0
  },
  mutations: {
    //操作count+
    add(state,n){
      console.log(state,n);
      return (state.count += n)
    },
    //操作count-
    reduce(state,n){
      return (state.count -= n)
    },
    //把count的值赋给value（变量的存储）
    save(state,val){
      state.value = val
    }
  },
  actions: {
  },
  modules: {
  }
})
