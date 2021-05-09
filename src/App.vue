 <template>
  <div id="app">
   <keep-alive exclude="Detail">
      <router-view></router-view>
   </keep-alive>
    <main-tab-bar/>
  </div>
</template>
<script>
import MainTabBar from 'components/content//maintabbar/MainTabBar.vue'

export default {
  name:'app',
  components:{
    MainTabBar
  }
}
</script>

<style>
@import 'D:/frontendprogram/vue-2/supermall/supermall1/src/assets/css/base.css';
</style>
