<template>
  <swiper class="detail-swiper">
      <swiper-item  v-for="item in topImages">
        <img :src="item" alt="fail to load img">
      </swiper-item>
  </swiper>
</template>

<script>
import Swiper from 'components/comment/swiper/Swiper.vue'
import SwiperItem from 'components/comment/swiper/SwiperItem.vue'
export default {
    name:'DetailSwiper',
  components: { Swiper, SwiperItem },
  props:{
      topImages:{
          type:Array,
          default(){
              return[]
          }
      }
  }        
}
</script>

<style scoped> 
   .detail-swiper{
       height: 300px;
       overflow: hidden;
   }
   
</style>