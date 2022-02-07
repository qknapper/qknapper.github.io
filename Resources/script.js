function featuredPage() 
{
	var link = document.getElementById("FeaturedPage");
	var pages = ["PlayingCards", "SwagMeter", "Visitor'sLog"];
	var images = ["cards", "swag", "visitor"];
	var random = Math.floor(Math.random() * pages.length);

	link.innerHTML = '<a href=\"' + pages[random] + '\"><img class=\"sidebar\" src=\"Resources/' + images[random] + '.png\"></a>';
}

function randomPage()
{
	var pages = ["PlayingCards", "SwagMeter", "Visitor'sLog"];
	var random = Math.floor(Math.random() * pages.length);
	window.location.href = pages[random];
}