<template>
  <div class="tab-bar-item" @click="item">
    <div v-if="!isShow"><slot name="img"></slot></div>
    <div v-else><slot name="img_active"></slot></div>
    <div :style="activeStyle" class="item_font"><slot name="name"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default() {
        return "";
      },
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isShow() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isShow ? {color:this.activeColor} : {};
    },
  },
  methods: {
    item() {
      this.$router.push(this.path);
    },
  },
  components: {},
};
</script>

<style scope lang="scss">
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  img {
    margin-top: 5px;
    width: 20px;
    height: 20px;
    vertical-align: middle; //消除文字和图片之间的默认间隙
  }

}
</style>
