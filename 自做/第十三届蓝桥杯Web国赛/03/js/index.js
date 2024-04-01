// TODO：请补充代码
function startGame() {
  const btn = $(".btn");

  for (let index = 1; index <= 16; index++) {
    $(`fruit${index}`).style.display = "block";
    $(`fruit${index}`).addEventListener(MouseEvent);
  }
  setTimeout(() => {
    for (let index = 1; index <= 16; index++) {
      $(`fruit${index}`).style.display = "none";
    }
  }, 500);
}
