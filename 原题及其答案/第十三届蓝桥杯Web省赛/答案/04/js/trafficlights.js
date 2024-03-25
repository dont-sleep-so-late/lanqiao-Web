// TODO：完善此函数 显示红色颜色的灯
function red() {
  let redlight = document.querySelector('#redlight')
  redlight.style.display = 'inline-block'
}

// TODO：完善此函数  显示绿色颜色的灯
function green() {
  let greenlight = document.querySelector('#greenlight')
  greenlight.style.display = 'inline-block'
}

// TODO：完善此函数
function trafficlights() {
  function allHidden() {
    let imgs = document.querySelector('#container').querySelectorAll('img')
    for(let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = 'none'
    }
  }
  setTimeout(() => {
    // 干掉所有人
    allHidden()
    // 把灯变为红色
    red()
    setTimeout(()=>{
      // 干掉所有人
      allHidden()
      // 把灯变为绿色
      green()
    },3000)
  },3000)
}

trafficlights();
