function useGuess() 
{
	var input = document.getElementById("linkedinGuess").value;

	var guessCounter = document.getElementById("guessCount");
	var guessCount = parseInt(guessCounter.innerHTML);
	guessCounter.innerHTML = guessCount + 1;

	var clueCounter = document.getElementById("clueCount");
	var clueCount = parseInt(clueCounter.innerHTML);

	var skipCounter = document.getElementById("skipCount");
	var skipCount = parseInt(skipCounter.innerHTML);

	var resultText = "";

	var summText = "";
	summText = Array.from(document.getElementById("summ"+(clueCount-1)).innerHTML).slice(0, guessCount+skipCount).join("");

	if (input=="Olivier Motteau") {
		resultText = "That's correct! Good job!";
		summText += "🟩";
		showClues();
	}
	else {
		resultText = "Nope, here is another clue.";
		summText += "🟥";
		if (clueCount<6) {
			getClue();
			clueCounter.innerHTML = clueCount + 1
		}
		else {
			resultText = "No more clues, but you can guess again.";
		}
	}

	for (let i=guessCount+skipCount; i<5; i++) {
		summText += "⬛";
	}

	if (clueCount <=6) {
		document.getElementById("summ"+clueCount).innerHTML = summText;
	}

	document.getElementById("result").innerHTML = resultText;

	

}

function loseGuess() {
	
	var guessCounter = document.getElementById("guessCount");
	var guessCount = parseInt(guessCounter.innerHTML);

	var clueCounter = document.getElementById("clueCount");
	var clueCount = parseInt(clueCounter.innerHTML);

	var skipCounter = document.getElementById("skipCount");
	var skipCount = parseInt(skipCounter.innerHTML);

	if (clueCount<6) {
		
		skipCounter.innerHTML = skipCount + 1;

		summText = Array.from(document.getElementById("summ"+(clueCount-1)).innerHTML).slice(0, guessCount+skipCount).join("");
		summText += "🟨";
		for (let i=guessCount+skipCount; i<5; i++) {
			summText += "⬛";
		}
		document.getElementById("summ"+clueCount).innerHTML = summText;
		document.getElementById("result").innerHTML = "That extra clue will cost you a guess!";

		getClue();
		clueCounter.innerHTML = clueCount + 1

	}
	else {
		document.getElementById("result").innerHTML = "No more clues, sorry :(";
	}
}

function getClue()
{
	var clueCounter = document.getElementById("clueCount");
	var clueCount = parseInt(clueCounter.innerHTML);

	var clues = [
		"Clue 1 - I am thinking of someone whose longest tenure at a company was 14 years",
		"Clue 2 - I am thinking of someone who has been in their current position for < half a year",
		"Clue 3 - I am thinking of someone who is in a management position",
		"Clue 4 - I am thinking of someone who is in Europe",
		"Clue 5 - I am thinking of someone who works in the footwear industry",
		"Clue 6 - I am thinking of someone who is wearing glasses"
	];

	document.getElementById("clue"+(clueCount+1)).innerHTML = clues[clueCount];

	
}

function showClues() {
	var clues = [
		"Clue 1 - I am thinking of someone whose longest tenure at a company was 14 years",
		"Clue 2 - I am thinking of someone who has been in their current position for < half a year",
		"Clue 3 - I am thinking of someone who is in a management position",
		"Clue 4 - I am thinking of someone who is in Europe",
		"Clue 5 - I am thinking of someone who works in the footwear industry",
		"Clue 6 - I am thinking of someone who is wearing glasses"
	];

	for (let i=0; i<6; i++) {
		document.getElementById("clue"+(i+1)).innerHTML = clues[i];
	}
}