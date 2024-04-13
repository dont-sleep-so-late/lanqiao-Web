
chrome.system.display.getInfo(function(displayInfoArray){
    console.log(111,displayInfoArray)
    //do something with displayInfoArray
});


chrome.runtime.onConnect.addListener(function (port) {//建立监听
     port.onMessage.addListener(function (msg) {//监听消息
	     port.postMessage({jia: "yuuuuu"});//向扩展同返回消息，
     });
});