import resquert from "./subscribeApi";
import { Toast } from "mint-ui";

//获取订阅列表
export function getSubscrible() {
  let eid;
  let vuserInfo = localStorage.getItem("userDate");
  if (vuserInfo !== undefined) {
    let userinfo = JSON.parse(vuserInfo);
    //console.log(userinfo);
    if (userinfo !== undefined || userinfo[0] !== undefined) {
      eid = userinfo.scene.eid || userinfo[0].scene.eid;
    }
  }
  let param = [
    {
      property: "subjectId",
      value: eid,
      exactMatch: true,
    },
  ];
  let filter = "filter=" + encodeURIComponent(JSON.stringify(param));
  return resquert.getSubscrible(filter)
}


//添加到订阅列表
export function addSubscrible(estate) {
  console.log(estate);
  getSubscrible().then((res) => {
    const itemd = res.rows;
    var items = res.rows
    if (items === undefined || items[0] === undefined) { return; }
    var item = items[0]
    var data
    if (itemd.some(e => e.ezEid == estate.ezEid)) {
      Toast("请勿重复订阅!!");
    } else {
      if (estate.crId === undefined) {
        data = {
          ad1: item.ad1,
          ad2: item.ad2,
          ad3: item.ad3,
          ad4: item.ad4,
          ad5: item.ad5,
          appEstateFlag: 0,
          deviceFlag: 1,
          estateId: item.estateId,
          reportFlag: 0
        }
      } else {
        data = {
          relationId: estate.crId,
          ad1: item.ad1,
          ad2: item.ad2,
          ad3: item.ad3,
          ad4: item.ad4,
          ad5: item.ad5,
          appEstateFlag: 0,
          deviceFlag: 1,
          estateId: item.estateId,
          reportFlag: 0
        }
      }
      return resquert.postSubscribe(data)
    }

  })
}