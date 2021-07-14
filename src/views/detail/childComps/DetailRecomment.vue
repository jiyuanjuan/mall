<template>
  <div id="detail-recomment">
    <p>热门推荐</p>
    <div class="detail-recomment-list">
      <div
        class="detail-recomment-item"
        v-for="item in detailRecomment"
        :key="item"
      >
        <img :src="item.show.img" alt="" @load="detailImgLoad" />
        <div class="detail-recomment-content">
          <p>{{ item.title }}</p>
          <span>{{ item.price }}</span>
          <span>{{ item.cfav }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailRecomment",
  props: {
    detailRecomment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(props,context) {
    const detailImgLoad = () => {
      fn1()
    };
    const dbounce = (fn) => {
      let timer = null;
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(fn, 300);
      };
    };
    const fn = () => {
     context.emit('imgLoad')
    };
    const fn1 = dbounce(fn);
    return {
      detailImgLoad,
      dbounce,
      fn1,
    };
  },
};
</script>

<style scope lang='scss'>
#detail-recomment {
  width: 90%;
  margin: 0 auto;
}
.detail-recomment-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.detail-recomment-item {
  position: relative;
  width: 45%;
  overflow: hidden;
  padding: 10px 5px 60px 5px;
  img {
    width: 100%;
  }
}
.detail-recomment-content {
  position: absolute;
  bottom: 10px;
  font-size: 14px;
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  span:nth-child(2) {
    color: red;
    margin-right: 20px;
  }
}
</style>
