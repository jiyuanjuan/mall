<template>
   <div class="navbar">
       <div class="left"><slot name="left">1</slot></div>
       <div class="center"><slot name="center">蘑菇街</slot></div>
       <div class="right"><slot name="right">2</slot></div>
   </div>
</template>

<script>
export default{
    name:'NavBar',
}
</script>

<style scope lang='scss'>
.navbar{
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #ef919f;
    box-shadow: 0 1px 2px #e0b0b0;
    display: flex;
    .left{
        width: 60px;
    }
    .center{
        flex: 1;
    }
    .right{
        width: 60px;
    }
}
</style>