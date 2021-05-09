<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
 name:'Toast',
 props:{
     message:{
         type:String,
         default:''
    },
    show:{
        type:Boolean,
        default:false
    }
  }
}
</script>

<style>
 .toast{
    position: fixed;
    transform: translate(-50%,-50%);
    top:50%;
    left: 50%;
    
    padding: 8px 10px;
    background-color:rgba(0,0,0,.75);
    color: #fff;
 }
</style>