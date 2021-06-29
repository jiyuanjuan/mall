<template>
  <div id="home">
    <nav-bar></nav-bar>
    <swiper :banner="banner"></swiper>
    <recommend-goods :recommend="recommend"></recommend-goods>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import RecommendGoods from "../home/childComps/RecommendGoods";

import { onMounted, ref } from "vue";
import { getHomeData } from "network/home";

export default {
  name: "Home",
  components: {
    navBar,
    Swiper,
    RecommendGoods,
  },
  setup() {
    const goodsData = ref([]);
    const banner = ref([]);
    const recommend = ref([]);
    onMounted(() => {
      getHomeData().then((res) => {
        goodsData.value = res;
        banner.value = res.banner.list;
        recommend.value = res.recommend.list;
        console.log(goodsData.value)
      });
    });
    return {
      goodsData,
      banner,
      recommend
    };
  },
};
</script>

<style scope lang='scss'>
</style>