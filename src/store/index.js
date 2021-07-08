import { createStore } from 'vuex'

export default createStore({
  state: {
    homeImg:0,
    tabCurrentIndex:0,
    cartlist:[]
  },
  getters:{
  },
  mutations: {
    imgCount(state){
      state.homeImg++
    },
    changeCartlist(state,iid){
      state.cartlist.push(iid)
      console.log(state.cartlist)
    }
  },
  actions: {
  },
  modules: {
  }
})
