<template>
  <div>{{cart}}</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import {useStore} from "vuex"
export default {
  name: "Cart",
  setup(){
    const store = useStore();
    const cart = ref([]);
    onMounted(()=>{
      cart.value = store.state.cartlist;
      console.log(1)
      console.log(store.state.cartlist)
    })
    return{
      cart
    }
  }
};
</script>

<style scope lang='scss'>
</style>