<template>
  <div class="tab-contorl">
    <div
      @click="tabClick(index)"
      class="tab-itme"
      v-for="(item, index) in tabTitle"
      :key="item"
    >
      <span :class="{ spanActive: $store.state.tabCurrentIndex === index }">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
import {ref } from "vue"
import {useStore, } from "vuex"
export default {
  name: "TabContorl",
  props: {
    tabTitle: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  setup(props,context){
      const currentIndex = ref(0)
      const store = useStore();
      const tabClick = (index)=>{
          store.state.tabCurrentIndex = index;
          context.emit('clickTab',index)
      }
      return{
          tabClick,
          currentIndex
      }
  }

}
</script>

<style scope lang='scss'>
.tab-contorl {
  background-color: #fefefe;
  display: flex;
  height: 40px;
  line-height: 40px;
  z-index: 9;
  .tab-itme {
    flex: 1;
    text-align: center;
    span {
      font-size: 14px;
      padding: 9px;
    }
    .spanActive {
      border-bottom: 2px solid red;
    }
  }
}
</style>