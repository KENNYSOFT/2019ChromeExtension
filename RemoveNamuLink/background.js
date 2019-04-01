chrome.runtime.onInstalled.addListener(function(details)
{
	if(details.reason==="install")localStorage["count_total"]=0;
});
function getTabId()
{
	return new Promise((resolve,reject)=>
	{
		chrome.tabs.query({currentWindow:true,active:true},(result=[])=>
		{
			if(!result.length)reject();
			console.log(result);
			resolve(result[0].id);
		});
	});
}
function getBadgeText(details)
{
	return new Promise((resolve,reject)=>
	{
		chrome.browserAction.getBadgeText(details,(result)=>{resolve(result);});
	});
}
function setBadgeText(details)
{
	chrome.browserAction.setBadgeText(details);
}
chrome.runtime.onMessage.addListener(async function(message,sender,sendResponse)
{
	switch(message.type)
	{
	case "badge":
		break;
	default:
		return;
	}
	localStorage["count_total"]=Number(localStorage["count_total"]||0)+message.count;
	var tabId=await getTabId();
	setBadgeText({text:String(message.count),tabId:tabId});
});