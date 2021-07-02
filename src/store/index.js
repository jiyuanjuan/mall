import { createStore } from 'vuex'

export default createStore({
  state: {
    homeImg:0
  },
  getters:{
  },
  mutations: {
    imgCount(state){
      state.homeImg++
    }
  },
  actions: {
  },
  modules: {
  }
})
