<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:img>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:img_active>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:name>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:img>
          <img src="~assets/img/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:img_active>
          <img src="~assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:name>
          <div>商品</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:img>
          <img src="~assets/img/tabbar/cart.svg" alt="" />
        </template>
        <template v-slot:img_active>
          <img src="~assets/img/tabbar/cart_active.svg" alt="" />
        </template>
        <template v-slot:name>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:img>
          <img src="~assets/img/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:img_active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <template v-slot:name>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../tabBar/tabBarItem/TabBar";
import TabBarItem from "../tabBar/tabBarItem/TabBarItem";
export default {
  name: "mainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scope lang='scss'>
</style>