<template>
    <TabBar>
    <tab-bar-item path='/home' activeColor="blue">
    <img slot="item-icon"  src="~assets/img/tabbar/首页.svg" alt="fail to load picture">
    <img slot="item-icon-1"  src="~assets/img/tabbar/首页-1.svg" alt="fail to load picture">
    <div slot="item-text">首页</div>
     </tab-bar-item>

     <tab-bar-item  path='/cart'>
     <img slot="item-icon"  src="~assets/img/tabbar/购物车.svg" alt="fail to load picture">
       <img slot="item-icon-1"  src="~assets/img/tabbar/购物车-1.svg" alt="fail to load picture">
     <div slot="item-text">购物车</div>
     </tab-bar-item>

       <tab-bar-item  path='/category'>
        <img slot="item-icon"  src="~assets/img/tabbar/分类.svg" alt="fail to load picture">
          <img slot="item-icon-1"  src="~assets/img/tabbar/分类-1.svg" alt="fail to load picture">
       <div slot="item-text">分类</div>
       </tab-bar-item>

         <tab-bar-item  path='/profile'>
          <img slot="item-icon"  src="~assets/img/tabbar/我的.svg" alt="fail to load picture">
            <img slot="item-icon-1"  src="~assets/img/tabbar/我的-1.svg" alt="fail to load picture">
          <div slot="item-text">我的</div>
         </tab-bar-item>
  </TabBar>
</template>

<script>
import TabBar from 'components/comment/tabbar/TabBar.vue'
import TabBarItem from 'components/comment/tabbar/TabBarItem.vue'
export default {
    name:'MainTabBar',
    components:{
TabBar,
TabBarItem
    }
}
</script>>