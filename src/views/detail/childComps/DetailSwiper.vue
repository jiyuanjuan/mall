<template>
  <div id="swiper">
    <van-swipe
      class="detail-swipe"
      :autoplay="2000"
      indicator-color="white"
      lazy-render
    >
      <van-swipe-item v-for="item in imgData" :key="item">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "DetailSwiper",
  props: {
    imgData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scope lang="scss">
#swiper {
  .detail-swipe{
    text-align: center;
    height: 400px;
    img {
      width: 100%;
    }
  }
}
</style>