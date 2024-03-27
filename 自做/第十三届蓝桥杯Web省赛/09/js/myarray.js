// 返回条件为真的新数组
Array.prototype.myarray = function (cb) {
  // TODO：待补充代码
  var arr = this;
  var newArr = [];
  arr.forEach((item) => {
    if (cb(item)) newArr.push(item);
  });
  return newArr;
};
