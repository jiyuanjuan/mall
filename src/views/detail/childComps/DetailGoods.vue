<template>
  <div id="detail-goods">
    <div v-if="detailGoods.detailImage && detailGoods.detailImage[0]">
      <p>{{ detailGoods.desc }}</p>
      <div v-for="item in detailGoods.detailImage[0].list" :key="item">
        <img class="goods-img" :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoods",
  props: {
    detailGoods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scope lang='scss'>
#detail-goods{
    width: 100%;
    overflow: hidden;
    .goods-img{
        width: 100%;
    }
}
</style>