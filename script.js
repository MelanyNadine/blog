const folders = {
 	"Onion Sites": "./",
  "Political Web Articles": "./"
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
	document.getElementById("buttons").innerHTML += '<a href="'+value+'"><li>'+key+'</li></a>';
  	}
}
