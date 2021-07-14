import {IMG_COUNT, CHANGE_CARTLIST} from "./mutation-types"

export default  {
  [IMG_COUNT](state) {
      state.homeImg++
    },
    [CHANGE_CARTLIST](state, iid) {
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
  }