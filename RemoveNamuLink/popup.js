window.onload=function()
{
	document.getElementById("count_total").innerText=Number(localStorage["count_total"]||"0").toLocaleString();
	document.getElementById("title").innerHTML=chrome.runtime.getManifest().name+"&nbsp;v"+chrome.runtime.getManifest().version;
};