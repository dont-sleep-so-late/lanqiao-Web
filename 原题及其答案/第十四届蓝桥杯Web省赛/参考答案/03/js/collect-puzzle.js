function collectPuzzle(...puzzles) {
  // 思考一:下列数组如何去重?
  // let arr = [{
  //   name: '张三',
  //   age: 18
  // },{
  //   name: '张三',
  //   age: 18
  // }]
  
  // TODO: 在这里写入具体的实现逻辑
  let _puzzles = []
  puzzles.forEach( val => {
    _puzzles.push(...val)
  })
  const setPuzzles = new Set(_puzzles)
  _puzzles = [...setPuzzles]
  return _puzzles
}
// 检测需要，请勿删除
module.exports = collectPuzzle;
