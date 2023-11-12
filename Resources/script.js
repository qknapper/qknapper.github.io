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
	var pages = ["PlayingCards", "SwagMeter", "Visitor'sLog", "RandomAlphanumeric"];
	var random = Math.floor(Math.random() * pages.length);
	window.location.href = pages[random];
}

function scroller(scrollID)
{
	document.getElementById(scrollID).scrollIntoView({behavior: "smooth", block: "start"});
}

function generateAlphaX()
{
	var output = "";
	var length = document.getElementById("alphaXlength").value;
	for (var i = 0; i < length; i++)
	{output = output + Math.random().toString(36).slice(2, 3)}
	output = output.toUpperCase();
	navigator.clipboard.writeText(output);
	document.getElementById("outputAlphaX").innerHTML = "<b>" + output + "</b> - Copied to clipboard!";
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

function updateScores(totals=[], playerCount=document.getElementById("playerCount"), holeCount=document.getElementById("holeCount"))
{
	if (totals.length < 1)
	{
		totals = Array(parseInt(playerCount.innerHTML)).fill(0);

		for (var i = 1; i < parseInt(holeCount.innerHTML)+1; i++)
		{
			var scores = [];
			for (var j = 1; j < parseInt(playerCount.innerHTML)+1; j++)
			{
				if (document.getElementById("roundP" + j + "S" + i).value == "")
				{ scores.push(0); }
				else
				{ scores.push(document.getElementById("roundP" + j + "S" + i).value); }
				totals[j-1] += parseInt(scores.slice(-1));
			}
		}
	}

	// Totals
	var colWidth = 90/parseInt(playerCount.innerHTML);
	var totalsRow = document.getElementById("scTotalRow");
	if (totals.length < parseInt(playerCount.innerHTML))
	{
		totals.push("");
	}

	totalsRow.innerHTML = "<td class=\"feature\" style=\"width:10%; text-align:center;\">Total</td>\n";
	for (var i = 1; i < parseInt(playerCount.innerHTML)+1; i++)
	{ totalsRow.innerHTML += "<td class=\"feature\" style=\"width:" + colWidth + "%; padding-left: 10px;\" id=\"totalP" + i + "\">" + totals[i-1] + "</td>\n"; }
	

	//var test = document.getElementById("testerrr");
	//test.innerHTML += "[" + totals + "]";
}

function addPlayer()
{
	var playerCount = document.getElementById("playerCount");
	var holeCount = document.getElementById("holeCount");

	playerCount.innerHTML = parseInt(playerCount.innerHTML) + 1;
	var colWidth = 90/parseInt(playerCount.innerHTML);

	// Header Row
	var headerRow = document.getElementById("scHeader");
	headerRow.innerHTML = "<td class=\"feature\" style=\"width:10%; text-align:center;\"></td>\n";
	for (var i = 0; i < parseInt(playerCount.innerHTML)-1; i++)
	{ headerRow.innerHTML += "<td class=\"feature\" style=\"width:" + colWidth + "%\"></td>\n"; }
	headerRow.innerHTML += "<td class=\"feature\" style=\"width:" + colWidth + "%\"><button class=\"scorecardButton standardButton\" onclick=\"addPlayer()\">Add New Player</button></td>";

	// Player Row
	var playerRow = document.getElementById("scPlayerRow");
	var players = [];
	var totals = [];
	for (var i = 1; i < parseInt(playerCount.innerHTML); i++)
	{
		players.push(document.getElementById("roundPlayer" + i).value);
		totals.push(0);
	}
	playerRow.innerHTML = "<td class=\"feature\" style=\"width:10%; text-align:center;\"><img class=\"mascot\" src=\"../Resources/icon.png\"></td>\n";
	for (var i = 1; i < parseInt(playerCount.innerHTML); i++)
	{
		playerRow.innerHTML += "<td class=\"feature\" style=\"width:" + colWidth + "%\"><input type=\"text\" id=\"roundPlayer" + i + "\" class=\"scorecardInput standardInput\" placeholder=\"- Player " + i + " -\" value=\"" + players[i-1] + "\"></td>\n";
	}
	playerRow.innerHTML += "<td class=\"feature\" style=\"width:" + colWidth + "%\"><input type=\"text\" id=\"roundPlayer" + parseInt(playerCount.innerHTML) + "\" class=\"scorecardInput standardInput\" placeholder=\" - Player " + parseInt(playerCount.innerHTML) + " -\"></td>";

	// Holes
	for (var i = 1; i < parseInt(holeCount.innerHTML)+1; i++)
	{
		var scores = [];
		for (var j = 1; j < parseInt(playerCount.innerHTML); j++)
		{
			scores.push(document.getElementById("roundP" + j + "S" + i).value);
			totals[j-1] += parseInt(scores.slice(-1));
		}

		var scoreRow = document.getElementById("scRow" + i);
		scoreRow.innerHTML = "<td class=\"feature\" style=\"width:10%; text-align:center;\">" + i + "</td>\n";
		for (var j = 1; j < parseInt(playerCount.innerHTML); j++)
		{
			scoreRow.innerHTML += "<td class=\"feature\" style=\"width:" + colWidth + "%\"><input type=\"number\" id=\"roundP" + j + "S" + i + "\" class=\"scorecardInput standardInput\" placeholder=\"- Score -\" value=\"" + scores[j-1] + "\"></td>\n";
		}
		scoreRow.innerHTML += "<td class=\"feature\" style=\"width:" + colWidth + "%\"><input type=\"number\" id=\"roundP" + parseInt(playerCount.innerHTML) + "S" + i + "\" class=\"scorecardInput standardInput\" placeholder=\"- Score -\"></td>";
	}

	//var test = document.getElementById("testerrr");
	//test.innerHTML += "[" + scores + "]";
	
	updateScores();
	var totalsRow = document.getElementById("scTotalRow");
	totalsRow.innerHTML += "<td class=\"feature\" style=\"width:" + colWidth + "%\" id=\"totalP" + parseInt(playerCount.innerHTML) + "\"></td>";
	
}

function addHole()
{
	var scorecardTable = document.getElementById("scorecardTable");
	var playerCount = document.getElementById("playerCount");
	var holeCount = document.getElementById("holeCount");

	var colWidth = 90/parseInt(playerCount.innerHTML);
	holeCount.innerHTML = parseInt(holeCount.innerHTML) + 1;

	var tempRowText = "";
	tempRowText += "<tr id=\"scRow" + holeCount.innerHTML + "\">\n";
	tempRowText += "<td class=\"feature\" style=\"width:10%; text-align:center;\">" + holeCount.innerHTML + "</td>\n";
	for (var j = 1; j < parseInt(playerCount.innerHTML)+1; j++)
	{
		tempRowText += "<td class=\"feature\" style=\"width:" + colWidth + "%\"><input type=\"number\" id=\"roundP" + j + "S" + holeCount.innerHTML + "\" class=\"scorecardInput standardInput\" placeholder=\"- Score -\"></td>\n";
	}
	tempRowText +="</tr>";

	// Store Players
	var playerRow = document.getElementById("scPlayerRow");
	var players = [];
	for (var i = 1; i < parseInt(playerCount.innerHTML)+1; i++)
	{
		players.push(document.getElementById("roundPlayer" + i).value);
	}

	// Store Scores
	var scores = [];
	for (var i = 1; i < parseInt(holeCount.innerHTML); i++)
	{
		var holeScores = [];
		for (var j = 1; j < parseInt(playerCount.innerHTML)+1; j++)
		{
			holeScores.push(document.getElementById("roundP" + j + "S" + i).value);
		}
		scores.push(holeScores);
	}

	// Add Row
	scorecardTable.innerHTML += tempRowText;

	// Fill Players
	var playerRow = document.getElementById("scPlayerRow");
	playerRow.innerHTML = "<td class=\"feature\" style=\"width:10%; text-align:center;\"><img class=\"mascot\" src=\"../Resources/icon.png\"></td>\n";
	for (var i = 1; i < parseInt(playerCount.innerHTML)+1; i++)
	{
		playerRow.innerHTML += "<td class=\"feature\" style=\"width:" + colWidth + "%\"><input type=\"text\" id=\"roundPlayer" + i + "\" class=\"scorecardInput standardInput\" placeholder=\"- Player " + i + " -\" value=\"" + players[i-1] + "\"></td>\n";
	}

	// Fill Scores
	for (var i = 1; i < parseInt(holeCount.innerHTML); i++)
	{
		var scoreRow = document.getElementById("scRow" + i);
		scoreRow.innerHTML = "<td class=\"feature\" style=\"width:10%; text-align:center;\">" + i + "</td>\n";
		for (var j = 1; j < parseInt(playerCount.innerHTML)+1; j++)
		{
			scoreRow.innerHTML += "<td class=\"feature\" style=\"width:" + colWidth + "%\"><input type=\"number\" id=\"roundP" + j + "S" + i + "\" class=\"scorecardInput standardInput\" placeholder=\"- Score -\" value=\"" + scores[i-1][j-1] + "\"></td>\n";
		}
	}

	updateScores();
}