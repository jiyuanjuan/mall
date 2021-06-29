<template>
  <div class="recommendHome">
    <a :href="item.link" v-for="item in recommend" :key="item.acm">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "RecommendGoods",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scope lang='scss'>
.recommendHome{
  display: flex;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  a{
    flex: 1;
    img{
      width: 77px;
    }
  }
}
</style>