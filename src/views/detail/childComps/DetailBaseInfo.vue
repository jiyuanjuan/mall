<template>
  <div id="detail-base-info">
    <div>
      <h4>{{ shopBase.title }}</h4>
    </div>
    <div class="price">
      <span>{{ shopBase.price }}</span>
      <span>{{ shopBase.oldPrice }}</span>
      <span v-show="shopBase.discountDesc">{{ shopBase.discountDesc }}</span>
    </div>
    <div class="columns" v-if="shopBase.columns">
      <span v-for="item in shopBase.columns.slice(0,shopBase.columns.length - 1)" :key="item">
        {{ item }}
      </span>
      <span>{{shopBase.serve[shopBase.serve.length - 1].name}}</span>
    </div>
    <div class="serve" v-if="shopBase.serve">
      <div v-for="item in shopBase.serve.slice(0,shopBase.serve.length - 1)" :key="item">
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    shopBase: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scope lang='scss'>
#detail-base-info {
  padding: 0 10px;
  .price {
    height: 26px;
    line-height: 26px;
    span:first-child {
      font-size: 26px;
      color: red;
      margin-right: 10px;
    }
    span:nth-child(2) {
      text-decoration: line-through;
      margin-right: 10px;
    }
    span:nth-child(3) {
      color: #fefefe;
      background-color: rgba(247, 2, 2, 0.7);
      font-size: 14px;
      width: 60px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      display: inline-block;
      border-radius: 10px;
    }
  }
  .columns {
    margin-top: 25px;
    display: flex;
    span {
      flex: 1;
      font-size: 13px;
      color: #999;
    }
    span:nth-child(1) {
      text-align: left;
    }
    span:nth-child(2) {
      text-align: center;
    }
    span:nth-child(3) {
      text-align: right;
    }
  }
  .serve {
    display: flex;
    margin-top: 10px;
    padding: 23px 0;
    border-top: 2px solid rgba(228, 228, 228,0.5);
    border-bottom: 2px solid rgba(228, 228, 228,0.5);
    box-shadow: 0 1px 1px rgba(236, 236, 236, 0.3);
    font-size: 14px;
    div {
      flex: 1;
      img {
        width: 14px;
        margin-right: 5px;
      }
      span {
        text-align: center;
      }
    }
  }
}
</style>