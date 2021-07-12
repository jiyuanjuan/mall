import { createStore } from 'vuex'

export default createStore({
  state: {
    homeImg: 0,
    tabCurrentIndex: 0,
    cartlist: []
  },
  getters: {
  },
  mutations: {
    imgCount(state) {
      state.homeImg++
    },
    changeCartlist(state, iid) {
      if (state.cartlist.length != 0) {
        let add = true;
        for (let i of state.cartlist) {
          if (i[0] === iid) {
            i[1] = i[1] + 1;
            add = false
          } 
        }
        if(add){state.cartlist.push([iid, 1])}
      } else {
        state.cartlist.push([iid, 1])
      }
    }
  },
  actions: {
  },
  modules: {
  }
})