/* const obj = {}

obj.install = function() {
    console.log('执行了安装函数');
}
export default obj */

import Toast from './Toast'
const Toast = {
    install: function(Vue) {
        Vue.Toast('Toast', Toast)
    }
}
export default Toast