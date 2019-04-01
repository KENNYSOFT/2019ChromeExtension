/*var links=document.querySelectorAll("a.wiki-link-internal");
while(links.length>0)
{
	links[0].outerHTML=links[0].innerHTML;
	links=document.querySelectorAll("a.wiki-link-internal");
}
links=document.querySelectorAll("a.wiki-link-external");
while(links.length>0)
{
	links[0].outerHTML=links[0].outerHTML.replace(/^<a/,"<span");
	links=document.querySelectorAll("a.wiki-link-external");
}
var spans=document.querySelectorAll("span.wiki-unfold-fn");
while(spans.length>0)
{
	spans[0].remove();
	spans=document.querySelectorAll("span.wiki-unfold-fn");
}*/
var links=document.querySelectorAll("a");
for(var i=0;i<links.length;++i)
{
	links[i].href="javascript:;";
}
document.dispatchEvent(new CustomEvent("badge",{detail:{count:links.length}}));