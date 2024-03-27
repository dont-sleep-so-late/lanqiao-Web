let pageNum = 1; // 当前页码，默认页码1
let maxPage = 1; // 最大页数

// TODO：待补充代码
axios.get("js/carlist.json").then((res) => {
  console.log(res.data);
});

// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function () {
  // TODO：待补充代码
};
// 点击下一页
let next = document.getElementById("next");
next.onclick = function () {
  // TODO：待补充代码
};
