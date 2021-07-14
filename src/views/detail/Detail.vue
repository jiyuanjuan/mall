<template>
  <div id="detail">
    <detail-nav-bar @navItem="navItem"></detail-nav-bar>
    <div class="detailwrapper">
      <div class="detailcontent">
        <detail-swiper :imgData="banner"></detail-swiper>
        <detail-base-info :shopBase="shopBase.value"></detail-base-info>
        <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
        <detail-goods :detailGoods="detailGoods"></detail-goods>
        <detail-params :detailParams="detailParams"></detail-params>
        <detail-comment :detailComment="detailComment"></detail-comment>
        <detail-recomment
          :detailRecomment="detailRecomment"
          @imgLoad="imgLoad"
          ref="test"
        ></detail-recomment>
      </div>
    </div>
    <detail-tar-bar></detail-tar-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoods from "./childComps/DetailGoods";
import DetailParams from "./childComps/DetailParams";
import DetailComment from "./childComps/DetailComment";
import DetailRecomment from "./childComps/DetailRecomment";
import DetailTarBar from "./childComps/DetailTarBar";

import { onMounted, reactive, ref, nextTick } from "vue";
import { useRoute } from "vue-router";
import { detailData, shopBaseInfo, getRecommentData } from "network/detail";
import BScroll from "better-scroll";


export default {
  name: "Detail",
  emits: ["navItem"],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoods,
    DetailParams,
    DetailComment,
    DetailRecomment,
    DetailTarBar,
  },
  setup() {
    const route = useRoute();
    const banner = ref([]);
    const shopInfo = ref([]);
    const shopBase = reactive({});
    const detailGoods = ref([]);
    const detailParams = ref([]);
    const detailComment = ref([]);
    const detailRecomment = ref([]);
    const navTop = ref([0]);
    // const test = ref()

    let bScroll = reactive({});
    let iid = ref(route.params.id);
    let page = ref(0);

    onMounted(() => {
      detailData(iid.value).then((res) => {
        banner.value = res.data.result.itemInfo.topImages;
        shopInfo.value = res.data.result.shopInfo;
        shopBase.value = new shopBaseInfo(
          res.data.result.itemInfo,
          res.data.result.columns,
          res.data.result.shopInfo.services
        );
        detailGoods.value = res.data.result.detailInfo;
        detailParams.value = res.data.result.itemParams.rule.tables;
        detailComment.value = res.data.result.rate.list;
        // console.log(res.data.result);
      });

      //获取详情页底部推荐商品
      getRecommentData().then((res) => {
        detailRecomment.value = res.list;
      });

      bScroll = new BScroll(".detailwrapper", {
        pullUpLoad: true,
        click: true,
        probeType: 3,
      });
      bScroll.on("pullingUp", () => {
        page.value += 1;
        getRecommentData(page).then((res) => {
          detailRecomment.value.push(...res.list);
        });
        bScroll.finishPullUp();
        bScroll.refresh();
      });
      nextTick(() => {
        bScroll && bScroll.refresh();
      });
    });
    const imgLoad = () => {
      navTop.value.push(document.querySelector("#detail-params").offsetTop);
      navTop.value.push(document.querySelector("#detail-comment").offsetTop);
      navTop.value.push(document.querySelector("#detail-recomment").offsetTop);

    //  document.querySelector('.detailwrapper').style.top = '-2000px'
      // console.log(test.value.$el)   setup中refs的应用
    };
    const navItem = (index) => {
      bScroll && bScroll.scrollTo(0, -navTop.value[index], 600);
    };
    return {
      bScroll,
      iid,
      banner,
      shopBase,
      shopInfo,
      detailGoods,
      detailParams,
      detailComment,
      detailRecomment,
      imgLoad,
      navItem,
      // test
    };
  },
};
</script>

<style scope lang='scss'>
.detailwrapper {
  height: 100vh;
}

#detail {
  width: 100%;
}

// #tabBar{
//   display: none;
// }
</style>