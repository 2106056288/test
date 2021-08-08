<template>
    <div class="profile">
      <nav-bar class="navBar"><div slot="center">我的个人信息</div></nav-bar>
       <user-info></user-info>

       <section class="account">
         <div class="account-item">
           <div class="number">
             <span class="balance">0.00</span>元
           </div>
           <div class="account-info">我的余额</div>
         </div>

         <div class="account-item">
           <div class="number">
             <span class="balance">0</span>个
           </div>
           <div class="account-info">我的优惠</div>
         </div>

         <div class="account-item">
             <div class="number">
               <span class="balance">0</span>分
             </div>
             <div class="account-info">我的积分</div>
         </div>
       </section>
           <list-view/>
     <!--  <list-view :listData="orderList" class="order-list"/> -->
      <!-- <list-view :listData="serviceList" class="service-list"/> -->
    </div>
</template>

<script>
import NavBar from 'components/comment/navbar/NavBar.vue'
import UserInfo from './childComps/UserInfo.vue'
import ListView from './childComps/ListView.vue'
export default {
  name:'Profile',
  components: { 
      NavBar ,
      UserInfo,
    ListView},
    data(){
      //以对象形式返回，传值时改变名称为listData
      return {
       /*  orderList:[
        {icon:'~assets/img/profile/message.svg',iconColor:'#ff8198',info:'我的消息'},
        {icon:'~assets/img/profile/point.svg',iconColor:'#fc7b53',info:'积分商城'},
        {icon:'~assets/img/profile/vip.svg',iconColor:'#ffc636',info:'会员卡'}],
        serviceList:[
          {icon:'~assets/img/profile/cart.svg',iconColor:'#ff8198',info:'我的购物车'},
          {icon:'~assets/img/profile/shopping.svg',iconColor:'#ff8198',info:'下载购物App'},] */
      }
    }
}
</script>

<style scoped>
  .profile{
      position:relative; 
      background-color: #f2f2f2;
  }
  .navBar{
    background-color: var(--color-tint);
    font-weight: 700;
     color: #fff;
     /*   position: fixed;  */
     /*  display: flex; */
     /*  right: 0;
      left: 0;
      top:0;
      border-bottom:1px solid black; */
  }
 
 .UserInfo{
   background-color: var(--color-tint) ;
 }

 .account{
   display: flex;
 }

 .account-item{
  flex: 1;
  width: 100%;
  text-align: center;
 background-color:#fff;
 margin-right: 1px; 

 }
.account-item:last-of-type{
 margin-right: 0;
}
 .account-item .balance{
   
   font-size: 24px;
   font-weight: 700;
   color: #ff5f3e;
 }
 .account-info{
    margin: 6px;
 }

 .order-list .service-list{
    margin-top: 12px;
 }
</style>