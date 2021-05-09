<template>
    <div class="cart">
        <nav-bar class="nav-bar">
        <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <cart-list class="cart-list" :cart-list="cartList"></cart-list>
        <cart-bottom-bar/>
    </div>
</template>

<script>
import NavBar from 'components/comment/navbar/NavBar.vue'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
import CheckOut from 'components/comment/checkout/CheckOut.vue'
import {mapGetters} from 'vuex'
export default {
    name:'Cart',
    components:{
        NavBar,
        CartList,
        CartBottomBar,
        CheckOut
    },
    computed:{
        ...mapGetters(['cartLength','cartList']) 

       /*  ...mapGetters({
            length:'cartLength',
            list:'cartList'
        }) */

       /*  cartLength(){
            return this.$store.getters.cartlength
        } */

    }
}
</script>

<style scoped>
   .nav-bar{
       background-color: var(--color-tint);
       color:#fff;
       font-weight: 700;
   }
</style>