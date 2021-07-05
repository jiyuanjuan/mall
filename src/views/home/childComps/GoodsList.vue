<template>
    <div class="goods-list">
      <goods-list-item
        v-for="item in goodsData"
        :key="item.acm"
        :goodsItem="item"
      ></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goodsData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scope lang='scss'>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>