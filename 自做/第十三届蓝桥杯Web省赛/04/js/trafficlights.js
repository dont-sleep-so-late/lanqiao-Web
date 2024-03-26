// TODO：完善此函数 显示红色颜色的灯
function red() {
  document.getElementById("defaultlight").style.display = "none";
  document.getElementById("redlight").style.display = "inline-block";
}

// TODO：完善此函数  显示绿色颜色的灯
function green() {
  document.getElementById("redlight").style.display = "none";
  document.getElementById("greenlight").style.display = "inline-block";
}

// TODO：完善此函数
function trafficlights() {
  setTimeout(() => {
    red();
    setTimeout(() => {
      green();
      setTimeout(() => {
        document.getElementById("greenlight").style.display = "none";
        document.getElementById("defaultlight").style.display = "inline-block";
      }, 3000);
    }, 3000);
  }, 3000);
}

trafficlights();
