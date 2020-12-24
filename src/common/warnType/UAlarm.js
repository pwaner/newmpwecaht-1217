const UAlarm = {
  ALRM_METER: 20120000, //表计设备报警分类
  //1.2
  METER_ELEC: 20121100, //用电报警
  ELEC_CURRENT: 20121110, //电流报警
  ELEC_CURRENT_PHASE: 20121111, //电流过载
  ELEC_CURRENT_RESIDUAL: 20121112, //剩余电流过载
  ELEC_VOLTAGE: 20121120, //电压报警
  ELEC_VOLTAGE_PHASE: 20121121, //电压报警
  ELEC_ENERGY: 20121130, //电量报警
  ELEC_TEMPERATURE: 20121140, //电线温度报警
  ELEC_TEMPERATURE_WIRE: 20121141, //电线温度报警
  ELEC_POWER: 20121150, //电路功率报警
  ELEC_POWER_FACTOR: 20121151, //总功率因数报警
  ELEC_ARCING: 20121160, //电路电弧报警
  ELEC_ARCING_FAULT: 20121161, //故障电弧报警
  //1.1
  METER_WATER: 20123100, //用水报警
  //1.1
  METER_GAS: 20125100, //用气报警
  //1.1
  METER_AMBIENT: 20127100, //环境检测报警
  AMBIENT_CONCN_GAS: 20127111, //气体浓度超标
  AMBIENT_TH: 20127120, //温湿度报警
  AMBIENT_TEMPERATURE: 20127121, //温度报警
  AMBIENT_HUMIDITY: 20127122, //湿度报警
  AMBIENT_LIQUID_LEVEL: 20127131, //水位报警
  //1
  ALARM_SENSOR: 20130000, //感应器触发
  //1.1
  SENSOR_SMOKE: 20130100, //烟感报警
  SENSOR_TEMPERATURE: 20130200, //温感报警
  SENSOR_INFRARED: 20130300, //红外报警
  SENSOR_DOOR: 20130400, //门磁设备
  SENSOR_BUTTON: 20130500, //按键设备
  ASB_SOS: 20130501, //紧急呼救
  //1.1
  SENSOR_WATER: 20130600, //液体感应报警
  ASW_LOGGING: 20130601, //水浸报警
  //1.1
  SENSOR_GAS: 20130700, //气体感应报警
  ASG_01: 20130701, //燃气报警
  //1
  ALARM_MONITOR: 20140000, //监控告警
  MONITOR_CAMERA: 20140100, //摄像枪告警"),
  MONITOR_CAMERA_VV1: 20140101, //违停告警"),
  //1
  ALARM_OTHER: 20150000, //其他报警
  OTHER_EXTERNAL: 20151100, //外部报警
  EXTERNAL_BTN: 20151101, //紧急按钮
  //
  //0
  ALARM_APP: 30000000, //应用报警
  //1
  ALARM_APPESTATE: 32020000, //物业应用报警
  APPESTATE_ACTIVITY: 32021100, //物业活动报警
  APPESTATE_ACTIVITY_CONTROL: 32021101, //活动异常
}

export function convert2crType(cType) {
  if (cType.indexOf('201211') !== -1) {
    switch (parseInt(cType)) {
      case UAlarm.METER_ELEC:
        return '用电报警'
      case UAlarm.ELEC_CURRENT:
        return '电流报警'
      case UAlarm.ELEC_CURRENT_PHASE:
        return '电流过载'
      case UAlarm.ELEC_VOLTAGE:
        return '电流过载'
      case UAlarm.ELEC_CURRENT_RESIDUAL:
        return '剩余电流过载'
      case UAlarm.ELEC_VOLTAGE || UAlarm.ELEC_VOLTAGE_PHASE:
        return '电压报警'
      case UAlarm.ELEC_ENERGY:
        return '点量报警'
      case UAlarm.ELEC_TEMPERATURE || UAlarm.ELEC_TEMPERATURE_WIRE:
        return '电线温度报警'
      case UAlarm.ELEC_POWER:
        return '电路功率报警'
      case UAlarm.ELEC_POWER_FACTOR:
        return '总功率因数报警'
      case UAlarm.ELEC_ARCING:
        return '电路电弧报警'
      case UAlarm.ELEC_ARCING_FAULT:
        return '故障电弧报警'
    }
  } else if (cType.indexOf('201271') !== -1) {
    switch (parseInt(cType)) {
      case UAlarm.METER_AMBIENT:
        return '环境检测报警'
      case UAlarm.AMBIENT_CONCN_GAS:
        return '气体浓度超标'
      case UAlarm.AMBIENT_TH:
        return '温湿度报警'
      case UAlarm.AMBIENT_TEMPERATURE:
        return '温度报警'
      case UAlarm.AMBIENT_HUMIDITY:
        return '湿度报警'
      case UAlarm.AMBIENT_LIQUID_LEVEL:
        return '水位报警'
    }
  } else if (cType.indexOf('201301') !== -1) {
    switch (parseInt(cType)) {
      case UAlarm.SENSOR_SMOKE:
        return '烟感报警'
      case UAlarm.SENSOR_TEMPERATURE:
        return '温感报警'
      case UAlarm.SENSOR_INFRARED:
        return '红外报警'
      case UAlarm.SENSOR_DOOR:
        return '门磁设备'
      case UAlarm.SENSOR_BUTTON:
        return '按键设备'
      case UAlarm.ASB_SOS:
        return '紧急呼救'
      case UAlarm.SENSOR_WATER:
        return '液体感应报警'
      case UAlarm.ASW_LOGGING:
        return '水浸报警'
      case UAlarm.SENSOR_GAS:
        return '气体感应报警'
      case UAlarm.ASG_01:
        return '燃气报警'
        default: 
        return "111"
    }
  } else if (cType.indexOf('2014') !== -1) {
    switch (parseInt(cType)) {
      case UAlarm.ALARM_MONITOR:
        return '监控告警'
      case UAlarm.MONITOR_CAMERA:
        return '摄像枪告警'
      case UAlarm.MONITOR_CAMERA_VV1:
        return '违停告警'
    }
  } else if (cType.indexOf('2015') !== -1) {
    switch (parseInt(cType)) {
      case UAlarm.ALARM_OTHER:
        return '其他报警'
      case UAlarm.OTHER_EXTERNAL:
        return '外部报警'
      case UAlarm.EXTERNAL_BTN:
        return '紧急按钮'
    }
  } else if (cType.indexOf('3202') !== -1) {
    switch (parseInt(cType)) {
      case UAlarm.ALARM_APPESTATE:
        return '物业应用报警'
      case UAlarm.APPESTATE_ACTIVITY:
        return '物业活动报警'
      case UAlarm.APPESTATE_ACTIVITY_CONTROL:
        return '活动异常'
    }
  } else {
    switch (parseInt(cType)) {
      case UAlarm.METER_WATER:
        return '用水报警'
      case UAlarm.METER_GAS:
        return '用气报警'
      default:
        return '未知警报'
    }
  }

}


