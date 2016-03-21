javascript:(function(){
	var animewatchlist = [
	"21342",
	"21275",
	"21249",
	"21045",
	"21131",
	"21277",
	"21034",
	"20881",
	"20991",
	"20913",
	"21237",
	"21268",
	"21286",
	"20712",
	"21128",
	"21087",
	"20771",
	"20993",
	"21347",
	"21092",
	"21066",
	"21110",
	"21110",
	"21118",
	"21190",
	"20704",
	"21273",
	"21116",
	"21218",
	"21187",
	"21038",
	"21285",
	"21320",
	"21156",
	"21182",
	"21228",
	"21343",
	"21225",
	"21243",
	"21224",
	"21352",
	"21246",
	"21283",
	"21301"];
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