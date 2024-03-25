// TODO：请补充代码
function startGame() {
  // 点击开始按钮后，开始按钮隐藏，让图片显示又隐藏
  $('#start').hide()
  $('.img-box').children('img').show(700)
  $('.img-box').children('img').hide(700)

  // 记录当前页面显示的图片数量
  let showImgNum = 0
  // 记录场上只有一个图片时，那个图片盒子的信息
  let lastBox = null

  // 游戏开始前的过渡时期，不应该允许点击盒子
  let flag = false
  setTimeout(() => {
    flag = true
  }, 800)
  // 事件委托，只绑定一次
  // 这里不能用箭头函数，因为箭头函数得不到点击的this
  $('.container').on('click','.img-box', async function() {
    // 判断是否让这个代码执行
    if(!flag) return
    // 点击的两次元素，如果时同一个元素，则停止函数的执行
    if(lastBox && $(lastBox).attr("id") === $(this).attr("id")) return
    // 当前点击逻辑未执行完毕的时候，其实我们不应该让下面代码继续执行
    flag = false
    // 显示点击的图片
    $(this).children('img').show()
    showImgNum++
    // 方法二：promise的解决方案
    if(showImgNum === 2) await showDouble.call(this)
    // 记录上一次点击的元素

    // 方法一: 定时器的解决方案
    // setTimeout(() => {
    //   lastBox = this
    // },500)
    
    lastBox = this

    // 方法三：if判断的解决方案
    // if(showImgNum === 1) lastBox = this

    flag = true
  })

  // 显示两个图片之后，调用这个函数
  function showDouble() {
    return new Promise((resolve, reject) => {
      // 因为js是静态作用域，函数内this指向是函数声明的地方的this
      // console.log(this)
      
      // 把当前当上水果的数量设置为0
      showImgNum = 0

      // 对比两次点击盒子的信息是否相同
      if($(this).children('img').attr('alt') === $(lastBox).children('img').attr('alt')) {
        setTimeout(() => {
          // 获取当前的分数
          // 需要把获取的分数转换成数字类型
          let currentScore = $('#score').html() >> 0
          $('#score').html(currentScore + 2)

          // 如果水果相同，则两个盒子都隐藏
          $(this).css('visibility', 'hidden')
          $(lastBox).css('visibility', 'hidden')
          // 当定时器里面的代码都执行完毕的时候才提示上面那个函数，存储当前的元素
          resolve()
        }, 300)
      } else {
        setTimeout(() => {
          // 获取当前的分数
          // 需要把获取的分数转换成数字类型
          let currentScore = $('#score').html() >> 0
          $('#score').html(currentScore - 2)

          // 如果水果不相同，则两个水果都隐藏
          $(this).children('img').hide()
          $(lastBox).children('img').hide()
          // 当定时器里面的代码都执行完毕的时候才提示上面那个函数，存储当前的元素
          resolve()
        }, 300)
      }
    })
  }
}
