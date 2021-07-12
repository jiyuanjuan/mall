<template>
  <div id="cart-list">
     <cart-list-item></cart-list-item> 
     <cart-price></cart-price>
  </div>
</template>

<script>
import CartListItem from "./CartListItem"
import CartPrice from "./CartPrice"

export default {
  name: "CartList",
  components:{
      CartListItem,
      CartPrice
  }
};
</script>

<style scope lang='scss'>
#cart-list{
    position: relative;
    height: calc(100vh - 45px - 49px);
    background-color: grey;
    overflow: hidden;
}
</style>