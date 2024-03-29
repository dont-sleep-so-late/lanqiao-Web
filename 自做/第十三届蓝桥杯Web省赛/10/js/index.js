let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数

// TODO：待补充代码
var data;
axios.get("js/carlist.json").then((res) => {
  data = res.data;
  maxPage = Math.ceil(data.length / 5);
  showPageData(data, pageNum);
});

function showPageData(data, pageNum) {
  pageData = data.slice((pageNum - 1) * 5, pageNum * 5);
  document.querySelector(
    "#pagination"
  ).innerHTML = `共${maxPage}页，当前${pageNum}页`;
  showPagination(pageData);
}

function showPagination(pageData) {
  document.querySelector("#list").innerHTML = pageData.map(
    (item) => `
        <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${item.name} uni-app</h5>
            <small>${(item.price / 100).toFixed(2)}元</small>
          </div>
          <p class="mb-1">
            ${item.description}
          </p>
        </a>
      </div>
  `
  );
}

// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function () {
  // TODO：待补充代码
  next.classList.remove("disabled");
  pageNum--;
  if (pageNum <= 1) {
    this.classList.add("disabled");
    pageNum = 1;
  }
  showPageData(data, pageNum);
};
// 点击下一页
let next = document.getElementById("next");
next.onclick = function () {
  // TODO：待补充代码
  prev.classList.remove("disabled");
  pageNum++;
  if (pageNum >= maxPage - 1) {
    this.classList.add("disabled");
    pageNum = maxPage;
  }
  showPageData(data, pageNum);
};
