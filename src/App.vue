<template>
  <div>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from "./components/tabBar/mainTabBar"
export default {
  name: "Home",
  components:{
    mainTabBar
  }
};
</script>

<style>
@import url("./assets/css/base.css");
</style>