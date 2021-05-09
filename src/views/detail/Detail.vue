<template>
 <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type='3'> 
    <detail-swiper :top-images='topImages'></detail-swiper>
    <detail-base-info :goods='goodsInfo'/>
    <detail-shop-info :shop='shop'></detail-shop-info>
    <!-- <detail-goods-info :detail-info='detailInfo'  @detailimageload='detailimageload'/> -->
    <detail-param-info :paramInfo='paramInfo' ref="params"/>
    <detail-comment ref="comment"/>
    <goods-list  ref="recommend" :goods='showGoods'/>

    </scroll>
      <back-top @click.native= 'backClick' v-show="isShowBackTop"/>
    <detail-bottom-bar @addToCart = 'AddToCart'/>
    <toast :message='message' v-show="show"/>
 </div> 
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar' 
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailComment from './childComps/DetailComment'
import GoodsList from '../../components/content/goods/Goodslist.vue'
import {getHomeMultidata ,getHomeGoods}  from 'network/home'
import DetailBottomBar from './childComps/DetailBottomBar'
import Toast from 'components/comment/toast/Toast'

import Scroll from 'components/comment/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue' 
import {getDetail,Goods,Shop,GoodsParam} from 'network/detail'
/* import {mapActions} from 'vuex' */



export default {
name:'Detail',
components:{
 DetailNavBar,
 DetailSwiper,
 DetailBaseInfo,

DetailShopInfo,
DetailGoodsInfo,
DetailParamInfo,
DetailComment,
GoodsList,
Scroll,
 BackTop,
DetailBottomBar,
Toast,


},
data(){
 return {
    iid:null,
    topImages:[],
    goodsInfo:{},
    shop:{},
    detailInfo:{},
    paramInfo:{},
    themeTopYs:[],
      isShowBackTop:false ,
     goods:{
            'pop':{page:0,list:[] },
            'new':{page:0,list:[] },
            'sell':{page:0,list:[] },
            },
             currentType: 'pop',
             message:'',
             show:false
    }
},
computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
created(){
    //获取iid
      this.iid = this.$route.params.iid 
     /*  this.iid = this.$route.query.iid  */
     this.getHomeMultidata()

    this.getHomeGoods('pop')
     this.getHomeGoods('new')
     this.getHomeGoods('sell')
     //根据iid请求详情数据
    getDetail(this.iid).then(res =>{
         console.log(res); 
        const data  = res.result
        //获取轮播图数据
        this.topImages = res.result.itemInfo.topImages

        //获取商品信息
        this.goodsInfo = new Goods( data.itemInfo, data.columns, data.shopInfo.services)

        //获取店铺信息
        this.shop = new Shop(data.shopInfo)

        //获取商品详细信息
        this.detailInfo = data.detailInfo

        //获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        
        //获取评论信息
        if(data.rate.cRate !==0){
            this.commmentInfo = data.rate.list[0]
        }
        this.$nextTick(()=>{
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)

           /*  console.log(this.themeTopYs); */
        })
    })
    
},
mounted(){
},
methods:{
    /* ...mapActions(['addToCart']), */
     contentScroll(position){
          this.isShowBackTop = (-position.y)>1000 
       let length = this.themeTopYs.length
        const positionY=-position.y
        for(let i = 0;i<length;i++){
           
            if((i<length-1&&positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])
            ||(i===length-1&&positionY>this.themeTopYs[i]))
            {
                /* console.log(i); */
                this.$refs.nav.currentIndex = i;
            }
        }
    },

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
         
           /* console.log(res); */
        })
        }, 

    detailimageload(){
        this.$refs.scroll.refresh() 
    },

    titleClick(index){
       /*  console.log(index); */
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },

      backClick(){
             console.log('ahha');
             this.$refs.scroll.scrollTo(0, 44, 1000) 
        }, 
        AddToCart(){
            /* console.log('----'); */
            //获取购物车需要展示的信息
            const product ={}
            product.image = this.topImages[0]
            product.title = this.goodsInfo.title
            product.desc = this.goodsInfo.desc
            product.price = this.goodsInfo.realPrice
            product.iid = this.iid

            //把product作为对象提交到仓库里的addCart去执行相关操作
            this.$store.dispatch('addToCart',product).then(res=>{
                this.show = true
               this.message  = res
               setTimeout(()=>{
                   this.show = false
               },1500) 

             
      })
      //映射
      /* this.addToCart(product).then(res=>{
          console.log(res);
      }) */
    }
  },
}
</script>

<style scoped>
.detail{
    height: 100vh;  
   /*  height: 700px;  */ 
    background-color: #fff;
    position: relative;
    z-index: 1;
}

 .content{ 
    background-color: #fff;
       height: calc(100% - 93px);     
} 
</style>