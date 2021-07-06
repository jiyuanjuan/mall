<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :imgData="banner"></detail-swiper>
    <detail-base-info
      :baseInfo="baseInfo"
      :baseColumns="baseColumns"
      :baseServe="baseServe"
    ></detail-base-info>
    <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo"

import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { detailData } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
  },
  setup() {
    const route = useRoute();
    const banner = ref([]);
    const baseInfo = ref([]);
    const baseColumns = ref([]);
    const baseServe = ref([]);
    const shopInfo = ref([]);
    let iid = ref(route.params.id);
    onMounted(() => {
      detailData(iid.value).then((res) => {
        console.log(res);
        banner.value = res.data.result.itemInfo.topImages;
        baseInfo.value = res.data.result.itemInfo;
        baseColumns.value = res.data.result.columns;
        baseServe.value = res.data.result.shopInfo.services;
        shopInfo.value = res.data.result.shopInfo
        console.log(shopInfo.value)
      });
    });
    return {
      iid,
      banner,
      baseInfo,
      baseColumns,
      baseServe,
      shopInfo
    };
  },
};
</script>

<style scope lang='scss'>
.active {
  color: #fefefe;
}
#detail {
  width: 100%;
  .left {
    .detail-nav {
      img {
        width: 25px;
        margin-top: 10px;
      }
    }
  }
  .center {
    display: flex;
    div {
      flex: 1;
      font-size: 14px;
    }
  }
}
</style>