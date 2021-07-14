<template>
  <div id="home">
    <nav-bar></nav-bar>
    <tab-contorl
      @clickTab="clickTab"
      :tabTitle="['流行', '新款', '精选']"
      class="tabShow"
      v-show="isShow"
    ></tab-contorl>
    <div class="homeWrapper">
      <div class="content">
        <swiper :imgData="banner" class="homeBanner"></swiper>
        <recommend-goods :recommend="recommend"></recommend-goods>
        <feature-goods></feature-goods>
        <tab-contorl
          @clickTab="clickTab"
          :tabTitle="['流行', '新款', '精选']"
        ></tab-contorl>
        <goods-list :goodsData="goodsData[currentType].list"></goods-list>
      </div>
    </div>
    <back-top v-show="isShow" @click="bTop"></back-top>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import RecommendGoods from "../home/childComps/RecommendGoods";
import FeatureGoods from "../home/childComps/FeatureGoods";
import TabContorl from "components/content/tabContorl/TabContorl";
import GoodsList from "./childComps/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import {
  onMounted,
  ref,
  reactive,
  nextTick,
  watchEffect,
  onActivated,
  onDeactivated,
} from "vue";
import { getHomeData, getGoodsData } from "network/home";
import BetterScroll from "better-scroll";
import { useStore } from "vuex";

export default {
  name: "Home",
  emits: ["emits"],
  components: {
    navBar,
    Swiper,
    RecommendGoods,
    FeatureGoods,
    TabContorl,
    GoodsList,
    BackTop,
  },
  setup() {
    const store = useStore();
    const banner = ref([]);
    const recommend = ref([]);
    const goodsData = reactive({
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] },
    });

    let currentType = ref("pop");
    let bScroll = reactive({});
    let isShow = ref(false);

    const clickTab = (index) => {
      let tabType = ["pop", "new", "sell"];
      currentType.value = tabType[index];
      //nextTick：dom渲染完成之后执行
      nextTick(() => {
        bScroll && bScroll.refresh();
        bScroll.scrollTo(0, -595, 0);
      });
    };

    const bTop = () => {
      bScroll && bScroll.scrollTo(0, 0, 600);
    };

    //防抖
    const debounce = (fn, delay) => {
      let timer = null;
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn;
        }, delay);
      };
    };

    watchEffect(() => {
      //  debounce(console.log(store.state.homeImg),500)()
    });
    
    onActivated(() => {
      console.log("进入home");
    });
    onDeactivated(() => {
      console.log("离开home");
    });

    onMounted(() => {
      getHomeData().then((res) => {
        banner.value = res.banner.list;
        recommend.value = res.recommend.list;
      });
      getGoodsData("pop").then((res) => {
        goodsData["pop"].list = res.list;
      });
      getGoodsData("new").then((res) => {
        goodsData["new"].list = res.list;
      });
      getGoodsData("sell").then((res) => {
        goodsData["sell"].list = res.list;
      });

      bScroll = new BetterScroll(".homeWrapper", {
        probeType: 3,
        pullUpLoad: true,
        click: true,
      });

      bScroll.on("pullingUp", () => {
        let page = goodsData[currentType.value].page + 1;
        // console.log(currentType.value);
        // console.log(page);
        getGoodsData(currentType.value, page).then((res) => {
          goodsData[currentType.value].list.push(...res.list);
          goodsData[currentType.value].page += 1;
        });
        bScroll.finishPullUp();
        bScroll.refresh();
      });

      bScroll.on("scroll", (position) => {
        isShow.value = bScroll && -position.y > 595;
      });

      // console.log(document.querySelector('.content').offsetHeight)
      //.content图片未加载完，导致元素高度太低
      nextTick(() => {
        bScroll && bScroll.refresh();
      });
    });

    return {
      store,
      banner,
      recommend,
      goodsData,
      currentType,
      clickTab,
      bTop,
      debounce,
      bScroll,
      isShow,
    };
  },
};
</script>

<style scope lang='scss'>
#home {
  width: 100vw;
  .homeWrapper {
    height: 100vh;
    overflow: hidden;
  }
  .tabShow {
    width: 100%;
    height: 45px;
    position: fixed;
    top: 45px;
  }
}
</style>