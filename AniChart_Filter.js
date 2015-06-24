javascript:(function(){
	var animewatchlist = [
	"21058",
	"21078",
	"21055",
	"20997",
	"21112",
	"20879",
	"20754",
	"20773",
	"20487",
	"20994",
	"20849",
	"20987",
	"21033",
	"20951",
	"20807",
	"20774",
	"21093",
	"20694",
	"20832",
	"21189",
	"20955",
	"20560",
	"20910",
	"21009",
	"21205",
	"21038",
	"21086",
	"20819",
	"20935",
	"21018",
	"20953",
	"20566",
	"20772",
	"20923",
	"20729",
	"21192",
	"21059",
	"21200",
	"21223",
	"21179",
	"21044",
	"20984",
	"21136",
	"21108",
	"21204"];
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