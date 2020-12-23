import { post } from "./axios"

//密码登录
export function pLogin(userName, passwork) {
  var jsonstr = { 
    type: "TSN001",
    data: {
      lastSceneId: "6076",
      method: "auth_userpass",
      mobile: "",
      smsCode: "",
      username: userName,
      password: passwork,
    },
  };
  return post("session", jsonstr)
}

//获取验证码
export function sendSms(phone) {
  var jsonstr = {
    type: 'TU001',
    data: {
      task: 'TSN001',
      mobile: phone
    }
  };
  return post("/session", jsonstr)
}

//验证码登录
export function codeLogin(mobile, smsCode) {
  var jsonstr = {
    type: 'TSN001',
    data: {
      method: 'auth_mobile',
      mobile: mobile,
      smsCode: smsCode
    }
  };
  return post("/session", jsonstr)
}