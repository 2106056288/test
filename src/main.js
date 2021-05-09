import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/comment/toast/Toast.vue'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast)

//解决移动端300毫米延迟
FastClick.attach(document.body)

//图片懒加载
Vue.use(VueLazyload, {
    loading: require('../src/assets/img/placehold/placeholder.png')
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')