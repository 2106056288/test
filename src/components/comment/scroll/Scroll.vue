<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ObserveDom from '@better-scroll/observe-dom'
  BScroll.use(ObserveDom)

export default {
name:'Scroll',
//子组件接受父组件的消息
props:{
  probeType:{
    type:Number,
    default:0
  },
  pullUpLoad:{
      type:Boolean,
      default:false
  }
},
data(){
    return {
        scroll:null,
        message:'哈哈哈'
    }
},

mounted(){
  this.scroll = new BScroll(this.$refs.wrapper,{
   probeType:this.probeType,
   click:true ,
   pullUpLoad:this.pullUpLoad,
   observeDOM:true
  })

  //监听滚动位置
 if(this.probeType===2||this.probeType===3)
 {
    this.scroll.on('scroll',(position)=>{ 
        /* console.log(position); */
        this.$emit('scroll',position)
})
 }

//监听上拉事件
if(this.pullUpLoad){
  this.scroll.on('pullingUp',()=>{
   /* console.log('上拉加载');  */
  this.$emit('pullingUp')
  
})
}
},
methods: { 
   scrollTo(x, y, time=1000){
             this.scroll.scrollTo(x, y, time) 
        }, 
     finishPullUp(){
         this.scroll.finishPullUp()
     },
      refresh(){
      this.scroll.refresh()
     /*  console.log('Scroll refresh'); */
     } 
 
}
}
</script>

<style>

</style>