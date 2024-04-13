/**
 * 定义一个可重置的一次性函数
 * @param {func} fn 要作用的函数
 * @returns {object} {runOnce:func, reset:func } 
 */
var tem = 0;
var fn1 = () =>{}
function resetableOnce(fn) {
    // TODO: 待补充代码
    let flag = true //是不是第一次执行
    function runOnce(a,b) {
        if (flag || fn1 != fn) {
          flag = false;
          fn1 = fn;
          tem = fn(a, b);
          return tem;
        } else  {
            return tem;
        }
    }
    function reset() {
        flag = true;
    }  
    // TODO: END
    return { runOnce, reset};
}


// 测试用例 1：resetableOnce（fn） fn 有参数的情况
// 定义一个加法函数
// function addNumbers(a, b) {
//     return a + b;
//   }
  
// const test1 = resetableOnce(addNumbers);
// console.log(test1.runOnce(2, 3)); // 输出: 5
// console.log(test1.runOnce(4, 5)); // 第二次调用不会执行加法操作，返回上次执行的值，输出: 5

// // 重置 once
// test1.reset();
// console.log(test1.runOnce(4, 5)); // 因为重置，addNumbers 再次执行，输出: 9

// // 测试用例 2：resetableOnce（fn） fn 无参数的情况
// let a = 10;
// let fn = () => {
// return a = a + 1;
// };
// const test2 = resetableOnce(fn); // 传入了不同的函数，之前的 once 不针对此函数生效。
// console.log(test2.runOnce()); //输出 11
// console.log(test2.runOnce()); // 输出 11
// test2.reset();
// console.log(test2.runOnce()); // 输出 12

// 以下代码为检测需要，请勿删除
try {
    module.exports = resetableOnce;
} catch (e) {}
