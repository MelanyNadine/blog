const folders = {
 	"Onion Sites": "onions()",
	"Political Web Articles": "politics()"
};

const onion = {
	"Imperial Library of Trantor": "http://kx5thpx2olielkihfyo4jgjqfb7zx7wxr3sd4xzt26ochei4m6f7tayd.onion/",
	"Onion Index": "http://oniondxjxs2mzjkbz7ldlflenh6huksestjsisc3usxht3wqgk6a62yd.onion",
	"The Guardian": "http://xp44cagis447k3lpb4wwhcqukix6cgqokbuys24vmxmbzmaq2gjvc2yd.onion",
	"Relate List": "http://relateoak2hkvdty6ldp7x67hys7pzaeax3hwhidbqkjzva3223jpxqd.onion"
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
	document.getElementById("buttons").innerHTML += '<li onclick="'+value+'">'+key+'</li>';
  	}
}

function onions(){
	let folders = document.getElementById("folders");
	folders.style.display = "none";
	body = document.getElementsByTagName("BODY")[0];
	body.innerHTML += "<section id='sites'><ul id='list'></ul></section>";
	let sortedOnions = sortObject(onion);
	
	Object.entries(sortedOnions).forEach(listOnions);
	
	function listOnions([key, value]) {
		document.getElementById("list").innerHTML += "<a href='"+value+"'><li>"+key+"</li></a>";
	}
}
