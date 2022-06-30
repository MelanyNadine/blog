const folders = {
 	"Onion Sites": "onions()",
	"Political Web Articles": "politics()"
};

const onions = {
	
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
	document.getElementById("buttons").innerHTML += '<a href=""><li onclick="'+value+'">'+key+'</li></a>';
  	}
}

function onions(){
	let folders = document.getElementById("folders");
	folders.style.display = "none";
	body = document.getElementByTagsName("BODY")[0];
	body.innerHTML += "<section id='sites'><ul id='list'></ul></section>";
}
