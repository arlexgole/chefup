var mode = "introPage"; 
var x_pos = 301;
var pressed = false;
var completed = false;
var key = false;
var portionUpdate = "";
var handUpdate = "";
var cookUpdate = "";
var onionClick = 0;
sessionStorage.portionGameScore = 0;
sessionStorage.timeGameScore = 0;

var hand = "closed";
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
		portionQuiz.style.visibility = "hidden";
		cuttingLesson.style.visibility = "hidden";
		cuttingGame.style.visibility = "hidden";
		cuttingGame1.style.visibility = "hidden";
		cuttingQuiz.style.visibility = "hidden";
		conCuttingGame.style.visibility = "hidden";
		doneLesson.style.visibility = "hidden";
		doneGame.style.visibility = "hidden";
		doneQuiz.style.visibility = "hidden";

		timeLesson.style.visibility = "hidden";
		timeGame.style.visibility = "hidden";
		timeQuiz.style.visibility = "hidden";
		resetMeat();

		mixLesson.style.visibility = "hidden";
		mixGame.style.visibility = "hidden";
		mixQuiz.style.visibility = "hidden";
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
	var handImg = document.getElementById('cuttingHand');
	tryAgain.onclick = function() {
	    if (mode == "portionGame"){
	    	console.log("portionGame try again");
	    	modal.style.display = "none";
	        completed = false;
	    	x_pos = 301;
	    	line.style.left = x_pos + 'px';
	    }
	    if (mode == "cuttingGame1"){
	    	modal.style.display = "none";
	    	cuttingPressed = false;
	    	hand = "closed";
	    	handImg.src = "handClosed.png";
	    }
	    if (mode == "timeGame"){
			modal.style.display = "none";
			resetMeat();
	    }

	}
	takeQuiz.onclick = function(){
		if (mode == "portionGame"){
			modal.style.display = "none";
			completed = false;
			x_pos = 301;
	    	line.style.left = x_pos + 'px';
			portionGame.style.visibility = "hidden";
			portionQuiz.style.visibility = "visible";
		}
		if (mode == "cuttingGame1"){
			modal.style.display = "none";
	    	cuttingPressed = false;
	    	hand = "closed";
	    	handImg.src = "handClosed.png";
	    	cuttingGame1.style.visibility = "hidden";
	    	cuttingQuiz.style.visibility = "visible";
		}
	}

	// buttons in the start page
	var portion = document.getElementById("portion");
	var cutting = document.getElementById("cutting");
	var done = document.getElementById("done?");
	var time = document.getElementById("timing");
	var mix = document.getElementById("mixing");

	// the different screens
	var portionLesson = document.getElementById("portionLesson");
	var portionGame = document.getElementById("portionGame");
	var portionQuiz = document.getElementById("portionQuiz");
	var cuttingLesson = document.getElementById("cuttingLesson");
	var cuttingGame = document.getElementById("cuttingGame");
	var cuttingGame1 = document.getElementById("cuttingGame1");
	var cuttingQuiz = document.getElementById("cuttingQuiz");
	var doneLesson = document.getElementById("doneLesson");
	var doneGame = document.getElementById("doneGame");
	var doneQuiz = document.getElementById("doneQuiz");
	var timeLesson = document.getElementById("timeLesson");
	var timeGame = document.getElementById("timeGame");
	var timeQuiz  = document.getElementById("timeQuiz");
	var mixLesson = document.getElementById("mixLesson");
	var mixGame = document.getElementById("mixGame");
	var mixQuiz  = document.getElementById("mixQuiz");


	// showing quiz answers
	var portionQuiz1 = document.getElementById("portionQuiz1");
	var portionQuiz1A = document.getElementById("portionQuiz1A");
	var portionQuiz2 = document.getElementById("portionQuiz2");
	var portionQuiz2A = document.getElementById("portionQuiz2A");

	var cuttingQuiz1 = document.getElementById("cuttingQuiz1");
	var cuttingQuiz1A = document.getElementById("cuttingQuiz1A");
	var cuttingQuiz2 = document.getElementById("cuttingQuiz2");
	var cuttingQuiz2A = document.getElementById("cuttingQuiz2A");

	// var timeQuiz1 = document.getElementById("timeQuiz1");
	// var timeQuiz1A = document.getElementById("timeQuiz1A");
	// var timeQuiz2 = document.getElementById("timeQuiz2");
	// var timeQuiz2A = document.getElementById("timeQuiz2A");

	// var mixQuiz1 = document.getElementById("mixQuiz1");
	// var mixQuiz1A = document.getElementById("mixQuiz1A");
	// var mixQuiz2 = document.getElementById("mixQuiz2");
	// var mixQuiz2A = document.getElementById("mixQuiz2A");


	portionQuiz1.onclick = function() {
		console.log("here");
		portionQuiz1A.style.display = "block";
	}
	portionQuiz2.onclick = function() {
		console.log("here");
		portionQuiz2A.style.display = "block";
	}
	cuttingQuiz1.onclick = function() {
		console.log("here");
		cuttingQuiz1A.style.display = "block";
	}
	cuttingQuiz2.onclick = function() {
		console.log("here");
		cuttingQuiz2A.style.display = "block";
	}


	// onion
	var onion = document.getElementById("onion");

	// different continue
	var conPortionLesson = document.getElementById("conPortionLesson");
	var conCuttingLesson = document.getElementById("conCuttingLesson");
	var conCuttingGame = document.getElementById("conCuttingGame");
	var conDoneLesson = document.getElementById("conDoneLesson");
	var conTimeLesson = document.getElementById("conTimeLesson");
	var conMixLesson = document.getElementById("conMixLesson");

	// click portion mini game
	portion.onclick = function() {
	    hideAll();
	    portionLesson.style.visibility = "visible";
	    backButton.style.visibility = "visible";
	    mode = "portionLesson";
	    console.log(mode);
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
	    backButton.style.visibility = "visible";
	    setTimeout(eating, 1000);
	    mode = "doneLesson";
	    console.log(mode);
	}
	time.onclick = function() {
	    hideAll();
	    timeLesson.style.visibility = "visible";
	    backButton.style.visibility = "visible";
	    mode = "timeLesson";
	    console.log(mode);
	}
	mix.onclick = function() {
	    hideAll();
	    mixLesson.style.visibility = "visible";
	    backButton.style.visibility = "visible";
	    mode = "mixLesson";
	    console.log(mode);
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
	conTimeLesson.onclick = function() {
	    hideAll();
	    timeGame.style.visibility = "visible";
	    mode = "timeGame";
	    cookUpdate = setInterval(cookMeats, 1000);
	    console.log(mode);
	}
	conMixLesson.onclick = function() {
	    hideAll();
	    mixGame.style.visibility = "visible";
	    mode = "mixGame";
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


	// timing game
	var meat1Level = "raw";
	var meat2Level = "raw";
	var meat3Level = "raw";
	var meat4Level = "raw";
	var meat5Level = "raw";
	var meat1 = document.getElementById("meat1");
	var meat2 = document.getElementById("meat2");
	var meat3 = document.getElementById("meat3");
	var meat4 = document.getElementById("meat4");
	var meat5 = document.getElementById("meat5");

	function resetMeat() {
		console.log("reset");
		clearInterval(cookUpdate);
		meat1Level = "raw";
		meat2Level = "raw";
		meat3Level = "raw";
		meat4Level = "raw";
		meat5Level = "raw";
		meat1.src = "1raw.png";
		meat2.src = "2raw.png";
		meat3.src = "3raw.png";
		meat4.src = "4raw.png";
		meat5.src = "5raw.png";
	}

	meat5.onclick = function() {
		if (meat5Level == "raw"){
			clearInterval(cookUpdate);
			portionFeedback.innerHTML = "The meat is still raw!";
			modal.style.display = "block";
			portionFeedbackChef.src = "angryChef.png"
		}
		else { 
			meat5Level = "clicked";
			sessionStorage.timeGameScore = 1; 
			meat5.style.left = "100px";
			console.log("score");
		}		
	}
	
	// timing game
	function cookMeats(){
		setTimeout(cookMeat1, 1700);
		setTimeout(cookMeat2, 1400);
		setTimeout(cookMeat3, 1100);
		setTimeout(cookMeat4, 800);
		setTimeout(cookMeat5, 500);
		function cookMeat1(){
			if (meat1Level == "raw"){
				meat1.src = "1done.png";
				meat1Level = "done";
			}
			else if (meat1Level == "done"){
				meat1.src = "1burnt.png";
				meat1Level = "burnt";
			}
			else{
				console.log("you lose")
			}
		}
		function cookMeat2(){
			if (meat2Level == "raw"){
				meat2.src = "2done.png";
				meat2Level = "done";
			}
			else if (meat2Level == "done"){
				meat2.src = "2burnt.png";
				meat2Level = "burnt";
			}
			else{
				console.log("you lose")
			}
		}
		function cookMeat3(){
			if (meat3Level == "raw"){
				meat3.src = "3done.png";
				meat3Level = "done";
			}
			else if (meat3Level == "done"){
				meat3.src = "3burnt.png";
				meat3Level = "burnt";
			}
			else{
				console.log("you lose")
			}
		}
		function cookMeat4(){
			if (meat4Level == "raw"){
				meat4.src = "4done.png";
				meat4Level = "done";
			}
			else if (meat4Level == "done"){
				meat4.src = "4burnt.png";
				meat4Level = "burnt";
			}
			else{
				console.log("you lose")
			}
		}
		function cookMeat5(){
			if (meat5Level == "raw"){
				meat5.src = "5done.png";
				meat5Level = "done";
			}
			else if (meat5Level == "done"){
				meat5.src = "5burnt.png";
				meat5Level = "burnt";
			}
			else{
				console.log("you lose");
			}
		}
	}

	// hiding all the screens
	function hideAll(){
		selectPage.style.visibility = "hidden";
		playPage.style.visibility = "hidden";
		portionLesson.style.visibility = "hidden";
		cuttingLesson.style.visibility = "hidden";
		doneLesson.style.visibility = "hidden";
		timeLesson.style.visibility = "hidden";
		mixLesson.style.visibility = "hidden";
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

	setInterval(checkUpdates, 1000);
}

// checking the updates
function checkUpdates(){
	console.log("checking updates");
	if (mode != "portionGame"){
		clearInterval(portionUpdate);
	}
	if (mode != "cuttingGame1"){
		clearInterval(handUpdate);
	}
	if (mode != "timeGame"){
		clearInterval(cookUpdate);
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


