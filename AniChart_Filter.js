javascript:(function(){
	var animewatchlist = [
	"97821",
	"21830",
	"97643",
	"21856",
	"21851",
	"21563",
	"21676",
	"21685",
	"97874",
	"21773",
	"21662",
	"21361",
	"87517",
	"21894",
	"87500",
	"97670",
	"97932",
	"97980",
	"21517",
	"21700",
	"21180",
	"97660",
	"97903",
	"21452",
	"21184",
	"20958",
	"21860",
	"20705",
	"98297",
	"98077",
	"97625",
	"98202",
	"21865",
	"97642",
	"98239",
	"98231",
	"97682",
	"21858",
	"97638",
	"98425",
	"98290",
	"97765",
	"97909",
	"97862",
	"98252",
	"98420",
	"98228",
	"98442",
	"98203"];
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