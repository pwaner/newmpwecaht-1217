import { get, cutOut, post } from './axios'

class propertyList {
  //获取物业列表
  static getList(parmas) {
    return get('estates?' + parmas)
  }
  //获取物业订阅信息
  static getSubscrible(parmas) {
    return get('/subscribes/available?' + parmas)
  }
  //取消订阅
  static delSubscrible(eid) {
    return cutOut('/subscribes/' + eid)
  }
  static postSubscrible(parmas) {
    return post('/subscribes/available', parmas)
  }
  static loadEstateInfo (parmas) {
    // page=1&start=0&limit=25
    return get('/estates?' + parmas)
  }
}

export default propertyList