// import router from 'ROUTE/' // 为避免循环依赖，改用如下传入的方式
// import {Toast} from 'mint-ui'
import helpers from '@/common/helpers'
// 权限拦截
const authInterceptor = (to, from, next) => {
  const needAuth = to.meta;
  //console.log("needAuth :" + needAuth.title);
  // localStorage.setItem("isBinding", "true");  //仅测试用
  
  if (needAuth.title !== "登录" && !helpers.isLogin()) {
    next({
      path: '/login',
      query: { redirect: to.path }
    })
  }
    if (!needAuth && helpers.isLogin()) {
      next({
        path: '/',
        query: { redirect: to.path }
      })
    }
    next()
}

export default authInterceptor
