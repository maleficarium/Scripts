javascript:(function(){
	var animewatchlist = [
	"20785",
	"20853",
	"20755",
	"20931",
	"20652",
	"20746",
	"20840",
	"20758",
	"20553",
	"20744",
	"20815",
	"20657",
	"20627",
	"20678",
	"20850",
	"20922",
	"20827",
	"20770",
	"20806",
	"20753",
	"20623",
	"20671",
	"20790",
	"20789",
	"20665",
	"20812",
	"20729",
	"20793",
	"21054",
	"20935",
	"21018",
	"20920",
	"20930",
	"20792",
	"20979",
	"20912",
	"17919",
	"20727",
	"20953",
	"20906",
	"20983",
	"20566",
	"21027",
	"20772",
	"20829",
	"20872",
	"20964",
	"20814",
	"20923",
	"20843",
	"20762",
	"20839",
	"20949",
	"20698",
	"20966",
	"21000",
	"20998",
	"21079",
	"21040"];
	var divs = document.querySelectorAll("div.card");
	var divslength = divs.length;
	var deltrig;
	for (var i = 0, len = divs.length; i < len; ++i) {
		deltrig = 1;
		for (var iawl = 0, lenawl = animewatchlist.length; iawl < lenawl; ++iawl) {
			if(String(divs.item(i).id).localeCompare("i"+animewatchlist[iawl]) == 0) {
				deltrig = 0;
			};
		};
		if (deltrig != 0) {
			elmDeleted = document.getElementById(divs.item(i).id);
			elmDeleted.parentNode.removeChild(elmDeleted);
		};
	};
})();