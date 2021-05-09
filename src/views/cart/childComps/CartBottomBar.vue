<template>
  <div class="bottom-bar">
     <div class="check-content">
        <check-button class="check-button" :isChecked='isSelectAll' @click.native="checkAll"/>
        <span>全选</span>
     </div>
     <div class="price">合计：{{totalPrice}}</div>
     <div class="calculate" @click="calcClick">去计算({{checkLength}})</div>
     <toast :message='message' v-show="show"/>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton.vue'
import Toast from 'components/comment/toast/Toast'
export default {
  name:'CartBottomBar',
  data(){
    return {
      message:'',
      show:false
    }
  },
  components:{
    CheckButton,
    Toast
  }, 
  computed:{
      totalPrice(){
          return '￥' + this.$store.state.cartList.filter(item=>{
              return item.checked
          }).reduce((preValue, item)=>{
            return preValue + item.price * item.count
          },0).toFixed(2)
      },
      checkLength(){
          return this.$store.state.cartList.filter(item=>item.checked).length
      },
      isSelectAll(){
        /* return !(this.$store.state.cartList.filter(item=>!item.checked).length) */
        if (this.$store.state.cartList.length === 0)
        return false 
        else
        return !(this.$store.state.cartList.find(item=>!item.checked))
      }
  },
  methods:{
    checkAll(){
      if(this.isSelectAll)
      this.$store.state.cartList.forEach(item=>item.checked = false)
      else this.$store.state.cartList.forEach(item=>item.checked = true)
    },
    calcClick(){
       /* this.$store.dispatch('calcClick',product).then(res=>{
                this.show = true
               this.message  = res
               setTimeout(()=>{
                   this.show = false
               },1500)  })*/
                 if(this.$store.state.cartList.length === 0)
                 {
                  this.show = true
                 this.message = '请先添加商品至购物车'
                  setTimeout(()=>{
                this.show = false
                 this.message = ''
              },1500)}  else if (this.$store.state.cartList.every(item=>
                item.checked === false))
              {
                 this.show = true
                 this.message = '请至少选择一件商品进行结算'
                  setTimeout(()=>{
                this.show = false
                 this.message = ''},1500)
              } 
              else{
                 this.show = true
                 this.message = '正在跳转，请勿离开'
                  setTimeout(()=>{
                this.show = false
                 this.message = ''},1500)
              }
      }
  }}
</script>

<style>
  .bottom-bar{
    display: flex;
    position: fixed;

    bottom: 49px;
    line-height: 40px;
    width: 100%;
    height: 40px;

    background-color: #eee;
   
   
 } 
 .check-content{
   display: flex;
   align-items: center;
   margin-left: 10px;
  width: 60px;
 }
  .check-button{
         width: 20px;
         height: 20px;
         line-height: 20px;
         margin-right: 5px;
     }
     .price{
         margin-left: 30px;
         flex:1;
     }
     .calculate{
         width: 90px;
         background-color: red;
         color:#fff;
         text-align: center;
     }
</style>