function addComment()
{
	var comment = document.getElementById('comment').value;
	var response = document.getElementById('response');
	var messageBoard = document.getElementById('messageBoard');
	var clean = true;
	var count = 2;
	
	
// Comment Formatting
	comment = "[" + count + "] &ensp; " + comment + "<br>";

// Cleanliness Check
	if(comment.toLowerCase().includes("fuck")||comment.toLowerCase().includes("bitch")||comment.toLowerCase().includes("boob")||
		comment.toLowerCase().includes("penis")|| comment.toLowerCase().includes("sex")||comment.toLowerCase().includes("vagina")||
		comment.toLowerCase().includes("pussy")|| comment.toLowerCase().includes("ass")|| comment.toLowerCase().includes("nigg")||
		comment.toLowerCase().includes("shit")||comment.toLowerCase().includes("whore")||comment.toLowerCase().includes("gay"))
			clean = false;
		
// HTML Response Output and Message Board Update
	if(clean)
	{
		response.innerHTML = "That's a crispylicous comment! Remember: this is a hidden page, tell your friends it exists but not how you got here!!!";
		messageBoard.innerHTML += comment;
		count += 1;
	}
	else
		response.innerHTML = "That's not very clean... please submit a more appropirate message.";
}