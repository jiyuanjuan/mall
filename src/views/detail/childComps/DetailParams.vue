<template>
  <div id="detail-params" v-if="detailParams">
    <table class="goods-params" v-for="item in detailParams" :key="item">
      <tr v-for="item2 in item" :key="item2">
        <td v-for="item3 in item2" :key="item3">{{item3}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    detailParams: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scope lang='scss'>
.goods-params{
      width: 100%;
      padding: 10px 10px;
  tr{
    display: flex;
    height: 35px;
    line-height: 35px;
    padding: 10px 0;
    border-bottom: 1px solid rgb(230, 227, 227);
    td{
      flex: 1;
    }
  }
}
</style>