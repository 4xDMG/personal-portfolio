$(document).ready(function() {
	$("#search-field").keypress(function(e) {
		if(e.which===13) {
			wikiSearch();
		}
	});
	
	$("#search-icon").click(function() {
		wikiSearch();
	});
	
	function wikiSearch() {
		$("div.result").remove();
		var searchTerm = $("#search-field").val();
		searchTerm=searchTerm.replace(" ","+");
		var apiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&prop=pageimages|extracts&pilimit=20&pithumbsize=100&exintro&exsentences=1&exlimit=20&gsrsearch="+searchTerm+"&callback=?";
		$.getJSON (apiUrl, function(data) {
			for (var i in data.query.pages) {
				if (typeof data.query.pages[i].thumbnail != 'undefined') {
					$('.container').append("<a href='http://en.wikipedia.org/?curid=" + data.query.pages[i].pageid +"' target=_blank><div class='result'> <img src='" + data.query.pages[i].thumbnail.source + "' /> <h3>" + data.query.pages[i].title + "</h3>" + "<br /> <p>"+ data.query.pages[i].extract + "</p>" + "</div></a>	");
				} else {
					$('.container').append("<a href='http://en.wikipedia.org/?curid=" + data.query.pages[i].pageid +"' target=_blank><div class='result'> <h3>" + data.query.pages[i].title + "</h3>" + "<br /> <p>"+ data.query.pages[i].extract + "</p>" + "</div></a>	");
				}
			}
		});
	}
	
});
