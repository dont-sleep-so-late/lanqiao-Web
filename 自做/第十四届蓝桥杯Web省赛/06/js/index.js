const bullets = [
  "前方高能",
  "原来如此",
  "这么简单",
  "学到了",
  "学费了",
  "666666",
  "111111",
  "workerman",
  "学习了",
  "别走，奋斗到天明",
];

/**
 * @description 根据 bulletConfig 配置在 videoEle 元素最右边生成弹幕，并移动到最左边，弹幕最后消失
 * @param {Object} bulletConfig 弹幕配置
 * @param {Element} videoEle 视频元素
 * @param {boolean} isCreate 是否为新增发送的弹幕，为 true 表示为新增的弹幕
 *
 */
function renderBullet(bulletConfig, videoEle, isCreate = false) {
  const spanEle = document.createElement("SPAN");
  spanEle.classList.add(`bullet${index}`);
  if (isCreate) {
    spanEle.classList.add("create-bullet");
  }
  // TODO：控制弹幕的显示颜色和移动，每隔 bulletConfig.time 时间，弹幕移动的距离  bulletConfig.speed
  spanEle.innerHTML = bulletConfig.value
  // console.log(getEleStyle(videoEle));
  spanEle.style.color = `rgb(${getRandomNum(255, 150)},${getRandomNum(255, 150)},${getRandomNum(255, 150)})`
  let leftSpan = getEleStyle(videoEle).width
  spanEle.style.left = leftSpan + 'px'
  spanEle.style.top = getRandomNum(getEleStyle(videoEle).height - getEleStyle(spanEle).height) + 'px'
  videoEle.appendChild(spanEle);
  setInterval(() => {
    leftSpan -= bulletConfig.speed
    spanEle.style.left = leftSpan + 'px'
  },bulletConfig.time)
  console.log(bulletConfig, videoEle);

}
// 发送按钮
document.querySelector("#sendBulletBtn").addEventListener("click", () => {
  // TODO:点击发送按钮，输入框中的文字出现在弹幕中
  const _bulletContent = document.getElementById('bulletContent');
  const _value = bulletContent.value;
  bulletContent.value = ''
  const _bulletConfig = {
    isHide: false, // 是否隐藏
    speed: 5, // 弹幕的移动距离
    time: 50, // 弹幕每隔多少ms移动一次
    value: "", // 弹幕的内容
  }
  _bulletConfig.value = _value
  renderBullet(_bulletConfig, videoEle,true);
  // const danmu = document.getElementsByName("creat-bullet");
  // return danmu;
});

function getEleStyle(ele) {
  // 获得元素的width,height,left,right,top,bottom
  return ele.getBoundingClientRect();
}

function getRandomNum(end, start = 0) {
  // 获得随机数，范围是 从start到 end
  return Math.floor(start + Math.random() * (end - start + 1));
}

// 设置 index 是为了弹幕数组循环滚动
let index = 0;
const videoEle = document.querySelector("#video");
// 弹幕配置
const bulletConfig = {
  isHide: false, // 是否隐藏
  speed: 5, // 弹幕的移动距离
  time: 50, // 弹幕每隔多少ms移动一次
  value: "", // 弹幕的内容
};
let isPlay = false;
let timer; // 保存定时器
document.querySelector("#vd").addEventListener("play", () => {
  // 监听视频播放事件，当视频播放时，每隔 1000s 加载一条弹幕
  isPlay = true;
  bulletConfig.value = bullets[index++];
  renderBullet(bulletConfig, videoEle);
  timer = setInterval(() => {
    bulletConfig.value = bullets[index++];
    renderBullet(bulletConfig, videoEle);
    if (index >= bullets.length) {
      index = 0;
    }
  }, 1000);
});

document.querySelector("#vd").addEventListener("pause", () => {
  isPlay = false;
  clearInterval(timer);
});

document.querySelector("#switchButton").addEventListener("change", (e) => {
  if (e.target.checked) {
    bulletConfig.isHide = false;
  } else {
    bulletConfig.isHide = true;
  }
});
