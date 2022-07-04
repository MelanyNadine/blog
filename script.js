const folders = {
 	"Onion Sites": "onions()",
	"Political Web Articles": "politics()"
};

const onion = {
	"Imperial Library of Trantor": "http://kx5thpx2olielkihfyo4jgjqfb7zx7wxr3sd4xzt26ochei4m6f7tayd.onion/",
	"Onion Index": "http://oniondxjxs2mzjkbz7ldlflenh6huksestjsisc3usxht3wqgk6a62yd.onion",
	"The Guardian": "http://xp44cagis447k3lpb4wwhcqukix6cgqokbuys24vmxmbzmaq2gjvc2yd.onion",
	"Relate List": "http://relateoak2hkvdty6ldp7x67hys7pzaeax3hwhidbqkjzva3223jpxqd.onion",
	"Exploit.In": "http://exploitivzcm5dawzhe6c32bbylyggbjvh5dyvsvb5lkuz5ptmunkmqd.onion",
	"The Hidden Wiki": "http://zqktlwiuavvvqqt4ybvgvi7tyo4hjl5xgfuvpdf6otjiycgwqbym2qad.onion/wiki/Main_Page",
	"Best Carding World": "http://bestteermb42clir6ux7xm76d4jjodh3fpahjqgbddbmfrgp4skg2wqd.onion"
};

function listFolders() {

	function sortObject(folders) {
  		return Object.keys(folders).sort().reduce(function (result, key) {
    		result[key] = folders[key];
    		return result;
  		}, {});
	}	
	
	let sortedFolders =  sortObject(folders);

  	Object.entries(sortedFolders).forEach(listElements);
	
	function listElements([key, value]) {
		let final = key.indexOf(" ");
		let str = key.slice(0,final);
		document.getElementById("buttons").innerHTML += '<a href="+'+str+'" onclick="'+value+'"><li>'+key+'</li></a>';
  	}
}

function onions(){
	let folders = document.getElementById("folders");
	folders.style.display = "none";
	body = document.getElementsByTagName("BODY")[0];
	body.innerHTML += "<section id='sites'><ul id='list'></ul></section>";
	
	Object.entries(onion).forEach(listOnions);
	
	function listOnions([key, value]) {
		document.getElementById("list").innerHTML += "<li><a href='"+value+"'>"+key+"</a></li>";
	}
}
