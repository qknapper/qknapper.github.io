function featuredPage() 
{
	var link = document.getElementById("FeaturedPage");
	var pages = ["PlayingCards", "SwagMeter", "Visitor'sLog", "A1MarioWorld"];
	var images = ["cards", "swag", "visitor", "a1"];
	var random = Math.floor(Math.random() * pages.length);

	link.innerHTML = '<a href=\"' + pages[random] + '\"><img class=\"sidebar\" src=\"Resources/' + images[random] + '.png\"></a>';
}

function randomPage()
{
	var pages = ["PlayingCards", "SwagMeter", "Visitor'sLog"];
	var random = Math.floor(Math.random() * pages.length);
	window.location.href = pages[random];
}

function scroller(scrollID)
{
	document.getElementById(scrollID).scrollIntoView({behavior: "smooth", block: "start"});
}

function zoomZone()
{
	var name = document.getElementById("name").value;
	var version = document.getElementById("version").value;
	var level = document.getElementById("level").value;
	var message = document.getElementById("message").value;
	var pword = document.getElementById("pword").value;

	window.open('mailto: qbear@qbear.org?subject=A1 Mario World Zoom Zone&body=I am an awesome gamer and I beat the A1 Mario World Special World - put my name on your website!%0D%0A %0D%0A- Name: [ ' + name + ' ]%0D%0A- Game Version: [ ' + version + ' ]%0D%0A- Favorite Level: [ ' + level + ' ]%0D%0A- Message: [ ' + message + ' ]%0D%0A- Password: [ ' + pword + ' ]%0D%0A%0D%0AThank you so much qbear! You and your Super Mario World romhack are awesome!%0D%0ALots of love, %0D%0A' + name);
}

function visitorsLogEmail()
{
	var name = document.getElementById("swagMeterInput").value;
	var message = document.getElementById("messageInput").value;
	var mascot = document.getElementById("mascotInput").value;

	window.open('mailto: qbear@qbear.org?subject=Visitor\'s Log Submission&body=With all my heart, I confess to the world that qbear.org is the best website in existence - put me on the Visitor\'s Log!%0D%0A %0D%0A- Visitor Name: [ ' + name + ' ]%0D%0A- Message: [ ' + message + ' ]%0D%0A- Mascot: [ ' + mascot + ' ]%0D%0A%0D%0AThank you so much qbear! You are awesome!%0D%0A%0D%0AWith oodles and oodles of my deepest admiration, %0D%0A' + name);
}