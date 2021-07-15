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
    <cart-list :buyList="buyList"></cart-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "../cart/childComps/CartList";

import { onBeforeUpdate, onMounted, onUpdated, ref } from "vue";
import { useStore } from "vuex";
import { getCart } from "network/cart";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
  },
  setup() {
    const store = useStore();
    const cart = ref([]);
    const buyList = ref([]);
    onMounted(() => {
      cart.value = store.state.cartlist;
      Promise.all(
        cart.value.map((e) => {
          return getCart(e[0]);
        })
      ).then((res) => {
        buyList.value.push(res);
      });
    });
    onBeforeUpdate(() => {
      buyList.value = [];
    });
    onUpdated(() => {
      cart.value = store.state.cartlist;
      Promise.all(
        cart.value.map((e) => {
          return getCart(e[0]);
        })
      ).then((res) => {
        buyList.value.push(res);
      });
    });
    return {
      cart,
      buyList,
    };
  },
};
</script>

<style scope lang='scss'>
</style>

