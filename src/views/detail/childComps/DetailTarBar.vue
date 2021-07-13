<template>
  <div class="detail-tab-bar">
    <div class="tabbar-item">
      <img src="~assets/img/common/serve.png" alt="" />
      <span>客服</span>
    </div>
    <div class="tabbar-item">
      <img src="~assets/img/common/shop.png" alt="" />
      <span>店铺</span>
    </div>
    <div class="tabbar-item">
      <img src="~assets/img/common/collect.png" alt="" />
      <span>收藏</span>
    </div>
    <div class="tabbar-item2" @click="goodsIidClick">加入购物车</div>
    <div class="tabbar-item3" @click="goCart">购买</div>
  </div>
</template>

<script>
import { ref, } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "DetailTabBar",
  setup() {
    const route = useRoute();
    const router = useRouter()
    const store = useStore();
    const goodsIid = ref("");

    const goodsIidClick = () => {
      goodsIid.value = route.params.id;
      store.commit("changeCartlist",goodsIid.value);
    };

    const goCart = () => {
      router.push('/cart')
    }
    
    return {
      goodsIid,
      goodsIidClick,
      goCart
    };
  },
};
</script>

<style scope lang='scss'>
.detail-tab-bar {
  position: relative;
  bottom: calc(45px + 70px);
  background-color: #fefefe;
  height: 70px;
  width: 100wh;
  z-index: 9;
  display: flex;
  justify-items: center;
  align-items: center;
  div {
    line-height: 20px;
    padding-right: 15px;
    font-size: 14px;
    flex: 1;
  }
  .tabbar-item {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    img {
      width: 25px;
    }
    span {
      font-size: 12px;
    }
  }
  .tabbar-item2 {
    flex: 2;
    background-color: #ffe817;
    display: inline-block;
    padding: 0 10px;
    text-align: center;
    height: 70px;
    line-height: 70px;
  }
  .tabbar-item3 {
    flex: 2;
    height: 70px;
    line-height: 70px;
    padding: 0 10px;
    color: #fefefe;
    text-align: center;
    display: inline-block;
    background-color: #ff6699;
  }
}
</style>