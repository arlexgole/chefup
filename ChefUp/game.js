var mode = "intro"; 
var x_pos = 301;
var pressed = false;
var completed = false;
var key = false;


$(document).ready(function(){
	// intro page
	var introPage = document.getElementById('introPage');
	var play = document.getElementById('playButton');
	// start page
	var start = document.getElementById('startPage');

	play.onclick = function() {
	    introPage.style.visibility = "hidden";
	    start.style.visibility = "visible";
	    mode = "start"
	}

	// Get the modal
	var modal = document.getElementById('myModal');
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}




	// buttons in the start page
	var portion = document.getElementById("portion");
	var cutting = document.getElementById("cutting");

	// the different screens
	var portionGame = document.getElementById("portionGame");

	var cuttingLesson = document.getElementById("cuttingLesson");


	// onion
	var continueB = document.getElementById("continue");
	var onion = document.getElementById("onion");


	portion.onclick = function() {
	    hideAll();
	    portionGame.style.visibility = "visible";
	    mode = "portion"
	}

	cutting.onclick = function() {
	    hideAll();
	    cuttingLesson.style.visibility = "visible";
	    mode = "cutting"
	}

	onion.onclick = function() {
	    onion.src = "onionCut.png";
	}

	continueB.onclick = function() {
	    hideAll();
	    cuttingGame.style.visibility = "visible";
	    mode = "portion"
	}

	// hiding all the screens
	function hideAll(){
		start.style.visibility = "hidden";
		portionGame.style.visibility = "hidden";
		cuttingLesson.style.visibility = "hidden";
	}

	startGame();
});

function startGame() {

	window.addEventListener('keydown', function (e) {
		if (mode == "portion"){
    		key = e.keyCode;
    		pressed = true; 
    		console.log('true')
    	}
	});

	window.addEventListener('keyup', function (e) {
		if (mode == "portion"){
			// stopped pressing space  
			if (key == 32){
				console.log('keyup');
		   		pressed = false;
		   		completed = true;
		    }
		}
	});

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		var modal = document.getElementById('myModal');
	    if (event.target == modal) {
	        modal.style.display = "none";
	        console.log('hi');
	        completed = false;
	    }
	}

	createBar();

	this.interval = setInterval(updateGameArea, 15);
}


function createBar(){
	var line = document.getElementById('line');
	var modal = document.getElementById('myModal');
		if (!(completed)) {
			// less than 1000 
			if (x_pos<1000 && pressed && key==32){
				x_pos += 10;
				line.style.left = x_pos + 'px';
			} else {
				x_pos = 301;
			}
		// player has completed the game
		} else {
			if (x_pos > 600){
			modal.style.display = "block";
			}
		}
}		

function updateGameArea() {
    createBar();
}

