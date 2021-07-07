<template>
  <div id="detail-shopinfo">
    <div class="shopinfo-title">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shopingo-main">
      <div class="shopinfo-l">
        <div>
          <p>{{ shopInfo.cSells }}</p>
          <p>总销量</p>
        </div>
        <div>
          <p>{{ shopInfo.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shopinfo-r">
        <div v-for="item in shopInfo.score" :key="item">
          <span>{{ item.name }}</span>
          <span>{{ item.score }}</span>
          <span :class="{ isRed: item.isBetter }">{{
            item.score > 4.8 ? "高" : " 低"
          }}</span>
        </div>
      </div>
    </div>
    <a :href="shopInfo.shopUrl" class="shopAddress">进店逛逛</a>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scope lang='scss'>
#detail-shopinfo {
  padding: 20px 15px;
    border-bottom: 2px solid rgba(228, 228, 228,0.5);
  .shopinfo-title {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    img {
      width: 50px;
      border-radius: 20px;
      margin-right: 10px;
    }
  }
  .shopingo-main {
    text-align: center;
    display: flex;
    font-size: 14px;
    div {
      flex: 1;
    }
    .shopinfo-l {
      display: flex;
      padding: 0 20px 0 0;
      border-right: 1px solid rgba(177, 176, 176, 0.5);
    }
    .shopinfo-r {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-left: 20px;
      div {
        display: flex;
        span:nth-child(1) {
          flex: 3;
        }
        span:nth-child(2) {
          flex: 2;
        }
        span:nth-child(3) {
          color: green;
          flex: 1;
        }
      }
    }
  }
}
.isRed {
  color: red !important;
}
.shopAddress{
  margin: 20px auto;
  width: 50%;
  color: #fefefe;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  display: block;
  text-align: center;
  border-radius: 20px;
  background-color:rgba(173, 171, 171,0.6);
}
</style>