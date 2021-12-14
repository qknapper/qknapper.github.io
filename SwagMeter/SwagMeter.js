function getSwag() 
{
	var input = document.getElementById("swagMeterInput").value;
	if (input.length < 1)
	{
		alert("The swag meter input should not be left blank.");
		return;
	}
	document.getElementById("swagMeterInput").value = "";
	var processed = input.replace(/\s+/g, '').toUpperCase();
	var output = document.getElementById("swagGraph");

	/*
	var inputTest = document.getElementById("inputTest");
	inputTest.innerHTML += "\t\t\t" + input;

	var processedTest = document.getElementById("processedTest");
	processedTest.innerHTML += "\t\t\t" + processed;

	// Temp HTML Debug <p>
	var coolTest = document.getElementById("coolTest");
	var radTest = document.getElementById("radTest");
	var wickedTest = document.getElementById("wickedTest");
	var groovyTest = document.getElementById("groovyTest");
	var swagTest = document.getElementById("swagTest");
	var swagLevel = document.getElementById("swagLevel");
	swagLevel.innerHTML = "";
	*/

	// Coolness Calc Vars
	var coolTotal = 0;
	var coolAvg = 0.0;
	var coolScore = 0.0;

	// Raditude Calc Vars
	var radV = 0;
	var radC = 0;
	var radRatio = 0;
	var radScore = 0;

	// Wickedness Calc Vars
	var wickedJ = 0;
	var wickedHigh = 0;
	var wickedScore = 0;

	// Grooviness Calc Vars
	var groovyTally = 0;
	var groovyList = [];
	var groovyRatio = 0;
	var groovyScore = 0;

	// Swag Calc Vars
	var swag = 0;

	// Letter by Letter Tallying
	for (let i = 0; i < processed.length; i++)
	{
		// Coolness Tally - ASCII Score
		if (48 <= processed.charCodeAt(i) && processed.charCodeAt(i) <= 57)
			{ coolTotal += processed.charCodeAt(i) - 47; }
		else if (65 <= processed.charCodeAt(i) && processed.charCodeAt(i) <= 90)
			{ coolTotal += processed.charCodeAt(i) - 64 + 57; }
		
		// Input Validation
		else
		{
			alert("Only numbers and letters are allowed in your Swag Meter input.");
			return;
		}

		// Raditude Tally - 
		if ( (48 <= processed.charCodeAt(i) && processed.charCodeAt(i) <= 52)
			  || processed.charCodeAt(i) == 65 || processed.charCodeAt(i) == 69
			  || processed.charCodeAt(i) == 73 || processed.charCodeAt(i) == 79 || processed.charCodeAt(i) == 85 )
			{ radV += 1; }
		else
			{ radC += 1; }

		// Wickedness Tally -
		if (i != 0)
		{
			wickedJ = Math.abs( processed.charCodeAt(i) - processed.charCodeAt(i-1) );
			if (wickedJ > wickedHigh) { wickedHigh = wickedJ; }
		}

		// Grooviness Tally - 
		if ( !groovyList.includes( processed.charCodeAt(i) ) )
		{
			groovyTally += 1;
			groovyList.push( processed.charCodeAt(i) );
		} 

	}

	// Swag Category Calcs

	// Coolness (balance: cubic scaling)
	coolAvg = Math.pow( (coolTotal / processed.length), 3 );
	coolScore = coolAvg / Math.pow( (614/9), 3 );
	if (coolScore > 1) { coolScore = 1 / coolScore; }
	coolScore = (coolScore * 100).toFixed(2);
	// coolTest.innerHTML += "\t\t\t" + "(" + coolTotal + ", " + coolAvg + ", " + coolScore + ")";

	// Raditude 
	radRatio = radV / radC;
	radScore = radRatio / (4 / 5);
	if (radScore > 1) { radScore = 1 / radScore; }
	radScore = (radScore * 100).toFixed(2);
	// radTest.innerHTML += "\t\t\t" + "(" + radV + "/" + radC + ", " + radRatio + ", " + radScore + ")";

	// Wickedness
	wickedScore = wickedHigh / 17;
	if (wickedScore > 1) { wickedScore = 1 / wickedScore; }
	wickedScore = (wickedScore * 100).toFixed(2);
	// wickedTest.innerHTML += "\t\t\t" + "(" + wickedHigh + ", " + wickedScore + ")";

	// Grooviness
	groovyRatio = groovyTally / processed.length;
	groovyScore = groovyRatio / (8 / 9);
	if (groovyScore > 1) { groovyScore = 1 / groovyScore; }
	groovyScore = (groovyScore * 100).toFixed(2);
	// groovyTest.innerHTML += "\t\t\t" + "(" + groovyTally + ", " + groovyRatio + ", " + groovyScore + ")";

	// Swag Composite
	var swagArr = [ coolScore, radScore, wickedScore, groovyScore ];
	swagArr.sort( function (a, b) { return a - b; } )
	swag = 0*swagArr[0] + 0.25*swagArr[1] + 0.25*swagArr[2] + 0.5*swagArr[3]

	// Exceptions
	if (processed.includes("QUINN")) { swag = (swag + 100)/2; }
	if (processed.includes("KNAPPER")) { swag = (swag + 100)/2; }
	if (processed.includes("JOELEMBIID")) { swag = 0; }
	if (processed.includes("JACOBBLEVINS")) { swag = 3*(swag)/4; }
	swag = swag.toFixed(2);

	// swagTest.innerHTML += "\t\t\t" + "(" + swag + ")";

	// Swag Level
	var levelCat = "";
	var swagColor = "";
	if (swag < 75) {
		levelCat = "<span style='color: red; font-weight: bold''>low</span>";
		swagColor = "<span style='color: red; font-weight: bold''>" + swag + "</span>";
	}
	else if (swag < 90) {
		levelCat = "<span style='color: yellow; font-weight: bold'>medium</span>";
		swagColor = "<span style='color: yellow; font-weight: bold''>" + swag + "</span>";
	}
	else {
		levelCat = "<span style='color: green; font-weight: bold''>high</span>";
		swagColor = "<span style='color: green; font-weight: bold''>" + swag + "</span>";
	}
	if (processed.includes("JACOBBLEVINS")) {
		levelCat = "<span style='color: red; font-weight: bold''>turd wanker</span>";
		swagColor = "<span style='color: red; font-weight: bold''>" + swag + "</span>";
	}
	if (processed.includes("JACOBBLEVINS")) {
		levelCat = "<span style='color: green; font-weight: bold''>Big Handsome</span>";
		swagColor = "<span style='color: green; font-weight: bold''>" + swag + "</span>";
	}

	swagLevel.innerHTML = "" + input + " has a composite swag score of " + swagColor + ". That is a " + levelCat + " level of swag.";

	swagHolder = document.getElementById("swagHolder");
	swagHolder.innerHTML = "<div id='swagGraph' class='plotlyDiv'></div>";

	swagGraph = document.getElementById("swagGraph");
	
	var shape = {
		x: [0,	radScore,	0,	-1*groovyScore,	0],
		y: [coolScore,	0,	-1*wickedScore,	0,	coolScore],
		hoverinfo: "text",
		text: [('Coolness: ' + coolScore), ('Raditude: ' + radScore), ('Wickedness: ' + wickedScore), ('Grooviness: ' + groovyScore), ('Coolness: ' + coolScore)],
		type: 'scatter',
		mode: 'lines',
		fill:'tozerox',
		fillcolor: 'rgba(202, 215, 187, 0.75)',
		line: {
			width: 4,
			color: 'rgb(54, 114, 80)'
		}
	};

	var graphCats = {
		x: [175, 175, 175, 175, 175],
		y: [75, 42, 9, -24, -60],
		mode: "text",
		hoverinfo: "none",
		text: ["Coolness:", "Raditude:", "Wickedness:", "Grooviness:", "Composite Swag:"],
		textposition: "bottom right",
		textfont: {
			size: 20,
			color: 'rgb(9, 47, 24)'
		},
	};

	var graphCatShadows = {
		x: [176, 176, 176, 176, 176],
		y: [74, 41, 8, -25, -61],
		mode: "text",
		hoverinfo: "none",
		text: ["Coolness:", "Raditude:", "Wickedness:", "Grooviness:", "Composite Swag:"],
		textposition: "bottom right",
		textfont: {
			size: 20,
			color: 'rgb(202, 215, 187)'
		},
	};

	var graphScores = {
		x: [375, 375, 375, 375, 375],
		y: [75, 42, 9, -24, -60],
		mode: "text",
		hoverinfo: "none",
		text: [("<i><b>" + coolScore), ("<i><b>" + radScore), ("<i><b>" + wickedScore), ("<i><b>" + groovyScore), ("<i><b>" + swag)],
		textposition: "bottom right",
		textfont: {
			size: 20,
			color: 'rgb(9, 47, 24)'
		},
	};

	var data = [ shape, graphCatShadows, graphCats, graphScores ];

	var layout = {
		autosize: true,
		margin: {t: 0, b: 0, l: 0, r: 0},
		title: {
			text: input + "'s Swag Distribution Report",
			font: {
				size: 24,
				color: "rgb(9, 47, 24)"
			},
			xref: "container",
			x: 0.025,
			y: 0.93
		},
		paper_bgcolor: 'rgba(0,0,0,0)',
   		plot_bgcolor: 'rgba(0,0,0,0)',
		showlegend: false,
		dragmode: false,
		xaxis: { range: [-164, 506], fixedrange: true, showgrid: false, zeroline: false, showline: false, autotick: true, ticks: '', showticklabels: false },
		yaxis: { range: [-159, 171], fixedrange: true, showgrid: false, zeroline: false, showline: false, autotick: true, ticks: '', showticklabels: false },
		images: [{
			source: "SwagMeter/graphBack.png",
			sizing: 'stretch',
			xref: 0, yref: 0,
			x: 0, y: 1,
			layer: 'below',
			sizex: 1, sizey: 1,
			opacity: 1
		}]
	};

	var config = {
		displayModeBar: true,
		modeBarButtonsToRemove: ["zoom2d", "pan2d", "select2d", "lasso2d", "zoomIn2d", "zoomOut2d", "autoScale2d", "resetScale2d"],
		responsive: true
	}

	Plotly.newPlot( swagGraph, data, layout, config );





}