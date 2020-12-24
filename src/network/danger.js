import { post } from './axios'

class dangerData {
  //获取报警信息
  static getdangerList(appId, openId) {
    let data = {
      openid: openId,
      appid: appId
    }
    // data = JSON.stringify(data)
    return post("/estates/policeList", data)
  }
}

export default dangerData