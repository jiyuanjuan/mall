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
              <div class="shopinfo-serve">
                  <span>{{item.name}}</span>
                  <span>{{item.score}}</span>
              </div>
          </div>
      </div>
    </div>
    <a :href="shopInfo.shopUrl">进店逛逛</a>
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
  .shopinfo-title {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      border-radius: 20px;
      margin-right: 10px;
    }
  }
  .shopingo-main {
    text-align: center;
    display: flex;
    .shopinfo-l {
      display: flex;
    }
    .shopinfo-r {
      display: flex;
      .shopinfo-serve{
          display: flex;
          flex-direction: column;
      }
    }
  }
}
</style>