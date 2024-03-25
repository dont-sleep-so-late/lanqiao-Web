// 返回条件为真的新数组
Array.prototype.myarray = function (cb) {
  // TODO：待补充代码
  let _arr = []
  for(let i = 0; i < this.length; i++) {
    if(cb(this[i])) {
      _arr.push(this[i])
    }
  }
  return _arr
};
