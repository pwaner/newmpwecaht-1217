const typeList = {
  DEVICE_LIFE: 20101000, //"设备生命周期"
  DEVICE_LIFE_BEFORE: 20101100, //未使用
  DEVICE_LIFE_BEFORE_INSTALL: 20101180, //安装
  DEVICE_LIFE_RUN: 20101200, //使用
  DEVICE_LIFE_RUN_ONLINE: 20101220, //在线
  DEVICE_LIFE_RUN_OFFLINE: 20101240, //离线
  DEVICE_LIFE_PROBLEM: 20101300, // 故障
  DEVICE_LIFE_MAINTAIN: 20101400, //维修
  DEVICE_LIFE_FAULT: 20101500, //报废

  OBJECT_ALARM: 29902000, //"设备告警"),
  OBJECT_ALARM_CLOSE: 29902200, //"关闭"),
  OBJECT_ALARM_PRE: 29902310, //"预告警"),
  OBJECT_ALARM_CONFIRM: 29902320, // "待确认"),
  OBJECT_ALARM_RUN: 29902400, //"告警"),
  //预报 提示该场所可能发生有毒气体释放，应对相关设备进行检查，采取有效的预防控制措施
  OBJECT_ALARM_RUN_PRE: 29902411, //预报
  //警报 提示该工作场所空气中有毒气体已达到或超过国家职业卫生标准，应立即寻查释放点，采取相应的防止释放、通风排风和人员防护等措施
  OBJECT_ALARM_RUN_NORMAL: 29902421, //"警报"
  //高报 提示该场所有毒气体大量释放，已达到危险程度，应迅速启动应急救援预案，做好工作人员的防护和相关人群的疏散。
  OBJECT_ALARM_RUN_HIGH: 29902451, //"高报"
}

export function changeType(type) {
  if (type.indexOf('20101') !== -1) {
    switch (parseInt(type)) {
      case typeList.DEVICE_LIFE_BEFORE:
        return '未使用'
      case typeList.DEVICE_LIFE_BEFORE_INSTALL:
        return '安装'
      case typeList.DEVICE_LIFE_RUN:
        return '使用中'
      case typeList.DEVICE_LIFE_RUN_ONLINE:
        return '在线'
      case typeList.DEVICE_LIFE_RUN_OFFLINE:
        return '离线'
      case typeList.DEVICE_LIFE_PROBLEM:
        return '故障'
      case typeList.DEVICE_LIFE_MAINTAIN:
        return '维修'
      case typeList.DEVICE_LIFE_FAULT:
        return '报废'
    }
  } else if (type.indexOf('29902') !== -1) {
    switch (parseInt(type)) {
      case typeList.OBJECT_ALARM:
        return '设备告警'
      case typeList.OBJECT_ALARM_CLOSE:
        return '关闭'
      case typeList.OBJECT_ALARM_PRE:
        return '预告警'
      case typeList.OBJECT_ALARM_CONFIRM:
        return '待确认'
      case typeList.OBJECT_ALARM_RUN:
        return '告警'
      case typeList.OBJECT_ALARM_RUN_PRE:
        return '预报 (提示该场所可能发生有毒气体释放，应对相关设备进行检查，采取有效的预防控制措施)'
      case typeList.OBJECT_ALARM_RUN_NORMAL:
        return '警报 (提示该工作场所空气中有毒气体已达到或超过国家职业卫生标准，应立即寻查释放点，采取相应的防止释放、通风排风和人员防护等措施)'
      case typeList.OBJECT_ALARM_RUN_HIGH:
        return '高报 (提示该场所有毒气体大量释放，已达到危险程度，应迅速启动应急救援预案，做好工作人员的防护和相关人群的疏散)'
    }
  } else {
      return "未知"
  }
}