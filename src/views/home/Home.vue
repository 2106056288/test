<template>
    <div id="home">
     <nav-bar class="home-nav"><div slot="center" >购物街</div></nav-bar>
         <tab-control :titles="['流行','新款','精选']"
      @TabClick="tabClick" 
      ref="tabControl1"  class="tabControl"
      v-show="isTabFixed"></tab-control>
          <scroll class="content" 
          ref="scroll" 
          :probe-type="3" 
          @scroll='contentScroll'
          :pull-up-load='true'
          @pullingUp='loadMore'>  
        <home-swiper :banners = 'banners' @swiperImageLoad='swiperImageLoad'></home-swiper>
     <recommend-view :recommends = 'recommends'></recommend-view>
     <feature-view/>
       <tab-control :titles="['流行','新款','精选']"
      @TabClick="tabClick" ref="tabControl2" ></tab-control>
       <goods-list :goods='showGoods'/>
       </scroll> 
         <back-top @click.native= 'backClick' v-show="isShowBackTop"/>
    </div>
</template>

<script>


import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/featureView'
import NavBar from 'components/comment/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goods/Goodslist.vue'
import {getHomeMultidata ,getHomeGoods} from 'network/home'
import Scroll from 'components/comment/scroll/Scroll.vue' 
 import BackTop from 'components/content/backTop/BackTop.vue' 
  


export default {
    name:'Home',
    components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
        TabControl,
        GoodsList,
         BackTop,
         Scroll,  
    },
     data(){
        return{
            banners:[],
            recommends:[],
            goods:{
            'pop':{page:0,list:[] },
            'new':{page:0,list:[] },
            'sell':{page:0,list:[] },
            },
             currentType: 'pop',
            isShowBackTop:false ,
            isTabFixed:false,
            tabOffsetTop:0,
            saveY:0,
        }
    },
     computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created(){
        //异步操作
        //请求多个数据，
     this.getHomeMultidata()

        //请求商品数据
     this.getHomeGoods('pop')
     this.getHomeGoods('new')
     this.getHomeGoods('sell')
    },
    mounted(){
       /*   console.log(this.$refs.tabControl.$el.offsetTop); */
       /* this.$refs.tabControl1.$el. */
     
    },
    //销毁页面
    destroyed(){
     console.log(' home destroyed');
    },
    //进入页面
    activated(){
   /*   console.log('activated'); */
     //时间参数不能写0，否则会触发上拉加载更多，回到顶部？
      this.$refs.scroll.scroll.refresh()
     this.$refs.scroll.scrollTo(0, this.saveY, 1)
    
    },
    //离开页面
    deactivated(){
    /*  console.log('deactivated'); */
     this.saveY = this.$refs.scroll.scroll.y
    /*  console.log(this.saveY); */
    },
    methods:{
        //事件监听
     
        tabClick(index){
        switch(index){
            case 0:
                this.currentType = 'pop'
                break;
                case 1:this.currentType = 'new'
                break;
                case 2:this.currentType = 'sell'
                break; 
        }
        this.$refs.tabControl1.currentIndex = index;
         this.$refs.tabControl2.currentIndex = index;
        },

        backClick(){
             console.log('ahha');
             this.$refs.scroll.scrollTo(0, 44, 1000) 
        }, 
      
        contentScroll(position){
          /*   console.log(position); 
            console.log(this.tabOffsetTop); */
             this.isShowBackTop = (-position.y)>1000 
             this.isTabFixed = (-position.y)>this.tabOffsetTop
        }, 

        loadMore(){
         /*  console.log('三大步'); */
          this.getHomeGoods(this.currentType) 
         /*  console.log('111'); */
          //刷新better-scroll计算的高度 
          this.$refs.scroll.scroll.refresh()
        },

        swiperImageLoad(){
           /*  console.log(this.$refs.tabControl.$el.offsetTop); */
           /*  console.log(this.$refs.tabControl2.$el.offsetTop); */
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop 
        },
        //网络请求
        getHomeMultidata(){
             getHomeMultidata().then(res=>{
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list
           /*  console.log(res);
            console.log(this.recommends); */
        })
        },

        getHomeGoods(type){
            const page  = this.goods[type].page + 1
             getHomeGoods(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list) 
           this.goods[type].page += 1 
           this.$refs.scroll.finishPullUp()
           console.log(res);
        })
        },
    }
}

</script>
<style scoped>
#home{
    /* padding-top: 44px ;  */
   height: 100vh;
   position:relative;

}
.home-nav{
    background-color :var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9 ;  
}

  .content{
   position:absolute;
    top:44px; 
    bottom: 49px;
    right: 0;
    left: 0;
}  
.tabControl{
    position: relative;
     top:44px; 
    z-index: 9;
}

</style>

