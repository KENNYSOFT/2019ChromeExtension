console.log("??");
var removenamulink=document.createElement("script");
removenamulink.src=chrome.extension.getURL("removenamulink.js");
removenamulink.onload=function()
{
	this.remove();
};
(document.head||document.documentElement).appendChild(removenamulink);
document.addEventListener("badge",function(e)
{
	var message=Object.assign({type:e.type},e.detail);
	chrome.runtime.sendMessage(message);
});