/**
 * @param {*} initialValue 初始值
 * @param {Array} sequence 由普通函数或 Promise 函数组成的数组
 * @return {Promise}
 */

const pipeline = (initialValue, sequence) => {
  // TODO: 待补充代码
  const fn = () => {
    new Promise((resolve) => {
      sequence[0](initialValue).then((res) => {
        sequence[1](res).then((res) => {
          sequence[2](res).then((res) => {
            sequence[3](res).then((res) => {
              sequence[4](res).then((res) => {
                return res;
              });
            });
          });
        });
      });
    });
  }
  return fn()
};

// 检测需要，请勿删除
try {
  module.exports = { pipeline };
} catch {}
