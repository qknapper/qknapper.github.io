function getSwag()

{
	
	var name = document.getElementById('name').value;
	var response = document.getElementById('response');
	var score = 0;
	var level;
	var count = 0;
	var temp;
	var space = 0;
	
// Scoring Algorithm
	while(count < name.length)
	{
		temp = name.substring(count, count + 1).toLowerCase();
		if(temp == "a"||temp == "e"||temp == "i"||temp == "o"||temp == "u"||temp == "l"
						||temp == "n"||temp == "s"||temp == "t"||temp == "r")
			{score += 1;}
		if(temp == 'd'||temp == 'g')
			{score += 2;}
		if(temp == 'b'||temp == 'c'||temp == 'm'||temp == 'p')
			{score += 3;}
		if(temp == 'f'||temp == 'h'||temp == 'v'||temp == 'w'||temp == 'y')
			{score += 4;}
		if(temp == 'k')
			{score += 5;}
		if(temp == 'j'||temp == 'x')
			{score += 8;}
		if(temp == 'q'||temp == 'z')
			{score += 10;}
		if(temp == ' ')
			{space ++;}
		
		count++;
		
	}
	score = Math.floor(100*(score + 5*(count-space))/(10*(count-space)));
	if(score >= 100)
		score = 99;

// Scoring Exceptions
	if(name.toLowerCase().includes("knapper"))
		score += 25;
	if(name.toLowerCase().includes("mccartha"))
		score += 15;
	if(name.toLowerCase()==="justin kwak" || name.toLowerCase()==="justinkwak")
		score = 87;
	if(name.toLowerCase()==="macdaddy")
		score += 20;
	if(name.toLowerCase() === "quinn knapper" || name.toLowerCase() === "quinnknapper" || name.toLowerCase() === "quinn")
		score = 1000000;
	if(name.toLowerCase() === "jacob blevins" ||name.toLowerCase() === "jacobblevins")
		{score = "-999999999999999999999999"; level = "<span style='color:red'> turd wanker </span>";}
	
// Swag Level Assignment + Meter Image Editing
	if(0 < score && score < 70)
	{
		level = "<span style='color:red'> low </span>";
		document.getElementById('swagMeter').src = "swagMeterLow.png";
	}
	if(70 <= score && score < 85)
	{
		level = "<span style='color:yellow'> medium </span>";
		document.getElementById('swagMeter').src = "swagMeterMedium.png";
	}
	if(85 <= score)
	{
		level = "<span style='color:green'> high </span>";
		document.getElementById('swagMeter').src = "swagMeterHigh.png";
	}
	
// HTML Response Output
	response.innerHTML = name + " has a swag level of " + score + "%. That is a " + level + " swag level.";
}