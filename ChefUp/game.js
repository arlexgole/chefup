var mode = "introPage"; 
var x_pos = 301;
var pressed = false;
var completed = false;
var key = false;
var portionUpdate = "";
var onionClick = 0;
sessionStorage.portionGameScore = 0;


var cuttingPressed = false;

// hand game
// var hand = "closed";
// var handImg = document.getElementById('cuttingHand');

$(document).ready(function(){
	// intro page
	// var introPage = $('#introPage')
	var introPage = document.getElementById('introPage');
	var play = document.getElementById('playButton');
	// start page
	// var playPage = $('#playPage')
	var playPage = document.getElementById('playPage');
	// player clicks play
	play.onclick = function() {
		console.log("play");
	    introPage.style.visibility = "hidden";
	    playPage.style.visibility = "visible";
	    // introPage.css("visibility", "hidden");
	    // playPage.css("visibility", "visible").fadeIn(2000);
	    mode = "startPage"
	}

	var yes = document.getElementById('yesButton');
	var selectPage = document.getElementById('selectPage');
	// player clicks Yes
	yes.onclick = function() {
	    playPage.style.visibility = "hidden";
	    selectPage.style.visibility = "visible";
	    mode = "selectPage";
	    console.log(mode)
	}
	

	var backButton = document.getElementById('backButton');
	// player clicks back
	backButton.onclick = function() {
	    console.log("back");
		// hide everything
		portionLesson.style.visibility = "hidden";
		portionGame.style.visibility = "hidden";
		cuttingLesson.style.visibility = "hidden";
		cuttingGame.style.visibility = "hidden";
		cuttingGame1.style.visibility = "hidden";
		conCuttingGame.style.visibility = "hidden";
		// show select page
		selectPage.style.visibility = "visible";
		backButton.style.visibility = "hidden";
		onionClick = 0;
		onion.src = "img/onion.png"
		mode = "selectPage";
	}

	// Get the modal
	var modal = document.getElementById('myModal');
	var tryAgain = document.getElementById('tryAgain');
	var takeQuiz = document.getElementById('takeQuiz');
	var line = document.getElementById('line');
	tryAgain.onclick = function() {
	    if (mode == "portionGame"){
	    	console.log("portionGame try again");
	    	modal.style.display = "none";
	        completed = false;
	    	x_pos = 301;
	    	line.style.left = x_pos + 'px';
	    }

	}
	// Get the <span> element that closes the modal
	// var span = document.getElementsByClassName("close")[0];
	// When the user clicks on <span> (x), close the modal
	// span.onclick = function() {
	//     modal.style.display = "none";
	// }


	// buttons in the start page
	var portion = document.getElementById("portion");
	var cutting = document.getElementById("cutting");
	var done = document.getElementById("done?");

	// the different screens
	var portionLesson = document.getElementById("portionLesson");
	var portionGame = document.getElementById("portionGame");
	var cuttingLesson = document.getElementById("cuttingLesson");
	var doneLesson = document.getElementById("doneLesson");
	var cuttingGame = document.getElementById("cuttingGame");
	var cuttingGame1 = document.getElementById("cuttingGame1");


	// onion
	var onion = document.getElementById("onion");

	// different continue
	var conPortionLesson = document.getElementById("conPortionLesson");
	var conCuttingLesson = document.getElementById("conCuttingLesson");
	var conCuttingGame = document.getElementById("conCuttingGame");
	var conDoneLesson = document.getElementById("conDoneLesson");


	// click portion mini game
	portion.onclick = function() {
	    hideAll();
	    portionLesson.style.visibility = "visible";
	    backButton.style.visibility = "visible";
	    mode = "portionLesson";
	    console.log(mode);
	    console.log(sessionStorage.portionGameScore);

	}
	cutting.onclick = function() {
	    hideAll();
	    cuttingLesson.style.visibility = "visible";
	    backButton.style.visibility = "visible";
	    mode = "cuttingLesson";
	    console.log(mode);
	}
	done.onclick = function() {
	    hideAll();
	    doneLesson.style.visibility = "visible";
	    setTimeout(eating, 1000)
	    mode = "doneLesson";
	}

	function eating(){
		var doneGameEating = document.getElementById("doneGameEating");
		var doneGameGood = document.getElementById("doneGameGood");
		doneGameEating.src = "img/mouthClose.png"
		doneGameGood.src = "img/pastaGood.png"
	}
	
	// contiue from portion lesson
	conPortionLesson.onclick = function() {
	    portionLesson.style.visibility = "hidden";
	    portionGame.style.visibility = "visible";
	    mode = "portionGame";
	    portionUpdate = setInterval(createBar, 15);
	}
	conCuttingLesson.onclick = function() {
	    cuttingLesson.style.visibility = "hidden";
	    cuttingGame.style.visibility = "visible";
	    mode = "cuttingGame";
	    console.log(mode);
	}
	conCuttingGame.onclick = function() {
	    cuttingGame.style.visibility = "hidden";
	    cuttingGame1.style.visibility = "visible";
	    mode = "cuttingGame1";
	    handUpdate = setInterval(moveHand, 300);
	    console.log(mode);
	}
	conDoneLesson.onclick = function() {
	    hideAll();
	    doneGame.style.visibility = "visible";
	    mode = "doneGame";
	    console.log(mode);
	}

	// cuttingGame onion
	onion.onclick = function() {
		if (onionClick ==0){
			onion.src = "img/onion1.png";
			onionClick = 1;
		} 
		else if (onionClick == 1){
			onion.src = "img/onion2.png";
			onionClick = 2;
		} 
		else if (onionClick == 2){
			onion.src = "img/onion3.png";
			conCuttingGame.style.visibility = "visible";
		}
	}

	// hiding all the screens
	function hideAll(){
		selectPage.style.visibility = "hidden";
		playPage.style.visibility = "hidden";
		portionLesson.style.visibility = "hidden";
		cuttingLesson.style.visibility = "hidden";
		doneLesson.style.visibility = "hidden";
	}

	// start the games
	startGame()
});

