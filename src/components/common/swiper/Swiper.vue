<template>
  <div id="swiper">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white" lazy-render>
      <a :href="item.link"  v-for="item in banner" :key="item.acm">
      <van-swipe-item>
        <img :src="item.image" alt="">
      </van-swipe-item>
      </a>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "SwiperItem",
  props: {
    banner: {
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
  .my-swipe {
    text-align: center;
    img{
      width: 100%;
    }
  }
}
</style>