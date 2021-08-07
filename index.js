const patterns = {
  mobileNum: /^1[3456789]\d{9}$/,
  landlineNum: /^([0-9]{3,4}-)?[0-9]{7,8}$/,
  cn: /[\u4e00-\u9fa5]/, // chinese
  posInt: /^[1-9]\d*$/, // 正整数
  urlAddress: /^(((ht|f)tps?):\/\/)?[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/,
  // 正数货币金额,可最多保留两位小数
  posMoney: /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/,
  // 货币金额，包含负数，可最多保留两位小数
  money: /(?:^-?[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/,
  // 包含新能源和非新能源
  carNum: /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z][A-HJ-NP-Z](?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳])$/,
  email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  // 身份证号
  idCardNum: /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$/,
  qqNum: /^[1-9][0-9]{4,10}$/,
  wechatNum: /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,
}

const isPhoneNum = (num, type = 'all') => {
  const {mobileNum,landlineNum} = patterns
  const validMap = {
    mobile: mobileNum.test(num),
    landline: landlineNum.test(num),
    all: mobileNum.test(num) || landlineNum.test(num)
  }
  return validMap[type]
}

const singleValid = (patternType,content) => {
  const pattern = patterns[patternType]
  return pattern ? pattern.test(content) : false
}

export {
  patterns,
  isPhoneNum,
  singleValid,
}