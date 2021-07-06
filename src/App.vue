<template>
  <div>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
import mainTabBar from "components/common/tabBar/MainTabBar"
export default {
  name: "Home",
  components:{
    mainTabBar
  }
};
</script>

<style>
</style>