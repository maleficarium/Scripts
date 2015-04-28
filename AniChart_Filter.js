javascript:(function(){
	var animewatchlist = [
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
	"20772",
	"20876",
	"20829",
	"20872",
	"20964",
	"20814",
	"20923",
	"20843",
	"20762",
	"20839",
	"20698",
	"20966",
	"20755",
	"20729",
	"21054",
	"21000",
	"21027",
	"20998",
	"21079",
	"20833",
	"20949"];
	var divs = document.querySelectorAll("div.card");
	var deltrig;
	for (var i = 0, len = divs.length; i < len; ++i) {
		deltrig = 1;
		for (var il = 0, ilen = animewatchlist.length; il < ilen; ++il) {
			if(String(divs.item(i).id).localeCompare("i"+animewatchlist[il]) == 0) {
				deltrig = 0;
			};
		};
		if (deltrig != 0) {
			elemDeleted = document.getElementById(divs.item(i).id);
			elemDeleted.parentNode.removeChild(elemDeleted);
		};
	};
})();