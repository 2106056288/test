<template>
  <div class="check-buttom" :class="{check:isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="fail to load picture">
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  props:{
      isChecked:{
          type:Boolean,
          default:false
      }
  }
}
</script>

<style>
 .check-buttom{
     border-radius: 50%;
     border:2px solid #aaa;
 }
 .check{
     border-color:red;
      background-color: red;
 }
</style>