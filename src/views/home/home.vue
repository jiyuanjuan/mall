<template>
  <div>
    <div>home</div>
    <div>{{ $store.state.count }}</div>
    <div>{{ $route.path }}</div>
    <button @click="add1">+</button>
    <button>-</button>
    <div>--------getters</div>
    <div>{{ $store.getters.sum2 }}</div>
    <div>{{ $store.getters.sum3 }}</div>
    <div>{{ $store.getters.sum4(2) }}</div>
    <div>--------vuex.state</div>
    <cart></cart>
  </div>
</template>

<script>
import cart from "../cart/cart";
export default {
  name: "home",
  components: {
    cart,
  },
  methods: {
    add1() {
      this.$store.commit("add", 3);
    },
  },
};
</script>

<style scope lang='scss'>
</style>