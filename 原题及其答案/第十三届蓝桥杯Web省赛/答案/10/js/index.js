let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数

// TODO：待补充代码
let globalData
// 入口函数
(async function() {
  // 拿数据
  let axiosResult = await axios.get('./js/carlist.json')
  globalData = axiosResult.data
  // 计算一下总页面数量
  maxPage = Math.ceil(axiosResult.data.length / 5)
  render()
})()
// 渲染函数，用于渲染页面
function render() {
  // 每次渲染页面的时候，都应该重新渲染当前页面和总页面数量
  renderCurrentPageAndMaxPage()
  // 每次渲染页面的时候，都应该判断上下页的按钮是否禁用
  disableBtn()
  // 获取内容dom元素
  let list = document.querySelector('#list')
  // 当前第一个元素的索引
  let beforeIndex = (pageNum - 1) * 5
  let contentLength = pageNum === maxPage ? globalData.length - beforeIndex : 5
  // 定义页面内容
  let content = ''
  for(let i = 0; i < contentLength; i++) {
    content += `
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${globalData[beforeIndex + i].name}</h5>
          <small>${(globalData[beforeIndex + i].price / 100).toFixed(2)}元</small>
        </div>
        <p class="mb-1">${globalData[beforeIndex + i].description}</p>
      </a>
    </div>
    `
  }
  list.innerHTML = content
}
function disableBtn() {
  // 获取上一页的按钮
  let prev = document.querySelector('#prev')
  // 获取下一页的按钮
  let next = document.querySelector('#next')
  // 判断当前是否为第一页，如果是，则给上一页添加disabled类名
  prev.classList.remove('disabled')
  next.classList.remove('disabled')
  if(pageNum === 1) {
    prev.classList.add('disabled')
  }
  if(pageNum === maxPage) {
    next.classList.add('disabled')
  }
}
// 在页面中渲染当前页数和总页数
function renderCurrentPageAndMaxPage() {
  // 获取页面中对应的p标签
  let pagination = document.querySelector('#pagination')
  pagination.innerHTML = `共${maxPage}页，当前${pageNum}页`
}
// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function () {
  // TODO：待补充代码
  // 判断当前是否为第一页，如果是，则不执行函数
  if(pageNum === 1) return
  // 点击上一页，当前页面数量-1
  pageNum--
  // 每次修改页码之后，就需要重新渲染一下页面
  render()
};
// 点击下一页
let next = document.getElementById("next");
next.onclick = function () {
  // TODO：待补充代码
  // 判断当前是否为最后一页，如果是，则不执行函数
  if(pageNum === maxPage) return
  // 点击下一页，当前页面数量+1
  pageNum++
  // 每次修改页码之后，就需要重新渲染一下页面
  render()
};
