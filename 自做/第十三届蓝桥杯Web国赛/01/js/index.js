/**
 * @param {Object} oldArr
 * @param {Object} num
 * */
const splitArray = (oldArr, num) => {
  // TODO：请补充代码实现功能
  var newArr = [];
  oldArr.sort(fn);
  for (let i = 0; i < oldArr.length; i += num) {
    newArr.push(oldArr.slice(i, i + num));
  }
  return newArr;
};
const fn = (a, b) => {
  return a - b;
};
// module.exports = splitArray; // 检测需要，请勿删除
