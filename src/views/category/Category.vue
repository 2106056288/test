<template>
    <div class="wrapper" ref="aaa">
        <div class="category">分类</div>
    </div>
</template>

<script>
import  {getCategoryData} from 'network/category'
import BScroll from 'better-scroll'

export default {
    name:'Category',
    data(){
        return {
            scroll:null,

            //设计数据模型
            goods:{
              'jacket':{page:1,list:[]},
              'pants':{page:1,list:[]},
              'skirt':{page:1,lsit:[]}
            }
        }
    },
    created(){
    /*    this.getCategoryMultidata()
       console.log(this.getCategoryMultidata()) */
       this.getCategoryData().then(res=>{
         console.log(res);
       })
    },
    mounted(){
         this.scroll = new BScroll(document.querySelector('.wrapper'),{
            probeType:3,
            pullUpLoad:true
    })
   /*  this.scroll.on('scroll',(position)=>{
        console.log(position);
    }) */
    this.scroll.on('pullingUp',()=>{
        console.log('上啦加载');
        setTimeout(()=>{
          this.scroll.finishPullUp()
        },2000)
    })
  }
}
</script>

<style  scoped>

.wrapper{
    overflow: hidden;
    height: 200px;
    background-color: red;
} 

</style>