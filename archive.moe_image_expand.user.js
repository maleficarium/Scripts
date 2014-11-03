// ==UserScript==
// @name        archive.moe image expand
// @namespace   personal_moe
// @description Expands images in archive.moe
// @include     http://archive.moe/* 
// @version     0.9
// @grant       none
// ==/UserScript==


var links,thisLink;
links = document.evaluate("//img",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
for (var i=0;i<links.snapshotLength;i++) {
    var thisLink = links.snapshotItem(i);

	// thisLink.src = thisLink.src.replace('board/a/thumb/', 'board/a/image/');
	// thisLink.src = thisLink.src.replace('s.', '.');
	imgurl = thisLink.parentNode.getAttribute("href");
	thisLink.setAttribute("src", imgurl);
	
	
	thisLink.setAttribute("height", "100%");
	thisLink.setAttribute("width", "100%");
	// thisLink.removeAttribute("height");
	// thisLink.removeAttribute("width");
}