<template>
  <div>
      <nav-bar class="nav-bar">
          <div slot='left' class="back" @click="backClick">
              <img src="~assets/img/back/back.svg" alt="fail to load picture">
          </div>
          <div slot="center" class="title">
              <div v-for="(item,index) in titles" class="titles-item"
              :class="(index == currentIndex ? 'active':'')" 
              @click="titleClick(index)">{{item}}</div>
          </div>
          <div slot="right"></div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/comment/navbar/NavBar.vue'
export default {
name:'DetailNavBar',
components:{
    NavBar
},
data(){
    return {
     titles:['商品','参数','评论','推荐'],
      currentIndex:0 
    }
},
methods:{
    titleClick(index){
        console.log('index',index); 
        this.currentIndex = index ;
        console.log('current',this.currentIndex);
        this.$emit('titleClick1', this.currentIndex)
    },
    backClick(){
        //返回上一级
       this.$router.back()
       /* this.$router.go(-1) */
    }
}
}
</script>

<style scoped>
.nav-bar{
     position: relative;
    z-index: 9; 
    background-color: #fff;
}

.title{
    display: flex;
}
.titles-item{
    flex: 1;
}
.active{
    color: red;
}
.back img{
    height: 25px;
    width: 25px;
    margin-top: 10px;
    margin-left: 15px;
    
}

</style>