<template>
  <nav-bar>
    <template v-slot:left>
      <div class="detail-nav" @click="back">
        <img src="~assets/img/common/back_nav.png" alt="" />
      </div>
    </template>
    <template v-slot:center>
      <div
        v-for="(item, index) in titles"
        :key="item"
        :class="{ active: currentIndex === index }"
        @click="clickItem(index)"
      >
        {{ item }}
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    const currentIndex = ref(0);
    const clickItem = (index) => {
      currentIndex.value = index;
    };
    const back = () => {
      router.go(-1);
    };
    return {
      currentIndex,
      clickItem,
      back,
    };
  },
};
</script>

<style scope lang='scss'>
</style>
