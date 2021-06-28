<template>
  <div>
    <router-view />
    <tab-bar>
      <tab-bar-item path="home">
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
      <tab-bar-item path="category">
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
      <tab-bar-item path="cart">
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
      <tab-bar-item path="profile">
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
import tabBar from "../tabBar/tabBarItem/tabBar";
import tabBarItem from "../tabBar/tabBarItem/tabBarItem";
export default {
  name: "mainTabBar",
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>

<style scope lang='scss'>
</style>