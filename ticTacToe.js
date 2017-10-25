function fillSpace(num)
{
	
	var current = document.getElementById(num);
	var square = document.getElementById('s' + num);;
	var response = document.getElementById('response');
	var s11 = document.getElementById('11');
	var s12 = document.getElementById('12');
	var s13 = document.getElementById('13');
	var s21 = document.getElementById('21');
	var s22 = document.getElementById('22');
	var s23 = document.getElementById('23');
	var s31 = document.getElementById('31');
	var s32 = document.getElementById('32');
	var s33 = document.getElementById('33');
	var sentinel = true;
		
	current.innerHTML = 1;
	square.innerHTML = '<img src="QbearSquare.png" alt="QuinnBearSquare" title="QuinnBearSquare" style="width:90%; height:90%" border="2">';
	if(checkWin())
	{
		response.innerHTML = "You win! Congratulations!!! &ensp; Refresh to play again!";
		sentinel = false;
	}
	
	// AI - Random
	ai = String(Math.floor(Math.random() * 3 + 1)) + String(Math.floor(Math.random() * 3 + 1));
	var aiCurrent;
	var aiSquare;
	var empty;
	var catsGame = parseInt(s11.innerHTML) + parseInt(s12.innerHTML) + parseInt(s13.innerHTML)
					+ parseInt(s21.innerHTML) + parseInt(s22.innerHTML) + parseInt(s23.innerHTML)
					+ parseInt(s31.innerHTML) + parseInt(s32.innerHTML) + parseInt(s33.innerHTML);
	
	while(sentinel && (catsGame < 13))
	{
		aiCurrent = document.getElementById(ai);
		aiSquare = document.getElementById('s' + ai);
		empty = (aiCurrent.innerHTML == 0);
		if(empty)
		{
			aiCurrent.innerHTML = 2;
			aiSquare.innerHTML = '<img src="trogdorSquare.png" alt="trogdorSquare" title="trogdorSquare" style="width:90%; height:90%" border="2">';
			if(checkWin()) 
				response.innerHTML = '<br> HA, sucker! You lose :( Refresh to try again!';
			sentinel = false;
		}
		else ai = String(Math.floor(Math.random() * 3 + 1)) + String(Math.floor(Math.random() * 3 + 1));
	}
	
	if((catsGame >= 13) && !(checkWin())) response.innerHTML = "<br>It's a kitty kat's game XD... Refresh to try again!";
}

function checkWin()
{
	
	var win = false;
	
	var a = (s11.innerHTML == s12.innerHTML && s12.innerHTML == s13.innerHTML)
	var b = (s21.innerHTML == s22.innerHTML && s22.innerHTML == s23.innerHTML)
	var c = (s31.innerHTML == s32.innerHTML && s32.innerHTML == s33.innerHTML)
	var d = (s11.innerHTML == s21.innerHTML && s21.innerHTML == s31.innerHTML)
	var e = (s12.innerHTML == s22.innerHTML && s22.innerHTML == s32.innerHTML)
	var f = (s13.innerHTML == s23.innerHTML && s23.innerHTML == s33.innerHTML)
	var g = (s11.innerHTML == s22.innerHTML && s22.innerHTML == s33.innerHTML)
	var h = (s13.innerHTML == s22.innerHTML && s22.innerHTML == s31.innerHTML)
	
	if( a || b || c || d || e || f || g || h ) 
		win = true;
	
	return win;
}
