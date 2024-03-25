// TODO：请补充代码
function startGame() {
  const btn = document.getElementById("start");
  btn.style.display = "none";
  for (let index = 1; index <= 16; index++) {
    document.getElementById("fruit" + index).style.display = "block";
      document.getElementById("fruit" + index).style.transition = "1s";
      document.getElementById("fruit" + index).addEventListener(MouseEvent)
  }
  setTimeout(() => {
    for (let index = 1; index <= 16; index++) {
      document.getElementById("fruit" + index).style.display = "none";
    }
  }, 500);
  
}
