var turnMsg = document.getElementById("turnMsg");
var body = document.getElementsByTagName("body")[0];

xWin = false;
oWin = false;
var counter = 0;
var xArray = [];
var oArray = [];

window.onload = function() {
	document.addEventListener("click", checkMarker);
	document.addEventListener("keydown", theme);
}

function theme(ev) {
	var key = ev.keyCode;
	var letter = String.fromCodePoint(key);

	if (letter == "T") {
		var doc = document.querySelector("body");
		var colors = ["silver", "pink", "teal", "lightgreen", "purple", "black", "maroon", "yellow"];
		var random = Math.floor(Math.random() * 8);
		doc.style.background = colors[random];
		console.log(colors[random]);
	}
}


function checkMarker(ev) {
	while (!xWin && !oWin) {
		return placeMarker(ev);
	}	
}


function placeMarker(ev) {
	var o = document.elementFromPoint(ev.pageX, ev.pageY);

	if (o.tagName == "TD" && o.textContent == "") {
		counter++;
		
		if (counter % 2 == 0) {
			o.textContent = "O";
			o.style.color = "blue";
			turnMsg.textContent = "X's turn";
			turnMsg.style.color = "red"
			oArray.push(o.id);
			console.log(oArray);
		} else {
			o.textContent = "X";
			o.style.color = "red"
			turnMsg.textContent = "O's turn";
			turnMsg.style.color = "blue"
			xArray.push(o.id);
			console.log(xArray);

			if (counter == 9) {
				playAgain();			
			}
		}
		
		if(counter >= 5) {
			checkWin();
		}
		
		if (xWin || oWin) {
			playAgain();
			var win = document.createElement("h2");
			win.id = "win";
			body.appendChild(win);

			if (xWin) {
				win.textContent = "X Wins!!!";
			} else {
				win.textContent = "O Wins!!!";
				win.style.color = "blue";
			}	
		} 
	}	
}

function playAgain() {

	turnMsg.textContent = "Play Again?";
	turnMsg.style.color = "orange";
	var yes = document.createElement("button");
	yes.style.background = "green";
	yes.textContent = "Yes";
	yes.style.left = 510 + "px";
	yes.style.top = 130 + "px";

	body.appendChild(yes); 

	yes.onclick = function() {
		location.reload();
	}
}


function checkWin() {

	var boxes = [];
	// populate boxes array with the 9 grid elements(td)
	for (var i = 1; i < 10; i++) {
		boxes[i] = document.getElementById(i);
	}

	if (boxes[5].textContent == "X") {

		if (boxes[1].textContent == "X" && boxes[9].textContent == "X") {
			console.log("X wins!");
			boxes[1].style.background = "green";
			boxes[5].style.background = "green";
			boxes[9].style.background = "green";
			xWin = true;

		} else if (boxes[2].textContent == "X" && boxes[8].textContent == "X") {
			console.log("X wins!");
			boxes[2].style.background = "green";
			boxes[5].style.background = "green";
			boxes[8].style.background = "green";
			xWin = true;

		} else if (boxes[4].textContent == "X" && boxes[6].textContent == "X") {
			console.log("X wins!");
			boxes[4].style.background = "green";
			boxes[5].style.background = "green";
			boxes[6].style.background = "green";
			xWin = true;

		} else if (boxes[3].textContent == "X" && boxes[7].textContent == "X") {
			console.log("X wins!");
			boxes[3].style.background = "green";
			boxes[5].style.background = "green";
			boxes[7].style.background = "green";
			xWin = true;
		}
	} 

	if (boxes[1].textContent == "X") {

		if (boxes[2].textContent == "X" && boxes[3].textContent == "X") {
			console.log("X wins!");
			boxes[1].style.background = "green";
			boxes[2].style.background = "green";
			boxes[3].style.background = "green";
			xWin = true;

		} else if (boxes[4].textContent == "X" && boxes[7].textContent == "X") {
			console.log("X wins!");
			boxes[1].style.background = "green";
			boxes[4].style.background = "green";
			boxes[7].style.background = "green";
			xWin = true;
		} 
	}

	if (boxes[9].textContent == "X") {

		if (boxes[7].textContent == "X" && boxes[8].textContent =="X") {
			console.log("X wins!");
			boxes[7].style.background = "green";
			boxes[8].style.background = "green";
			boxes[9].style.background = "green";
			xWin = true;

		} else if (boxes[3].textContent == "X" && boxes[6].textContent == "X") {
			console.log("X wins!");
			boxes[3].style.background = "green";
			boxes[6].style.background = "green";
			boxes[9].style.background = "green";
			xWin = true;

		}
	}


	// O win conditions
	if (boxes[5].textContent == "O") {

		if (boxes[1].textContent == "O" && boxes[9].textContent == "O") {
			console.log("O wins!");
			boxes[1].style.background = "green";
			boxes[5].style.background = "green";
			boxes[9].style.background = "green";
			oWin = true;

		} else if (boxes[2].textContent == "O" && boxes[8].textContent == "O") {
			console.log("O wins!");
			boxes[2].style.background = "green";
			boxes[5].style.background = "green";
			boxes[8].style.background = "green";
			oWin = true;

		} else if (boxes[4].textContent == "O" && boxes[6].textContent == "O") {
			console.log("O wins!");
			boxes[4].style.background = "green";
			boxes[5].style.background = "green";
			boxes[6].style.background = "green";
			oWin = true;

		} else if (boxes[3].textContent == "O" && boxes[7].textContent == "O") {
			console.log("O wins!");
			boxes[3].style.background = "green";
			boxes[5].style.background = "green";
			boxes[7].style.background = "green";
			oWin = true;
		}

	} else if (boxes[1].textContent == "O")	{

		if (boxes[2].textContent == "O" && boxes[3].textContent == "O") {
			console.log("O wins!");
			boxes[1].style.background = "green";
			boxes[2].style.background = "green";
			boxes[3].style.background = "green";
			oWin = true;

		} else if (boxes[4].textContent == "O" && boxes[7].textContent == "O") {
			console.log("O wins!");
			boxes[1].style.background = "green";
			boxes[4].style.background = "green";
			boxes[7].style.background = "green";
			oWin = true;
		} 

	} else if (boxes[9].textContent == "O") {

		if (boxes[7].textContent == "O" && boxes[8].textContent =="O") {
			console.log("O wins!");
			boxes[7].style.background = "green";
			boxes[8].style.background = "green";
			boxes[9].style.background = "green";
			oWin = true;

		} else if (boxes[3].textContent == "O" && boxes[6].textContent == "O") {
			console.log("O wins!");
			boxes[3].style.background = "green";
			boxes[6].style.background = "green";
			boxes[9].style.background = "green";
			oWin = true;
		}
	}
}
