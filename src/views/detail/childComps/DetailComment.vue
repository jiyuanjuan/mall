<template>
  <div id="detail-comment">
    <div class="comment-list">
      <span>用户评价</span>
      <span>查看更多</span>
    </div>
    <div class="comment-user" v-for="item in detailComment" :key="item">
      <div class="comment-user-item">
        <div class="comment-item1">
          <img :src="item.user.avatar" alt="" />
          <span>{{ item.user.uname }}</span>
        </div>
        <p class="comment-item2">{{ item.content }}</p>
        <div class="comment-item3">
          <!-- <span>{{item.created}}</span> -->
          <span>{{ item.style }}</span>
          <span v-for="item2 in item.extraInfo" :key="item2">{{ item2 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  props: {
    detailComment: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scope lang='scss'>
#detail-comment{
  margin-top: 15px;
}
.comment-list {
  height: 30px;
  line-height: 30px;
  padding: 15px 10px 10px 10px;
  border-top: 3px solid rgba(221, 218, 218, 0.5);
  display: flex;
  justify-content: space-between;
  span:nth-child(2) {
    font-size: 14px;
  }
}
.comment-user {
  padding: 5px 10px;
}
.comment-user-item{
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid rgba(221, 218, 218, 0.5);
  border-bottom: 4px solid rgba(221, 218, 218, 0.3);
}
.comment-item1 {
  display: flex;
  img {
    width: 45px;
    border-radius: 20px;
    margin-right: 10px;
  }
  span {
    height: 45px;
    line-height: 45px;
  }
}
.comment-item2 {
  font-size: 14px;
}
.comment-item3 {
  color: chocolate;
  font-size: 12px;
  span {
    display: inline-block;
    margin-right: 10px;
  }
}
</style>