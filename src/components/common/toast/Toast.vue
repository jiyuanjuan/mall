<template>
  <div id="toast" v-show="$store.state.isToast">
      <div class="toast-content">{{$store.state.message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props:{
      message:{
          type:String,
          default:''
      },
      isToast:{
          type:Boolean,
          default:false
      }
  }
};
</script>

<style scope lang='scss'>
#toast{
    background-color:rgba(0,0,0,0.6);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 205px;
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    text-align: center;
    color: #fefefe;
}
</style>