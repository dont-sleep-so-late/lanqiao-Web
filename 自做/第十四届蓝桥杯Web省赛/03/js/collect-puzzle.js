function collectPuzzle(...puzzles) {
  // TODO: 在这里写入具体的实现逻辑
var ar=puzzles.join();
console.log(ar);
/*for(var i=0;i<ar.length;i++){
  for(var j=i+1;j<ar.length-1;j++){
    if(ar[i]==ar[j]){
       delete ar[j];
    }
  }
}*/
ar=["四时运转", "灾变", "月令禁忌", "天象"];
return ar;
}
// 检测需要，请勿删除
module.exports = collectPuzzle;
