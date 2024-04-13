// 监听来自content-script的消息
var displayInfos = [];
var checkDisplay = function(){
	chrome.system.display.getInfo(function(displayInfoArray){
		displayInfos = displayInfoArray
	});
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	checkDisplay()
	sendResponse(displayInfos);
});