<template>
  <div class="cart-list-buy">
    <div class="cart-list-item">
      <div class="cart-img">
        <img :src="getList.detailInfo.detailImage[0].list[0]" alt="" />
      </div>
      <div class="cart-content">
        <span>{{ getList.skuInfo.title }}</span>
        <span>商品描述：{{ getList.detailInfo.desc }}</span>
        <div class="cart-price">
          <span>{{ getList.skuInfo.defaultPrice }}</span>
          <span>{{this.$store.state.cartlist[0]}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props: {
    getList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scope lang='scss'>
.cart-list-buy {
  background-color: #fefefe;
  overflow: hidden;
}
.cart-list-item {
  display: flex;
  padding: 5px;

  border-bottom: 1px solid #ccc;
  .cart-img {
    margin-right: 10px;
    flex: 1;
    img {
      border-radius:5px;
    }
  }
  .cart-content {
    white-space: nowrap;
    overflow: hidden;
    span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span:nth-child(1) {
      font-size: 14px;
    }
    span:nth-child(2) {
      font-size: 12px;
      margin-top: 20px;
      color: #999;
    }
    flex: 3;
  }
  img {
    width: 100%;
  }
}
.cart-price{
  margin-top: 50px;
  color: red;
}
</style>