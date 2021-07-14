import { createStore } from 'vuex'
import  mutations  from './mutations'

const state = {
  homeImg: 0,
  tabCurrentIndex: 0,
  cartlist: []
}

export default createStore({
  state,
  getters: {
  },
  mutations,
  actions: {
  },
  modules: {
  }
})