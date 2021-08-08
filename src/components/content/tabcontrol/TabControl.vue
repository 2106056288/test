<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" 
       class="tab-control-item" 
       :class="{active:index === currentIndex}"
       @click="itemClick(index)">
       <span>{{item}}</span>
        </div>
  </div>
</template>

<script>
export default {
   name:'TabControl',
   props:{
       titles:{
           type:Array,
           default(){
               return []
           }
       }
   },
   data(){
       return {
           currentIndex:0
       }
   },
   methods:{
       itemClick(index){
           //div被点击，引发函数itemClick,发送(参数一)事件名TabClick，(参数二)下标名给父组件
            this.$emit('TabClick',index)
            /* console.log(index); */
          return this.currentIndex = index
         
       }
   }
}
</script>

<style>
  .tab-control{
      display: flex;
      text-align: center;
      font-size: 15px;
      height: 40px;
      line-height: 40px;
      background-color: #fff;
  }
  .tab-control-item{
      flex: 1;
  }
  .active{
      color: var(--color-high-text);
  }
  .active-span{
      border-bottom:3px solid var(--color-tint)
  }
  .tab-control-item{
      padding: 5px;
  }
</style>