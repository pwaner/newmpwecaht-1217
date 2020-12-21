import Vue from 'vue'
import VueRouter from 'vue-router'
import hooks from './hooks'

Vue.use(VueRouter)

const Home = () => import('@/view/home/home')
const Profile = () => import('@/view/profile/profile')
const News = () => import('@/view/news/news')
const Warning = () => import('@/view/warning/warning')
const Danger = () => import('@/view/danger/danger')
const Login = () => import('@/view/login/login')
const Property = () => import('@/view/property/property')
const Subscribe = () => import('@/view/subscribe/subscribe')
const PropertyDetail = () => import('@/view/propertyDetail/propertyDetail')

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/propertyDetail',
        component: PropertyDetail,
        name: "propertyDetail",
        meta: {
            title: '物业详情'
        }
    },
    {
        path: '/property',
        component: Property,
        meta: {
            title: '我的物业'
        }
    },
    {
        path: '/subscribe',
        component: Subscribe,
        meta: {
            title: '我的订阅'
        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '我的'
        }
    },
    {
        path: '/news',
        component: News,
        meta: {
            title: '资讯列表'
        }
    },
    {
        path: '/warning',
        component: Warning,
        meta: {
            title: '告警信息'
        }
    },
    {
        path: '/danger',
        component: Danger,
        meta: {
            title: '警情信息'
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登录'
        }
    }
    
]


const router = new VueRouter({
    mode: 'history',
    routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location)
}
hooks(router)
export default router