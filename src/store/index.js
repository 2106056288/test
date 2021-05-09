import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
//安装插件
Vue.use(Vuex)

//创建对象
export default new Vuex.Store({
    //存放变量
    state: {
        cartList: []
    },
    mutations,
    actions,
    getters,
    modules: {}
})