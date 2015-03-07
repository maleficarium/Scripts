// ==UserScript==
// @name        archive.moe image expand
// @namespace   personal_moe
// @description Expands images in archive.moe
// @include     *archive.moe/* 
// @version     0.9
// @grant       none
// ==/UserScript==

document.body.onload = addElement;

function addElement () { 
  var newDiv = document.createElement("div"); 
  var newContent = document.createElement("BUTTON");
  var t = document.createTextNode("Expand Images");
  newContent.appendChild(t);
  newContent.onclick = ExpandImages;
  newDiv.appendChild(newContent);

  var currentDiv = document.getElementById("MathJax_Message"); 
  document.body.insertBefore(newDiv, currentDiv); 
}


function ExpandImages (argument) {
	var links,thisLink;
	links = document.evaluate("//img",
	    document,
	    null,
	    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	    null);
	for (var i=0;i<links.snapshotLength;i++) {
	    var thisLink = links.snapshotItem(i);

		imgurl = thisLink.parentNode.getAttribute("href");

		thisLink.removeAttribute("height");
		thisLink.setAttribute("width", "100%");
		thisLink.setAttribute("src", imgurl);
	}
}