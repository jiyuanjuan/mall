<template>
  <div id="cart-list">
    <div v-if="buyList">
      <div v-for="item in buyList" :key="item">
        <cart-list-item
          v-for="item2 in item"
          :key="item2"
          :getList="item2.data.result"
        ></cart-list-item>
      </div>
    </div>
    <cart-price></cart-price>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import CartPrice from "./CartPrice";

export default {
  name: "CartList",
  props: {
    buyList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CartListItem,
    CartPrice,
  },
};
</script>

<style scope lang='scss'>
#cart-list {
  position: relative;
  height: calc(100vh - 45px - 49px);
  overflow: hidden;
}
</style>