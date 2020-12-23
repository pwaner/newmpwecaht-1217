import { get, cutOut, post } from '../axios'

class subsrcibeResquert {
  //获取物业订阅信息
  static getSubscrible(parmas) {
    return get('/subscribes?' + parmas)
  } 
  //取消订阅 
  static cancelSubscribe(eid) {
    return cutOut('/subscribes/' + eid)
  }
  static postSubscribe(data) {
    //console.log(post('/subscribes/available', data));
    return post('/subscribes/available', data)
  }
}

export default subsrcibeResquert