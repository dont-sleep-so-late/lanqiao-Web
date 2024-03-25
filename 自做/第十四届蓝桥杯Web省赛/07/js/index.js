// 保存翻译文件数据的变量
let translation = {};
// 记录当前语言
let currLang = "zh-cn";

// TODO: 请在此补充代码实现项目数据文件和翻译数据文件的请求功能
// TODO-END

// TODO: 请修改以下代码实现项目数据展示的功能
// 以下代码（13-23行）为 createProjectItem 函数使用示例
// Mock一个项目的数据


// 添加至页面的项目列表中，查看页面可以看到有一行 bun 的项目数据

// TODO-END

// 用户点击切换语言的回调
$(".lang").click(() => {
  // 切换页面文字的中英文
  if (currLang === "en") {
    $(".lang").text("English");
    currLang = "zh-cn";
  } else {
    $(".lang").text("中文");
    currLang = "en";
  }
  $("body")
    .find("*")
    .each(function () {
      const text = $(this).text().trim();
      if (translation[text]) {
        $(this).text(translation[text]);
      }
    });
  // TODO: 请在此补充代码实现项目描述的语言切换
});

// 生成列表DOM元素的函数，将该元素的返回值append至列表中即可生成一行项目数据
/**
 * @param  {string} name - 项目名称
 * @param  {string} description - 项目描述
 * @param  {string[]} tags - 项目标签
 * @param  {number} stars - 项目star数量
 * @param  {string} icon - 项目icon路径
 */
function createProjectItem({ name, description, tags, stars, icon }) {
  return `
    <li class="item">
      <img src="images/${icon}" alt="">
      <div class="desc">
        <h3>${name}</h3>
        <p>${description}</p>
        <ul class="labels">
          ${tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
      </div>
      <div class="stars">
        +${stars} 🌟
      </div>
    </li>
  `;
}
