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
		
	//	User turn
	current.innerHTML = 1;
	square.innerHTML = '<img src="QbearSquare.png" alt="QuinnBearSquare" title="QuinnBearSquare" style="width:90%; height:90%" border="2">';
	if(checkWin())
	{
		response.innerHTML = "You win! Congratulations!!! &ensp; Refresh to play again!";
		sentinel = false;
	}
	
	if(sentinel)
	{
		//	Cats Game
		var catsGame = parseInt(s11.innerHTML) + parseInt(s12.innerHTML) + parseInt(s13.innerHTML)
					+ parseInt(s21.innerHTML) + parseInt(s22.innerHTML) + parseInt(s23.innerHTML)
					+ parseInt(s31.innerHTML) + parseInt(s32.innerHTML) + parseInt(s33.innerHTML);
		if(catsGame < 13)
		{
			
			//	AI - Algorithm
			//				Less optimal moves come first and are overwritten if a more optimal move is found
		
					//	Board
						//			Col1	Col2	Col3
						//	Row1	 11		12		13
						//	Row2	 21		22		23
						//	Row3	 31		32		33
						//		Diag2					Diag1
				
			var ai;
			var aiCurrent, aiSquare;
			/*
			var board = 
			[
				[parseInt(s11.innerHTML), parseInt(s12.innerHTML), parseInt(s13.innerHTML)],
				[parseInt(s21.innerHTML), parseInt(s22.innerHTML), parseInt(s23.innerHTML)],
				[parseInt(s31.innerHTML), parseInt(s32.innerHTML), parseInt(s33.innerHTML)]
			];	
			*/
			
			var board = [ [1,2,3], [4,5,6], [7,8,9] ];
		
	
			//	i) Random Space
			while(sentinel)
			{
				ai = String(Math.floor(Math.random() * 3 + 1)) + String(Math.floor(Math.random() * 3 + 1));
				aiCurrent = document.getElementById(ai);
				if(aiCurrent.innerHTML == 0)
					sentinel = false;
			}
			
			//	ii) Play in middle
			if(board[1][1] == 0)
				ai = "22";
			
			//	iii) Checks for a winning move for either team.
		
			
			var team;
			var rowCount, colCount;
			var d1Count = 0;
			var d2Count = 0;
			var i, j;
	
			for(team = 1; team < 3; team++)
			{
				for(i = 0; i < 2*board.length; i++)
				{
					colCount = 0;
					rowCount = 0;
			
					for(j = 0; j < 2*board[i%3].length; j++)
					{
						if(j < 3 && board[i][j] == team)
							colCount++;
						if(i < 3 && board[j][i] == team)
							rowCount++;
						if(i == j && i < 3 && j < 3 && board[i][j] == 2)
							d1count++;
						if((2-i) == j && i < 3 && j < 3 && board[i][j] == 2)
							d2count++;
				
						if(colCount > 1 && board[i%3][j%3] == 0)
							ai = String((i%3)+1) + String((j%3)+1);
						if(rowCount > 1 && board[j%3][i%3] == 0)
							ai = String((j%3)+1) + String((i%3)+1);
						if(i == j && d1Count > 1 && board[j%3][i%3] == 0)
							ai = String((i%3)+1) + String((j%3)+1);
						if((2-i) == j && d2Count > 1 && board[j%3][i%3] == 0)
							ai = String((i%3)+1) + String((j%3)+1);
					}
				}
			}
		
			aiCurrent = document.getElementById(ai);
			aiSquare = document.getElementById('s' + ai);
		
			aiCurrent.innerHTML = 2;
			aiSquare.innerHTML = '<img src="trogdorSquare.png" alt="trogdorSquare" title="trogdorSquare" style="width:90%; height:90%" border="2">';
			if(checkWin())
				response.innerHTML = "<br> You lose :( &ensp Refresh for a rematch!!";
		}
		else
			response.innerHTML = "<br>It's a tie... Refresh to try again!";
	}
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