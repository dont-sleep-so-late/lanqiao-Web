window.onload = async () => {
  const MockUrl = `./js/data.json`; // 请求地址
  let data = []; // 存储请求后的数据
  // TODO：待补充代码，目标 1
  let data2 = await axios.get(MockUrl);
  data = data2.data;
  // TODO：END
  // 请求完成后调用下面的代码
  const newData = getData(data);
  showData(newData);
  removeDuplicates(newData);
};

/**
 * 将同一天浏览的相同商品去重并作为数组返回
 * @param {Array} defaultData json 文件中读取到的原始数据
 * @returns 去重后的数据，数据结构与 defaultData 相同
 */
const removeDuplicates = (defaultData) => {
  let newData = [];
  // TODO：待补充代码，目标 2
  for (let i = 0; i < defaultData.length; i++) {
    for (let j = i + 1; j < defaultData.length; j++) {
      if (defaultData[i].id == defaultData[j].id) {
        newData.push(defaultData[i]);
      }
    }
  }
  return newData;
};

/**
 * 将去重后的数据根据字段 viewed_on（格式化为 YYYY-MM-DD） 降序排序
 * @param {*} defaultData 去重后的数据
 * @returns 根据字段 viewed_on（格式化为 YYYY-MM-DD） 降序排序
 */
const sortByDate = (defaultData) => {
  let newData = [];
  // TODO：待补充代码，目标 3
  const date = new Date()
  defaultData.forEach((item) => {
    item.viewed_on = date.toJSON(item.viewed_on);
    newData.push(item);
  });
  console.log(newData);
  return newData;
};
/**
 * 将去重排序后的所有商品数据，作为一个对象存储并返回
 * @param {Array} defaultData 重后的所有商品数据
 * @returns
 */
const transformStructure = (defaultData) => {
  let newData = {};
  // TODO：待补充代码，目标 4

  return newData;
};
const getData = (defaultData) => {
  let newData = removeDuplicates(defaultData);
  let sortData = sortByDate(newData);
  let objData = transformStructure(sortData);
  return objData;
};
const showData = (data) => {
  let str = ``;
  for (let k in data) {
    str += `<h3>${k}</h3>`;
    data[k].forEach((goods) => {
      str += `<div class="container">
      	<div class="image"></div>
      	<div class="details">
      		<h4>${goods.name}</h4>
      		<p>${goods.description}</p>
      		<p class="buy">
      		  <span class="price">¥${goods.price}</span>
      		  <img src="./images/cart.svg" alt="" srcset="">
      		</p>
      	</div>
      </div>`;
    });
  }
  document.querySelector("#goodsList").innerHTML = str;
};
