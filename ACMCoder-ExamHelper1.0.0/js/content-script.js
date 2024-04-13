console.log("这是content script!");

// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener("DOMContentLoaded", function () {
  // 注入自定义JS
  // injectCustomJs('https://examacmcoder.oss-accelerate.aliyuncs.com/release/exam/2.1.12/plugins/tools/chrome-plugin.js')
  setInterval(() => {
    sendMessageToBackground('checkMultiDisplay')
  },1000)
  sendMessageToBackground('checkMultiDisplay')
});

// //向页面注入定制Div
// function injuectCustomDiv(){
//   // injectCustomJs('https://examacmcoder.oss-accelerate.aliyuncs.com/release/exam/2.1.12/plugins/tools/chrome-plugin.js')
// }

// 向页面注入JS
function injectCustomJs(jsPath) {
  jsPath = jsPath || "js/inject.js";
  var temp = document.createElement("script");
  temp.setAttribute("type", "text/javascript");
  // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
  // temp.src = chrome.extension.getURL(jsPath);
  temp.src = jsPath;
  temp.onload = function () {
    // 放在页面不好看，执行完后移除掉
    // this.parentNode.removeChild(this);
  };
  document.body.appendChild(temp);
}

// 接收来自后台的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "showAll") {
    sendResponse("我收到你的消息了：" + JSON.stringify(request));
    return true;
  } else {
    tip(JSON.stringify(request));
    sendResponse("我收到你的消息了：" + JSON.stringify(request));
  }
});

// 要演示此功能，请打开控制台主动执行sendMessageToBackground()
function sendMessageToBackground(message) {
  try{
    chrome.runtime.sendMessage(
      { greeting: message || "你好，我是content-script" },
      function (response) {
        // console.log('获取到分屏数量：',response)
        if(response && response.length > 0){
          if(document.getElementById('displayNum')){
            document.getElementById('displayNum').value = response.length
          }
          if(document.getElementById('displayInfo')){
            document.getElementById('displayInfo').value = JSON.stringify(response)
          }
          if(document.getElementById('displayTime')){
            document.getElementById('displayTime').value = Date.now()
          }
        }
      }
    );
  }
  catch(e){}
}

