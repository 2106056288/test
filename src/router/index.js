import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Profile = () =>
    import ('../views/profile/Profile')
const Cart = () =>
    import ('../views/cart/Cart')
const Detail = () =>
    import ('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    }, {
        path: '/cart',
        component: Cart
    }, {
        path: '/category',
        component: Category
    }, {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail/:iid',
        component: Detail
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
        /* mode: 'hash' */
})

export default router