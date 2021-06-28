import { createStore } from 'vuex'

export default createStore({
  state: {
    count:1
  },
  getters:{
    sum2(state){
      return state.count * state.count
    },
    sum3(state,getters){
      return getters.sum2 * state.count
    },
    sum4(state,getters){
      return (num) => {
        return getters.sum2 * state.count * num
      }
    }
  },
  mutations: {
    add(state,num){
      state.count += num
    }
  },
  actions: {
    haha(context){
      console.log(context)
    }
  },
  modules: {
    a:{
      state:{
        data:1
      },
      getters:{
        getData(state,getters){
          console.log(state,getters)
        }
      },
      mutations:{
        actionMut(state){
          console.log(state)
        }
      },
      actions:{
        actionAct(context){
          console.log(context)
        }
      }
    }
  }
})
