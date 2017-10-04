
$(document).ready(function() {
	$("#searchButton").on("click",searchArticle);
});

function renderSearchResults(json) {
	var html = "<ul>";
	var searchResults = json.query.search;
	searchResults.forEach(function(resultEntry){
		html +=  "<li>" + "<a href=\"http://en.wikipedia.org/?curid=" + resultEntry.pageid + "\"><div>" + "<h4>" + resultEntry.title + "</h4>" + "<p>" + resultEntry.snippet + "</p>" + "</div></a>" + "</li>"
	});
	html += "</ul>";
	$("#searchResults").html(html);
}

function clearSearchResultDisplay() {
	$("#searchResults").html("");
}

function searchArticle(){
	var baseUrl = "https://en.wikipedia.org/w/api.php\?";
	var searchString = $("#searchInput").val().replace(" ","%");
	var fullUrl = "";
	if (searchString != "") {
		fullUrl = baseUrl + "origin=*&action=query&format=json&list=search&utf8=1&srsearch=" + searchString;
		$.getJSON(fullUrl,renderSearchResults);
	}else{
		clearSearchResultDisplay();
	}
}
