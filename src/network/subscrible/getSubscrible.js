import resquert from "./subscribeApi";
import {toQueryPair} from "@/common/common"
// import { Toast } from "mint-ui";

//获取订阅列表
function getSub(limit) {
  let eid;
  let vuserInfo = localStorage.getItem("userDate");
  if (vuserInfo !== undefined) {
    let userinfo = JSON.parse(vuserInfo);
    //console.log(userinfo);
    if (userinfo !== undefined || userinfo[0] !== undefined) {
      eid = userinfo.scene.eid || userinfo[0].scene.eid;
    }
  }
  let urlData = ''
  let data = {
    page: 1,
    limit: limit
  }
  for(let key in data) {
    urlData += toQueryPair(key, data[key])
    //console.log(urlData);
  }
  let param = [
    {
      property: "subjectId",
      value: eid,
      exactMatch: true,
    },
  ];
  let filter = urlData + "&filter=" + encodeURIComponent(JSON.stringify(param));
  return resquert.getSubscrible(filter)
}

//新增订阅
function addSubscrible(estate) {
  let data;
  let ad1 = estate.ad1.toString().split("0");
  let ad2 = estate.ad2.toString().split("0");
  data = {
    relationId: estate.crId,
    ad1: ad1[0],
    ad2: ad1[1],
    ad3: ad1[2],
    ad4: ad2[0],
    ad5: ad2[1],
    appEstateFlag: 0,
    deviceFlag: 1,
    estateId: estate.ezEid,
    reportFlag: 0,
  };
  return resquert.postSubscribe(data)
}

export { getSub, addSubscrible }