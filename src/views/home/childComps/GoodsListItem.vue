<template>
  <div class="goods-list-item" @click="goodsDetail">
    <img :src="goodsItem.show.img" alt="" @load="imgLoad" />
    <p>{{ goodsItem.title }}</p>
    <div>
      <span>{{ goodsItem.orgPrice }}</span>
      <span>{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  setup(props) {
    const store = useStore();
    const router = useRouter();
    const imgLoad = () => {
      store.commit("imgCount");
    };
    const goodsDetail = () => {
      router.push({
        path:'/Detail/'+props.goodsItem.iid,
        query:{
          // id:props.goodsItem.iid
        }
      })
    };
    return {
      store,
      imgLoad,
      goodsDetail,
    };
  },
};
</script>

<style scope lang='scss'>
.goods-list-item {
  width: 45%;
  padding: 10px 5px;
  position: relative;
  img {
    width: 100%;
  }
  p {
    width: 95%;
    font-size: 14px;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  div {
    font-size: 12px;
    position: absolute;
    bottom: 0;

    span:first-child {
      color: red;
      margin-right: 50px;
    }
  }
}
</style>