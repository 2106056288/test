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
        //请求轮播图，recommend数据，
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
      //home组件被<keep-alive/>包含，所以离开时不会触发destroyed函数
     /* console.log(' home destroyed'); */
    },

    //进入页面
    activated(){
     //时间参数不能写0，否则会触发上拉加载更多，回到顶部！
      this.$refs.scroll.scroll.refresh()
     this.$refs.scroll.scrollTo(0, this.saveY, 1)
    
    },

    //离开页面
    deactivated(){
      //根据滑轮位置，保存离开页面时的y轴位置保存至saveY
     this.saveY = this.$refs.scroll.scroll.y
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
             this.$refs.scroll.scrollTo(0, 44, 1000) 
        }, 
      
        contentScroll(position){
          //当滑轮滑动至-1000一下时，将返回顶部组件显示出来
             this.isShowBackTop = (-position.y)>1000 
             this.isTabFixed = (-position.y)>this.tabOffsetTop
        }, 

        loadMore(){
          //获取当前点击类型的商品数据
          this.getHomeGoods(this.currentType) 
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
          //将请求过来的数据保存至data以至于不会丢失
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list
        })
        },

        getHomeGoods(type){
          //请求数据后，将虚拟页面数+1，以展示数据
            const page  = this.goods[type].page + 1
             getHomeGoods(type,page).then(res=>{
            //将请求过来的数据先使用扩展运算符展开，再压入到data中的goods的相应数组类型来保存，以至于不会丢失
            this.goods[type].list.push(...res.data.list) 
           //将真实页面数+1,达到饱和
           this.goods[type].page += 1 
           this.$refs.scroll.finishPullUp()
        })
        },
    }
}

</script>
<style scoped>
#home{
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

