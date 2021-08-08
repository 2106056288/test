<template>
  <div class="list">
    <div class="order-list">
     <div class="list-item">
       <img src="~assets/img/profile/message.svg" alt="">
       <div class="info">我的消息</div>
     </div>

     <div class="list-item">
       <img src="~assets/img/profile/pointer.svg" alt="">
       <div class="info">我的积分</div>
     </div>

     <div class="list-item">
       <img src="~assets/img/profile/vip.svg" alt="">
       <div class="info">VIP专属权益</div>
     </div>
    </div>

    <div class="serve-list">
      <div class="list-item">
       <img src="~assets/img/profile/cart.svg" alt="">
       <div class="info">我的购物车</div>
     </div>

      <div class="list-item">
       <img src="~assets/img/profile/shopping.svg" alt="">
       <div class="info">积分商城</div>
     </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'ListView',
  props:{
      listData:{
          type:Array,
          default:function(){
           return []
          }
      }
  }
}
</script>

<style scoped>
.order-list, .serve-list{
 margin-top: 15px;
 background-color: #fff;
}
  .list-item{
  display: flex;
  align-items: center; 
  height: 40px;
}
img{
    width: 30px;
     height: 18px;
     margin-top: 10px; 
    margin-left: 5px;
}
.info{
    width: 100%;
    color: #333; 
    line-height: 40px;
    height: 40px;
    margin-left: 15px;
    border-bottom: 1px solid rgba(100,100,100,.1);
}   
</style>