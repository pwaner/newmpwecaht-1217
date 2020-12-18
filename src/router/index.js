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
const MineProperty = () => {'@/view/mineProperty/mineProperty'}

const routes = [
    {
        path: '/',
        redirect: '/home'
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
        name: 'login',
        meta: {
            title: '登录'
        }
    }
    ,
    {
        path: '/mineProperty',
        component: MineProperty,
        name: 'mineProperty',
        meta: {
            title: '我的物业'
        }
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
hooks(router)
export default router