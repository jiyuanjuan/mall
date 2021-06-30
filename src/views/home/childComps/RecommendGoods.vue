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
  border-bottom: 6px solid #efecec;
  a{
    flex: 1;
    font-size: 10px;
    color: #666;
    img{
      width: 70px;
    }
  }
}
</style>