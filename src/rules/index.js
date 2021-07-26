const phoneRule = /^0\d{2,3}-?\d{7,8}$/
const mobildRule = /^1[3|4|5|7|8][0-9]{9}$/
export function checkEnergyOfficialPhone(rule, value, callback) {
  if (!phoneRule.test(value) && !mobildRule.test(value)) {
    return callback(new Error('电话格式不正确'))
  }
}

export function aliasLength(rule, value, callback) {
  if (value && value.length >= 30) {
    return callback(new Error('别名最多30位字符'))
  } else {
    callback()
  }
}