function startGame() {
	// press space
	window.addEventListener('keydown', function (e) {
		if (mode == "portionGame"){
    		key = e.keyCode;
    		pressed = true; 
    		console.log('true');
    	}
    	if (mode == "cuttingGame1"){
    		cuttingPressed = true;
    	}
	});

	window.addEventListener('keyup', function (e) {
		if (mode == "portionGame"){
			// stopped pressing space  
			if (key == 32){
				console.log('keyup');
		   		pressed = false;
		   		completed = true;
		    }
		}
	});

	// When the user clicks anywhere outside of the modal, close it
	// window.onclick = function(event) {
	// 	var modal = document.getElementById('myModal');
	//     if (event.target == modal) {
	//         modal.style.display = "none";
	//         completed = false;
	//     }
	// }

	setInterval(checkUpdates, 1000);
}

// checking the updates
function checkUpdates(){
	console.log("checking updates");
	if (mode != "portionGame"){
		clearInterval(portionUpdate);
	}
}

function createBar(){
	console.log("updating")
	var portionFeedback = document.getElementById('portionFeedback');
	var portionFeedbackChef = document.getElementById('portionFeedbackChef');
	var modal = document.getElementById('myModal');
	var line = document.getElementById('line');
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
			if (x_pos > 618){
				portionFeedback.innerHTML = "You poured too much salt!";
				modal.style.display = "block";
				portionFeedbackChef.src = "img/angryChef.png"
			}
			else if (x_pos < 582){
				portionFeedback.innerHTML = "You poured too little salt!";
				modal.style.display = "block";
				portionFeedbackChef.src = "img/angryChef.png"
			}
			else {
				portionFeedback.innerHTML = "Good job!";
				modal.style.display = "block";
				portionFeedbackChef.src = "img/happyChef.png";
				if (sessionStorage.portionGameScore == 0){
					sessionStorage.portionGameScore = 1;
				}
				console.log(sessionStorage.portionGameScore);
			}
		}
}

var hand = "closed";

function moveHand(){
	var handImg = document.getElementById('cuttingHand');
	var modal = document.getElementById('myModal');
	console.log(hand);
	if (!cuttingPressed){
		if (hand == "closed"){
			handImg.src = "img/handOpen.svg";
			hand = "open";
		}
		else {
			handImg.src = "img/handClosed.svg"
			hand = "closed";
		}
	}
	else {
		console.log(hand);
		if (hand == "open"){
			modal.style.display = "block";
			portionFeedback.innerHTML = "You cut your fingers! Look at your helping hand!";
			portionFeedbackChef.src = "img/angryChef.png"
			// console.log("you lost");
		}
		else {
			modal.style.display = "block";
			portionFeedback.innerHTML = "Good job looking at your helping hand!";
			portionFeedbackChef.src = "img/happyChef.png";
			// console.log("you win");
		}
	}
	// setTimeout(down, milliseconds)
	// setTimeout(down, milliseconds)
}


