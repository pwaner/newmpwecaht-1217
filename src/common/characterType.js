const characterType = {
  SS_OWNER: 11100, // 主体1的所有者
  SS_LEGAL_REPRESENT: 11101, // 法人的法人代表
  SS_MANAGE: 11300, // 主体1的管理者
  SS_CONTACT: 11301, // 主体1的联系人
  SS_RELATION: 11500, // 主体1的关联人
  SS_MEMBER: 11501, // 主体1的自然人成员
  SS_FIRE: 11502, // 主体1的消防责任人
  SS_OTHER: 11900, // 主体1的其他关系
  SS_GROUP: 11901, // 法人的法人群组
  SS_LEGAL2: 11902, // 法人的二级法人
  SS_AGENT: 11903, // 主体1的代理人
  SS_MIN: 11000,
  SS_MAX: 11999,
  SO_OWNER: 12100, // 客体的所有者
  SO_MANAGE: 12300, // 客体的管理者
  SO_RELATION: 12500, // 客体的关联人
  OBJECT_OBJECT: 22000, // 客体和客体关系
  OO_OWNER: 22100, // 客体1拥有客体2
  OO_MANAGE: 22300, // 客体1管理客体2
  OO_RELATION: 22500, // 客体1使用客体2
  LEVEL2_COUNT: 99,
}

function isRelationType(type, value) {
  if (!value) return false
  if (value < type) return false
  if (value > calcTypeMax(type)) return false
  return true
}

function calcTypeMax(type) {
  var divs = 10
  var maxadd = 0
  var check
  check = Math.floor(type / divs) * divs
  while (check === type) {
    maxadd = divs - 1
    divs = divs * 10
    check = Math.floor(type / divs) * divs
  }
  return type + maxadd
}

export function convert2crType(crType) {
  if (isRelationType(characterType.SS_OWNER, crType)) {
    switch (crType) {
      case characterType.SS_LEGAL_REPRESENT:
        return '法人代表'
      default:
        return '所有者'
    }
  } else if (isRelationType(characterType.SS_MANAGE, crType)) {
    switch (crType) {
      case characterType.SS_CONTACT:
        return '联系人'
      default:
        return '管理者'
    }
  } else {
    switch (crType) {
      case characterType.SS_RELATION:
        return '成员'
      case characterType.SS_MEMBER:
        return '成员'
      case characterType.SS_FIRE:
        return '消防责任人'
      case characterType.SS_OTHER:
        return '其他'
      case characterType.SS_GROUP:
        return '法人群组'
      case characterType.SS_LEGAL2:
        return '二级法人'
      case characterType.SS_AGENT:
        return '代理人'
      default:
        return '个人物业'
    }
  }
}