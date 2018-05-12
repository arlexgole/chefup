var mode = "introPage"; 
var x_pos = 301;
var pressed = false;
var completed = false;
var key = false;
var portionUpdate = "";
var handUpdate = "";
var cookUpdate = "";
// var cookUpdate1 = "";
var doneUpdate = "";
var onionClick = 0;
var mixLevel = "one";
var pastaDoneness = 0;

var portionGameScore = 0;

var meatCookTime = 0;
var timeGameScore = 0;


var hand = "closed";
var cuttingPressed = false;

lv1Passed = false;
lv2Passed = false;
lv3Passed = false;
lv4Passed = false;
lv5Passed = false; 

var pastaAlDente = false;
var pastaHard = false;
var pastaSoft = false;

// hand game
// var hand = "closed";
// var handImg = document.getElementById('cuttingHand');

$(document).ready(function(){
	// clear();
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
		pastaSpaghetti.style.visibility = "hidden";
		chick.style.visibility = "hidden";
		sauce.style.visibility = "hidden";

		// show select page
		selectPage.style.visibility = "visible";
		backButton.style.visibility = "hidden";
		onionClick = 0;
		onion.src = "img/onion.png"
		mode = "selectPage";
	}

	// Get the modal
	var modal = document.getElementById('myModal');
	var modalPastaGood = document.getElementById('pastaGoodModal');
	var tryAgain = document.getElementById('tryAgain');
	var tryAgainGoodPasta = document.getElementById('tryAgainGoodPasta');
	var takeQuiz = document.getElementById('takeQuiz');
	var takeQuizPastaGood = document.getElementById('takeQuizGoodPasta');
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
			cookUpdate = setInterval(cookMeats, 300);
			resetMeat();
	    }
	    if (mode == "mixGame"){
	    	modal.style.display = "none";
	    	mixLevel = "one";
	    	mixImg.src = "img/potEmpty.svg";
	    	chick.style.visibility = "visible";
	    	pastaSpaghetti.style.visibility = "visible";
	    	sauce.style.visibility = "visible";
	    }
	}

	tryAgainGoodPasta.onclick = function () {
		pastaAlDente = false;
		pastaHard = false;
		pastaSoft = false;
		pastaGoodModal.style.display = "none";
		var doneGameEating = document.getElementById("doneGameEating");
		var doneGameGood = document.getElementById("doneGameGood");
		doneGameEating.src = "img/mouthOpen.svg"
		doneGameGood.src = ""

	}

	takeQuizPastaGood.onclick = function () {
		pastaGoodModal.style.display = "none";
    	
		pastaAlDente = false;
		pastaHard = false;
		pastaSoft = false;
		
		var doneGameEating = document.getElementById("doneGameEating");
		var doneGameGood = document.getElementById("doneGameGood");
		doneGameEating.src = "img/mouthOpen.svg";
		doneGameGood.src = "";

    	doneGame.style.visibility = "hidden";
    	doneQuiz.style.visibility = "visible";
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
		if (mode == "timeGame"){
			modal.style.display = "none";
	    	resetMeat();
	    	timeGame.style.visibility = "hidden";
	    	timeQuiz.style.visibility = "visible";
		}
		if (mode == "mixGame"){
			modal.style.display = "none";
			mixGame.style.visibility = "hidden";
	    	mixQuiz.style.visibility = "visible";
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

	var doneQuiz1 = document.getElementById("doneQuiz1");
	var doneQuiz1A = document.getElementById("doneQuiz1A");


	var timeQuiz1 = document.getElementById("timeQuiz1");
	var timeQuiz1A = document.getElementById("timeQuiz1A");
	var timeQuiz2 = document.getElementById("timeQuiz2");
	var timeQuiz2A = document.getElementById("timeQuiz2A");

	var mixQuiz1 = document.getElementById("mixQuiz1");
	var mixQuiz1A = document.getElementById("mixQuiz1A");
	var mixQuiz2 = document.getElementById("mixQuiz2");
	var mixQuiz2A = document.getElementById("mixQuiz2A");


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
	timeQuiz1.onclick = function() {
		console.log("here");
		timeQuiz1A.style.display = "block";
	}
	timeQuiz2.onclick = function() {
		console.log("here");
		timeQuiz2A.style.display = "block";
	}
	mixQuiz1.onclick = function() {
		console.log("here");
		mixQuiz1A.style.display = "block";
	}
	mixQuiz2.onclick = function() {
		console.log("here");
		mixQuiz2A.style.display = "block";
	}

	doneQuiz1.onclick = function() {
		console.log("here");
		doneQuiz1A.style.display = "block";
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



	
	// contiue from portion lesson
	conPortionLesson.onclick = function() {
	    portionLesson.style.visibility = "hidden";
	    portionGame.style.visibility = "visible";
	    mode = "portionGame";
	    portionUpdate = setInterval(createBar, 30);
	}
	conCuttingLesson.onclick = function() {
	    cuttingLesson.style.visibility = "hidden";
	    cuttingGame.style.visibility = "visible";
	    mode = "cuttingGame";
	    console.log(mode);
	}
	conCuttingGame.onclick = function() {
	    cuttingGame.style.visibility = "hidden";
	    conCuttingGame.style.visibility = "hidden";
	    cuttingGame1.style.visibility = "visible";
	    mode = "cuttingGame1";
	    handUpdate = setInterval(moveHand, 300);
	    console.log(mode);
	}
	conDoneLesson.onclick = function() {
	    hideAll();
	    doneGame.style.visibility = "visible";
	    mode = "doneGame";
	    doneUpdate = setInterval(checkDoneness, 300);
	    console.log(mode);
	}
	conTimeLesson.onclick = function() {
	    hideAll();
	    timeGame.style.visibility = "visible";
	    mode = "timeGame";
	    cookUpdate = setInterval(cookMeats, 300);
	    console.log(mode);
	}
	conMixLesson.onclick = function() {
	    hideAll();
	    mixGame.style.visibility = "visible";
	    mode = "mixGame";
	    mixLevel = "one";
	    pastaSpaghetti.style.visibility = "visible";
	    chick.style.visibility = "visible";
	    sauce.style.visibility = "visible";
	    mixImg.src = "img/potEmpty.svg";
	    console.log(mode);
	}

	var mixImg = document.getElementById("potEmpty");
	var pastaSpaghetti = document.getElementById("pastaSpaghetti");
	var chick = document.getElementById("chick");
	var sauce = document.getElementById("sauce");
	var mixText = document.getElementById("mixText");

	// mixing game
	chick.onclick = function() {
		if (mixLevel == "one"){
			chick.style.visibility = "hidden";
			mixImg.src = "img/mix1.svg";
			mixLevel = "two";
			mixText.innerHTML = "2. Put in the sauce"
		}
		else{
			console.log("you lost");
		}
	}

	sauce.onclick = function() {
		if (mixLevel == "two"){
			sauce.style.visibility = "hidden";
			mixImg.src = "img/mix2.svg";
			mixLevel = "three";
			mixText.innerHTML = "3. Put in the pasta"
		}
		else{
			console.log("you lost mix game");
		}
	}

	pastaSpaghetti.onclick = function() {
		if (mixLevel == "three"){
			pastaSpaghetti.style.visibility = "hidden";
			mixImg.src = "img/mix3.svg";
			mixLevel = "four";
			mixText.innerHTML = "4. Click the pot and mix"
		}
		else{
			console.log("you lost mix game");
		}
	}

	mixImg.onclick = function() {
		if (mixLevel == "four"){
			mixImg.src = "img/mix4.svg"
			mixLevel = "five"
		} else 

		if (mixLevel == "five"){
			mixImg.src = "img/mix5.svg"
			mixLevel = "six"
		} else 

		if (mixLevel == "six"){
			mixImg.src = "img/mix6.svg"
			mixLevel = "seven"
		} else 
		
		if (mixLevel == "seven"){
			portionFeedback.innerHTML = "Good job mixing!";
			tryAgain.style.visibility = "hidden"
			modal.style.display = "block";
			portionFeedbackChef.src = "img/happyChef.png"
			lv5Passed = true;

		}
		else{
			console.log("you lost");
		}
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
	var meat1CookTime = getRandomInt(0,20);
	var meat2CookTime = getRandomInt(0,20);
	var meat3CookTime = getRandomInt(0,20);
	var meat4CookTime = getRandomInt(0,20);
	var meat5CookTime = getRandomInt(0,20);
	var cookOffset = 10;


	function resetMeat() {
		timeGameScore = 0;
		meatCookTime = 0;
		meat1CookTime = getRandomInt(0,20);
		meat2CookTime = getRandomInt(0,20);
		meat3CookTime = getRandomInt(0,20);
		meat4CookTime = getRandomInt(0,20);
		meat5CookTime = getRandomInt(0,20);
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
		meat5.style.left = "470px";
		meat4.style.left = "600px";
		meat3.style.left = "630px";
		meat2.style.left = "630px";
		meat1.style.left = "470px";
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}

	// timing game
	function cookMeats(){

		if (meat1Level == "clicked" && meat2Level == "clicked" && meat3Level == "clicked" && meat4Level == "clicked" && meat5Level == "clicked") {
			clearInterval(cookUpdate);

			if (timeGameScore == 0) {
				portionFeedback.innerHTML = "None of the chicken is cooked right...";
				tryAgain.style.visibility = "visible"
				modal.style.display = "block";
				portionFeedbackChef.src = "img/angryChef.png"
			} else if (timeGameScore == 5) {
				portionFeedback.innerHTML = "You perfectly cooked " + timeGameScore + " pieces of chicken!";
				tryAgain.style.visibility = "hidden"
				modal.style.display = "block";
				portionFeedbackChef.src = "img/happyChef.png"
				lv4Passed = true;
			}
			else {
				portionFeedback.innerHTML = "You did not cook " + (5 - timeGameScore) + " pieces of chicken right.";
				tryAgain.style.visibility = "visible"
				modal.style.display = "block";
				portionFeedbackChef.src = "img/angryChef.png"				
			}
		}


		if (meat1Level != "clicked") {
			if (meatCookTime > meat1CookTime) {
				meat1.src = "1done.png";
				meat1Level = "done";
			}
			if (meatCookTime > meat1CookTime + cookOffset) {
				meat1.src = "1burnt.png";
				meat1Level = "burnt";
			}
			meat1.onclick = function() {
				meat1.style.left = "100px";
				if (meat1Level == "done") {timeGameScore += 1};
				meat1Level = "clicked";
			}
		}

		if (meat2Level != "clicked") {
			if (meatCookTime > meat2CookTime) {
				meat2.src = "2done.png";
				meat2Level = "done";
			}
			if (meatCookTime > meat2CookTime + cookOffset){
				meat2.src = "2burnt.png";
				meat2Level = "burnt";
			}			
			meat2.onclick = function() {
				meat2.style.left = "130px";
				if (meat2Level == "done") {timeGameScore += 1};
				meat2Level = "clicked";
			}
		}

		if (meat3Level != "clicked") {
			if (meatCookTime > meat3CookTime) {
				meat3.src = "3done.png";
				meat3Level = "done";
			}
			if (meatCookTime > meat3CookTime + cookOffset){
				meat3.src = "3burnt.png";
				meat3Level = "burnt";
			}			
			meat3.onclick = function() {
				meat3.style.left = "100px";
				if (meat3Level == "done") {timeGameScore += 1};
				meat3Level = "clicked";
			}
		}
		
		if (meat4Level != "clicked") {
			if (meatCookTime > meat4CookTime) {
				meat4.src = "4done.png";
				meat4Level = "done";
			}
			if (meatCookTime > meat4CookTime + cookOffset){
				meat4.src = "4burnt.png";
				meat4Level = "burnt";
			}			
			meat4.onclick = function() {
				meat4.style.left = "100px";
				if (meat4Level == "done") {timeGameScore += 1};
				meat4Level = "clicked";
			}
		}

		if (meat5Level != "clicked") {
			if (meatCookTime > meat5CookTime) {
				meat5.src = "5done.png";
				meat5Level = "done";
			}
			if (meatCookTime > meat5CookTime + cookOffset){
				meat5.src = "5burnt.png";
				meat5Level = "burnt";
			}			
			meat5.onclick = function() {
				meat5.style.left = "100px";
				if (meat5Level == "done") {timeGameScore += 1};
				meat5Level = "clicked";
			}
		}

		meatCookTime += 1;
		console.log(meatCookTime);

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
    	}
    	if (mode == "cuttingGame1"){
    		cuttingPressed = true;
    	}
	});

	window.addEventListener('keyup', function (e) {
		if (mode == "portionGame"){
			// stopped pressing space  
			if (key == 32){
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

	if (mode == "selectPage" && lv1Passed && lv2Passed &&  lv3Passed && lv4Passed && lv5Passed) {
		var finalLevelButton = document.getElementById("finalLevelButton")
		finalLevelButton.style.visibility = "visible";
	} else {
		var finalLevelButton = document.getElementById("finalLevelButton")
		finalLevelButton.style.visibility = "hidden";		
	}


	if (lv1Passed) {
		var portion = document.getElementById("portion");
		portion.style.backgroundColor = "green"
	}

	if (lv2Passed) {
		var cutting = document.getElementById("cutting");
		cutting.style.backgroundColor = "green"
	}

	if (lv3Passed) {
		var done = document.getElementById("done?");
		done.style.backgroundColor = "green"
	}
	
	if (lv4Passed) {
		var time = document.getElementById("timing");
		time.style.backgroundColor = "green"
	}
	
	if (lv5Passed) {
		var mix = document.getElementById("mixing");
		mix.style.backgroundColor = "green"
	}

	if (mode != "portionGame"){
		clearInterval(portionUpdate);
	}
	if (mode != "cuttingGame1"){
		clearInterval(handUpdate);
	}
	if (mode != "timeGame"){
		clearInterval(cookUpdate);
	}

	if (mode != "doneGame"){
		clearInterval(doneUpdate);
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
			if (x_pos<900 && pressed && key==32){
				x_pos += 10;
				line.style.left = x_pos + 'px';
			} else {
				x_pos = 301;
			}
		// player has completed the game
		} else {
			if (x_pos > 618){
				portionFeedback.innerHTML = "You poured too much salt!";
				tryAgain.style.visibility = "visible"

				modal.style.display = "block";
				portionFeedbackChef.src = "img/angryChef.png"
			}
			else if (x_pos < 582){
				portionFeedback.innerHTML = "You poured too little salt!";
				tryAgain.style.visibility = "visible";
				modal.style.display = "block";
				portionFeedbackChef.src = "img/angryChef.png"
			}
			else {
				portionFeedback.innerHTML = "Good job!";
				tryAgain.style.visibility = "hidden";
				modal.style.display = "block";
				portionFeedbackChef.src = "img/happyChef.png";
				lv1Passed = true;
				if (portionGameScore == 0){
					portionGameScore = 1;
				}
				console.log(portionGameScore);
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
			tryAgain.style.visibility = "visible"
			modal.style.display = "block";
			portionFeedback.innerHTML = "You cut your fingers!";
			portionFeedbackChef.src = "img/angryChef.png"
			// console.log("you lost");
		}
		else {
			tryAgain.style.visibility = "hidden"
			modal.style.display = "block";
			portionFeedback.innerHTML = "Good job! You kept your fingers!";
			portionFeedbackChef.src = "img/happyChef.png";
			lv2Passed = true;
			// console.log("you win");
		}
	}
	// setTimeout(down, milliseconds)
	// setTimeout(down, milliseconds)
}

var pastaAlDente = false;
var pastaHard = false;
var pastaSoft = false;

function eating1(){
	var doneGameEating = document.getElementById("doneGameEating");
	var doneGameGood = document.getElementById("doneGameGood");
	doneGameEating.src = "img/mouthMid.svg"
	setTimeout(eating2, 300);
}

function eating2(){
	var doneGameEating = document.getElementById("doneGameEating");
	var doneGameGood = document.getElementById("doneGameGood");
	var doneGameText = document.getElementById("resetText");

	doneGameEating.src = "img/mouthClose.svg"
	doneGameText.innerHTML = "<br>"

	if (pastaHard) {
		doneGameGood.src = "img/tooHard.svg"
		doneGameText.innerHTML = "Check again in a bit."
	}

	if (pastaSoft) {
		doneGameGood.src = "img/tooSoft.svg"
		doneGameText.innerHTML = "Start over."
		pastaDoneness = 0;
	}

	if (pastaAlDente) {
		doneGameGood.src = "img/pastaGood.svg"
		lv3Passed = true;
	}

}



function checkDoneness(){
	var potSpaghetti = document.getElementById('potSpaghetti');
	var modal = document.getElementById('pastaGoodModal');
	var modalContent = document.getElementById('pastaGoodModalContent')
	var doneGameText = document.getElementById("resetText");


	pastaDoneness += 1;
	console.log(pastaDoneness);

	potSpaghetti.onclick = function () {
		doneGameText.innerHTML = "<br>"
		if (pastaDoneness < 20) {
			pastaHard = true;
			modalContent.style.backgroundColor = 'red'

			tryAgainGoodPasta.style.visibility = "visible"
		} else 
		if (pastaDoneness > 30) {
			modalContent.style.backgroundColor = 'red'
			pastaSoft = true;
			tryAgainGoodPasta.style.visibility = "visible"
		} else {
			modalContent.style.backgroundColor = '#8CC63F'
			pastaAlDente = true;
			tryAgainGoodPasta.style.visibility = "hidden"
		}

		modal.style.display = "block";
		setTimeout(eating1, 300);

	}
}

