import originAxios from "axios"


function request(option) {
  return new Promise((resolve, reject) => {
    const instance = originAxios.create({
      baseURL: '',
      timeout: 5000
    });
    // 配置请求和响应拦截
    instance.interceptors.request.use(config => {
      // console.log('来到了request拦截success中');
      // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画
      // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面
      // 3.对请求的参数进行序列化(看服务器是否需要序列化)
      // config.data = qs.stringify(config.data)
      // console.log(config);
      return config
    }, err => {
      // console.log('来到了request拦截failure中');
      return err
    })

    instance.interceptors.response.use(response => {
      // console.log('来到了response拦截success中');
      return response.data
    }, err => {
      //console.log('来到了response拦截failure中');
      return err
    })

    // 2.传入对象进行网络请求
    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })

}
// 微信登录接入

export function getWechatOption() {
  return request({
    url: 'https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN'
  })
}

