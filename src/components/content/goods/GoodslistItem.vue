<template>
  <div class="goods-item" @click="itemClick">
      <img :src="goodsItem.show.img" alt="fail to load picture">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
name:'GoodsListItem',
props:{
    goodsItem:{
        type:Object,
        default(){
            return {}
        }
    }
},
methods:{
    itemClick(){
        //用商品相关iid和detail拼接，形成新路由，再与路由表相匹配，让router-view动态渲染
        this.$router.push('/detail/'+this.goodsItem.iid)
    }
}

}
</script>

<style>
   .goods-item{
     padding-bottom:40px;
     position:relative;
     width: 48%;
   }
   .goods-item img{
       width: 100%;
       border-radius:5px;
   }
   .goods-info{
       font-size:12px ;
       position: absolute;
       bottom: 5px;
       left: 0;
       right: 0;
       overflow: hidden;
       text-align: center;
   }
   .goods-info p{
       overflow: hidden;
       text-overflow: ellipsis;
       white-space:nowrap;
       margin-bottom: 3px;
   }
   .goods-info .pprice{
       color: var(--color-hight-text);
       margin-right:20px ;
   }
   .goods-info .collect{
       position:relative;
   }
   .goods-info .collect::before{
       content:'';
       position: absolute;
       left:-15px;
       top: -1px;
       width: 14px;
       height: 14px;
       background: url("") 0 0/14px 14px;
   }
</style>