<template>
  <div class="cart-list">
   <scroll class="content">
    <cart-list-item v-for="(item,index) in cartList" :key="index" :itemInfo='item'/> 
   </scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Scroll from 'components/comment/scroll/Scroll.vue'
import CartListItem from './CartListItem'
export default {
  
name:'CartList',
components: { 
      Scroll ,
      CartListItem
      },
computed:{
        ...mapGetters(['cartList'])
    }
}
</script>

<style scoped>
.cart-list{
     height: 100vh  
}
.content{
    height: calc(100% - 93px - 40px); 
    overflow: hidden; 
}
</style>