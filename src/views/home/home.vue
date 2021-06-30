<template>
  <div id="home">
    <nav-bar></nav-bar>
    <swiper :banner="banner"></swiper>
    <recommend-goods :recommend="recommend"></recommend-goods>
    <feature-goods></feature-goods>
    <tab-contorl :tabTitle="['流行', '新款', '精选']"></tab-contorl>
    <goods-list :goodsData="goodsData"></goods-list>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import RecommendGoods from "../home/childComps/RecommendGoods";
import FeatureGoods from "../home/childComps/FeatureGoods";
import TabContorl from "components/content/tabContorl/TabContorl";
import GoodsList from "./childComps/GoodsList";

import { onMounted, ref } from "vue";
import { getHomeData, getGoodsData } from "network/home";

export default {
  name: "Home",
  components: {
    navBar,
    Swiper,
    RecommendGoods,
    FeatureGoods,
    TabContorl,
    GoodsList,
  },
  setup() {
    const banner = ref([]);
    const recommend = ref([]);
    const goodsData = ref([]);

    onMounted(() => {
      getHomeData().then((res) => {
        banner.value = res.banner.list;
        recommend.value = res.recommend.list;
        console.log(goodsData.value);
      });
      getGoodsData().then((res) => {
        goodsData.value = res.list;
        console.log(goodsData.value);
      });
    });
    return {
      banner,
      recommend,
      goodsData,
    };
  },
};
</script>

<style scope lang='scss'>
</style>