javascript:(function(){
	var animewatchlist = [
	"i20785",
	"i20853",
	"i20755",
	"i20931",
	"i20652",
	"i20746",
	"i20840",
	"i20758",
	"i20553",
	"i20744",
	"i20815",
	"i20657",
	"i20627",
	"i20678",
	"i20850",
	"i20922",
	"i20827",
	"i20770",
	"i20806",
	"i20753",
	"i20623",
	"i20671",
	"i20790",
	"i20789",
	"i20665",
	"i20812",
	"i20729",
	"i20793",
	"i21054",
	"i20935",
	"i21018",
	"i20920",
	"i20930",
	"i20792",
	"i20979",
	"i20912",
	"i17919",
	"i20727",
	"i20953",
	"i20906",
	"i20983",
	"i20566",
	"i21027",
	"i20772",
	"i20829",
	"i20872",
	"i20964",
	"i20814",
	"i20923",
	"i20843",
	"i20762",
	"i20839",
	"i20949",
	"i20698",
	"i20966",
	"i21000",
	"i20998",
	"i21079",
	"i21040"];
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