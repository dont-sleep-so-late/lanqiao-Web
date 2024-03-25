/**
 * @param {Object} oldArr
 * @param {Object} num
 * */
const splitArray = (oldArr, num) => {
  // TODO：请补充代码实现功能
  var arr = [];
  oldArr = oldArr.sort(func);
  for (let index = 0; index < oldArr.length; index = index + num) {
    arr.push(oldArr.slice(index, index + num));
  }
  return arr;
};

const func = (a, b) => {
  console.log(a, b);
  return a - b;
};
module.exports = splitArray; // 检测需要，请勿删除
