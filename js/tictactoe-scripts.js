$(document).ready(function() {	
	var player = '';
	var computer = '';
	var turnCounter = 0;
	var gameOver = false;
	var computerMove = false;
	var remainingMoves = ["square1","square2","square3","square4","square5","square6","square7","square8","square9"];
	var playerMoves = [];
	var computerMoves = [];
	var index = 0;
	var clickedId = "";
	var conditionsMet = 0;
	var winConditions = [["square1","square2","square3"],["square4","square5","square6"],["square7","square8","square9"],["square1","square4","square7"],["square2","square5","square8"],["square3","square6","square9"],["square1","square5","square9"],["square3","square5","square7"]];
	
	$(".overlay").fadeIn("slow");
	
	//Click events to select players icon
	$("#select-x").click(function() {
		player = 'X';
		computer = 'O';
		$(".overlay").fadeOut("slow");
	});	
	$("#select-o").click(function() {
		player = 'O';
		computer = 'X';
		$(".overlay").fadeOut("slow");
		computerRandomMove();
	});
		
	//Click event for players turn
	$(".game-square").click(function() {		
		if ($(this).hasClass("not-taken") && computerMove == false) {
			$(this).html("<h1>"+ player +"</h1>");
			$(this).addClass("taken");
			$(this).removeClass("not-taken");
			clickedId = $(this).attr("id");
			index = remainingMoves.indexOf(clickedId);
			playerMoves.push(remainingMoves[index]);			
			remainingMoves.splice(index, 1);
			computerMove = true;
			setTimeout(function() {
				if (winCheck(winConditions, playerMoves)) {
						alert("You win!");
						gameOver = true;
						resetGame();
					};
				if (gameOver == false) {
					computerRandomMove();	
				};
			}, 800);		
		};
	});	
	
	//Updates board for computer player
	function updateBoard(id) {
		$($(id)).html("<h1>"+ computer +"</h1>");
		$($(id)).addClass("taken");
		$($(id)).removeClass("not-taken");
	}
	
	var squareId = '';
	
	//Random move made by computer player
	function computerRandomMove() {
		if (compMoveTest(computerMoves, remainingMoves, winConditions) || compMoveTest(playerMoves, remainingMoves, winConditions)) {
			index = remainingMoves.indexOf(squareId);
			computerMoves.push(remainingMoves[index]);	
			remainingMoves.splice(index, 1);		
			squareId = '#' + squareId;
			updateBoard(squareId);
			if (winCheck(winConditions, computerMoves)) {
				alert("You lose!");
				resetGame();
			};
		} else {
			var randomIndex = Math.floor(Math.random()*remainingMoves.length);
			squareId = remainingMoves[randomIndex];
			index = remainingMoves.indexOf(squareId);
			computerMoves.push(remainingMoves[index]);	
			remainingMoves.splice(index, 1);		
			squareId = '#' + squareId;
			updateBoard(squareId);
			if (winCheck(winConditions, computerMoves)) {
				alert("You lose!");
				resetGame();
			};
		}
		computerMove = false;
	}
	
	
	//Checks if computer can make or block a winning move
	function compMoveTest(moves, remainingMoves, winConditions) {
		for (var x in remainingMoves) {
			var testArr = moves.slice(0);
			testArr.push(remainingMoves[x]);
			if (winCheck(winConditions, testArr)) {
				squareId = remainingMoves[x];
				return true;
			}
		}
		return false;
	}
	
	//Checks if a win condition has been met
	function winCheck(arr1, arr2) {		
		for (var i in arr1) {
			conditionsMet = 0;
			for (var j in arr2) {
				if (arr1[i].indexOf(arr2[j]) >= 0) {
					conditionsMet++;			
				}
				if (conditionsMet === 3) {
					return true;
				};					
			}
		};
		if (remainingMoves.length == 0) {
			alert("Draw!");
			resetGame();
		}
	};
	
	function resetGame() {
		gameOver = true;
		setTimeout(function() {
			location.reload();
		}, 1000);
	}
	
});
