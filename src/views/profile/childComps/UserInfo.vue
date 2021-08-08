<template>
    <div class="UserInfo">
      <a href="#" class="clear-fix">
        <slot name="user-icon">
          <img src="~assets/img/profile/avatar.svg" alt="" class="privateImage-svg left">
         <!--  <svg class="privateImage-svg left">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
          </svg> -->
        </slot>

        <div class="login-info left">
          <slot class="niclname">
            <div>登录/注册</div>
          </slot>

          <div class="phone">
            <span>
              <img src="~assets/img/profile/phone.svg" alt="" class="icon-mobile">
              <!-- <svg data-v-735ff1be="" fill="#fff" class="icon-mobile"><use data-v-735ff1be=""  xmlns:xlink="~assets/img/profile/phone.svg" xlink:href="#mobile"></use></svg> -->
            </span>
            <slot name="user-phone">暂无绑定手机号码 </slot>
          </div>

        </div>
        <img src="~assets/img/profile/message.svg" alt="" class="arrow-svg right">
        <!-- <svg data-v-735ff1be="" fill="#fff" class="arrow-svg right"><use data-v-735ff1be=""  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg> -->
      </a>
    </div>
</template>

<script>
export default {
 name:'UserInfo',

}
</script>

<style scoped>
 .UserInfo{
  background-color: var(--color-tint); 
   padding: 15px;
  margin-top: -5px; 
} 

   .UserInfo .privateImage-svg {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #fff;
  }
 
 .UserInfo .login-info{
    color: #fff;
    margin: 10px 0 0 10px;
  }
 
   .left{
    float: left;
    width: 30vw;
  }  

   .UserInfo .arrow-svg{
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }
 
   
   .UserInfo .login-info .phone{
   position: relative;
   font-size: 10px;
   margin-top: 5px;
   margin-left: 15px;
   font-weight:300 ;
  } 

  .UserInfo .login-info .phone .icon-mobile{
      position: absolute; 
       width: 12px;  
        height: 18px; 
        left:-15px;
        top:0px; 
  }
</style>