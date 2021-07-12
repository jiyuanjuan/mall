<template>
  <div id="cart">
    <nav-bar>
      <template v-slot:left>
        <div></div>
      </template>
      <template v-slot:center>
        <div>购物车</div>
      </template>
      <template v-slot:right>
        <div></div>
      </template>
    </nav-bar>
    <cart-list></cart-list>
    {{ cart }}
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "../cart/childComps/CartList";

import { onMounted, ref } from "vue";
import { useStore } from "vuex";
// import { getCart } from "network/cart";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
  },
  setup() {
    const store = useStore();
    const cart = ref([]);
    onMounted(() => {
      cart.value = store.state.cartlist;
      console.log(cart.value)
      // cart.value.forEach((e) => {
      //   getCart(e[0]).then((res) => {
      //     console.log(res);
      //   });
      // });
    });
    return {
      cart,
    };
  },
};
</script>

<style scope lang='scss'>
</style>

