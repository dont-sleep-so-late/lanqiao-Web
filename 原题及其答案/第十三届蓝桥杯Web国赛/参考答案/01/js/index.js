/**
 * @param {Object} oldArr
 * @param {Object} num
 * */
const splitArray = (oldArr, num) => {
  // TODO：请补充代码实现功能
  let _oldArr = [...oldArr]
  let _arr = []
  _oldArr.sort((a, b) => {
    return a - b 
  })
  // 从数组中删除前面元素的数组
  while(_oldArr.length >= num) {
    // 删除的数组会作为返回值返回出来
    let delArr = _oldArr.splice(0, num)
    _arr.push(delArr)
  }
  // 如果截取到最后的时候，有不足num的数组，则直接推入_arr中
  // console.log(_oldArr);
  if(_oldArr.length !== 0) {
    _arr.push(_oldArr)
  }
  return _arr
};
module.exports = splitArray; // 检测需要，请勿删除
