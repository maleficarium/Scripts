javascript:(function(){
	var animewatchlist = [
	"i20770",
	"i20602",
	"i20806",
	"i17827",
	"i20710",
	"i19603",
	"i20753",
	"i20757",
	"i17729",
	"i20656",
	"i20719",
	"i20646",
	"i20623",
	"i20671",
	"i20809",
	"i20790",
	"i20789",
	"i20701",
	"i20565",
	"i20720",
	"i20812",
	"i20590",
	"i20665",
	"i20672",
	"i20629",
	"i20631",
	"i20800",
	"i20729",
	"i20591",
	"i20735",
	"i20594"];
	var divs = document.querySelectorAll("div.card");
	console.error(divs.length);
	var divslength = divs.length;
	console.error(divslength);
	console.error(divslength+1);
	console.error("query chartwrap");
	var deltrig;
	for (var i = 0, len = divs.length; i < len; ++i) {
		deltrig = 1;
		console.error(String(divs.item(i).id) );
		for (var iawl = 0, lenawl = animewatchlist.length; iawl < lenawl; ++iawl) {
			console.error(String(divs.item(i).id).localeCompare(animewatchlist[iawl]));
			if(String(divs.item(i).id).localeCompare(animewatchlist[iawl]) == 0) {
				deltrig = 0;
			};
		};
		if (deltrig != 0) {
			elmDeleted = document.getElementById(divs.item(i).id);
			elmDeleted.parentNode.removeChild(elmDeleted);
		};
	};
})();