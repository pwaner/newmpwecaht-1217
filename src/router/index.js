import Vue from 'vue'
import VueRouter from 'vue-router'
import hooks from './hooks'

Vue.use(VueRouter)

const Home = () => import('@/view/home/home')
const Profile = () => import('@/view/profile/profile')
const ProfileMain = () => import('@/view/profileMain/profileMain')
const News = () => import('@/view/news/news')
const Warning = () => import('@/view/warning/warning')
const Danger = () => import('@/view/danger/danger')
const Login = () => import('@/view/login/login')
const Property = () => import('@/view/property/property')
const Subsrcibe = () => import('@/view/subsrcibe/subsrcibe')
const PropertyDetail = () => import('@/view/propertyDetail/propertyDetail')
const PropertySurvey = () => import('@/view/propertySurvey/propertySurvey')
const Scene = () => import('@/view/scene/scene')

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/scene',
        component: Scene,
        name: "scene",
        meta: {
            title: '场景列表'
        }
    },
    {
        path: '/propertySurvey',
        component: PropertySurvey,
        name: "propertySurvey",
        meta: {
            title: '物业报告'
        }
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
        name: "property",
        component: Property,
        meta: {
            title: '我的物业'
        }
    },
    {
        path: '/subsrcibe',
        component: Subsrcibe,
        name: 'subsrcibe',
        meta: {
            title: '我的订阅'
        }
    },
    {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            title: '首页'
        }
    },
    {
        path: '/profile',
        component: Profile,
        name: 'profile',
        meta: {
            title: '我的'
        }
    },
    {
        path: '/profileMain',
        component: ProfileMain,
        name: "profileMain",
        meta: {
            title: '物业报告'
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