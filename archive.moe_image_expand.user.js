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
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div"); 
  // var newContent = document.createTextNode("Hi there and greetings!"); 
  var newContent = document.createElement("BUTTON");        // Create a <button> element
  //var t = document.createTextNode("EXPAND");       // Create a text node
  var t = document.createTextNode("Expand Images");       // Create a text node  
  newContent.appendChild(t);                                // Append the text to <button>
  newContent.onclick = ExpandImages;
  newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
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

		// thisLink.src = thisLink.src.replace('board/a/thumb/', 'board/a/image/');
		// thisLink.src = thisLink.src.replace('s.', '.');
		imgurl = thisLink.parentNode.getAttribute("href");
		//thisLink.setAttribute("height", "100%");
		//thisLink.setAttribute("width", "100%");

		thisLink.removeAttribute("height");
		//thisLink.removeAttribute("width");

		thisLink.setAttribute("width", "100%");

		thisLink.setAttribute("src", imgurl);
		
		


	}
}