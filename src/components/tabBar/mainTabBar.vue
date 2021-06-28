<template>
  <div>
    <router-view />
    <tab-bar>
      <tab-bar-item path="home" activeColor="blue">
        <template v-slot:img>
          <img src="../../assets/logo.png" alt="" />
        </template>
        <template v-slot:img_active>
          <img src="../../assets/logo_active.png" alt="" />
        </template>
        <template v-slot:name>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="category">
        <template v-slot:img>
          <img src="../../assets/logo.png" alt="" />
        </template>
        <template v-slot:img_active>
          <img src="../../assets/logo_active.png" alt="" />
        </template>
        <template v-slot:name>
          <div>商品</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="cart">
        <template v-slot:img>
          <img src="../../assets/logo.png" alt="" />
        </template>
        <template v-slot:img_active>
          <img src="../../assets/logo_active.png" alt="" />
        </template>
        <template v-slot:name>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <template v-slot:img>
          <img src="../../assets/logo.png" alt="" />
        </template>
        <template v-slot:img_active>
          <img src="../../assets/logo_active.png" alt="" />
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