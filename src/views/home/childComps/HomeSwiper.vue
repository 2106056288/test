<template>
   <swiper>
      <swiper-item v-for='item in banners'> 
         <a :href="item.link">
            <img :src="item.image" alt='fail to load picture' @load="imageLoadOver">
        </a>
        </swiper-item>
      </swiper>
</template>

<script>
import Swiper from 'components/comment/swiper/Swiper.vue'
import SwiperItem from 'components/comment/swiper/SwiperItem.vue'
export default {
name:'HomeSwiper',
props:{
    banners:{
        type:Array,
        default(){
            return []
        }
    }
},
data(){
    return {
       /*  isLoad:false */
    }
},
components:{
    Swiper,
    SwiperItem
},
methods:{
    imageLoadOver(){
      /*  if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad=true
       } */
       this.$emit('swiperImageLoad')
    }
}

}
</script>

<style>

</style>