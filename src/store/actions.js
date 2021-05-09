export default {
    addToCart(context, payload) {
        //查找之前数组是否有该商品
        return new Promise((resolve, _reject) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

            if (oldProduct) {
                context.commit('addCounter', oldProduct)
                resolve('当前商品数量+1')
            } else {
                payload.count = 1
                context.commit('addCart', payload)
                resolve('成功添加新的商品')
            }
        })
    }
}