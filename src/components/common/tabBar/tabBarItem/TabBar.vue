<template>
  <div id="tabBar"> 
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar',
  components:{
  }
}
</script>

<style lang="scss">
#tabBar{
    height: 49px;
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
}

</style>
