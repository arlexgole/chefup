completed = false;
var x_pos = 301;
var pressed = false;
var completed = false;
var key = false;
var mode = 1;
var feedback = "Congratulations on finishing , youngster!<br><br>";

var doneUpdate = "";
var pastaDoneness = 0;

var portionUpdate = "";
var portionGameScore = 0;

var handUpdate = "";
var cuttingPressed = false;
var hand = "closed";

var cookUpdate = "";
var cookUpdate = "1";

var meatCookTime = 0;
var timeGameScore = 0;

var mixLevel = "one";


$(document).ready(function(){

	var firstGame = document.getElementById("firstGame");
	var secondGame = document.getElementById("secondGame");
	var thirdGame = document.getElementById("thirdGame");
	var fourthGame = document.getElementById("fourthGame");
	var fifthGame = document.getElementById("fifthGame");
	var sixthGame = document.getElementById("sixthGame");
	var seventhGame = document.getElementById("seventhGame");
	var eighthGame = document.getElementById("eighthGame");
	var ninethGame = document.getElementById("ninethGame");
	var tenthGame = document.getElementById("tenthGame");

/////////////////////////////////////////////////////////////////////////////////////////// continue to Doneness Game

	function checkDoneness(){
		var potSpaghetti = document.getElementById('potSpaghetti');
		pastaDoneness += 1;
		console.log(pastaDoneness);

		potSpaghetti.onclick = function () {
			if (pastaDoneness < 20) {
				feedback += "Pasta Doneness: "
				feedback += "You cooked the pasta for too short. <br>";
			}

			else if (pastaDoneness > 30) {
				feedback += "Pasta Doneness: "
				feedback += "You cooked the pasta for too long. <br>";
			}

			else {
				feedback += "Pasta Doneness: "
				feedback += "You cooked the pasta al dente! <br>";
			}
				mode = 4;
				thirdGame.remove();
		   		fourthGame.style.visibility = "visible"; 
		   		clearInterval(doneUpdate);
		}
	}

	var conSecond = document.getElementById("conSecondGame");
	conSecond.onclick = function() {
		feedback += "Quiz Result: "

		console.log("clicky");

		if (document.getElementById("right2").checked) {
			feedback += "Correct. You should add acidity. <br><br>";
		} else {
			feedback += "Incorrect. Revisit the lesson on seasoning. <br><br>";
		}

		
		mode = 3;
		secondGame.remove();
   		thirdGame.style.visibility = "visible"; 
   		doneUpdate = setInterval(checkDoneness, 300);

	}


/////////////////////////////////////////////////////////////////////////////////////////// continue to Cutting Game
	function moveHand(){
		var handImg = document.getElementById('cuttingHand');

		window.addEventListener('keydown', function (e) {
			cuttingPressed = true;
		});


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
			if (hand == "open"){
				feedback += "Cutting the Chicken: "
				feedback += "You cut your fingers! <br>";
			}
			else {
				feedback += "Cutting the Chicken: "
				feedback += "Your fingers are still attached! <br>";
			}
			mode = 6;
			fifthGame.remove();
	   		sixthGame.style.visibility = "visible"; 
	   		clearInterval(handUpdate);
		}
	}

	var conFourth = document.getElementById("conFourthGame");
	conFourth.onclick = function() {
		feedback += "Quiz Results: "
		if (document.getElementById("right4").checked) {
			feedback += "Correct. Check if fish is cooked by its texture. <br><br>";
		} else {
			feedback += "Incorrect. Revisit the lesson on doneness. <br><br>";
		}
		
		mode = 5;
		fourthGame.remove();
   		fifthGame.style.visibility = "visible"; 
   		handUpdate = setInterval(moveHand, 100);

	}

/////////////////////////////////////////////////////////////////////////////////////////// continue to Timing Game
	
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
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
	var meat1CookTime = getRandomInt(0,5);
	var meat2CookTime = getRandomInt(0,5);
	var meat3CookTime = getRandomInt(0,5);
	var meat4CookTime = getRandomInt(0,5);
	var meat5CookTime = getRandomInt(0,5);
	var cookOffset = 5;




	// timing game
	function cookMeats(){

		if (meat1Level == "clicked" && meat2Level == "clicked" && meat3Level == "clicked" && meat4Level == "clicked" && meat5Level == "clicked") {
			feedback += "Cooking the Chicken: "
			feedback += "You perfectly cooked " + timeGameScore + " pieces of chicken! <br>";
			mode = 8;
			seventhGame.remove();
	   		eighthGame.style.visibility = "visible"; 
			clearInterval(cookUpdate);
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

	var conSixth = document.getElementById("conSixthGame");
	conSixth.onclick = function() {
		feedback += "Quiz Results: "
		if (document.getElementById("right6").checked) {
		   	feedback += "Correct. Use the claw position when cutting. <br><br>";
		} else {
	   		feedback += "Incorrect. Revisit the lesson on cutting. <br><br>";
		}
		
		mode = 7;
		sixthGame.remove();
   		seventhGame.style.visibility = "visible"; 
   		
   		cookUpdate = setInterval(cookMeats, 300);
	}

/////////////////////////////////////////////////////////////////////////////////////////// continue to Mixing Game
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
			mode = 10;
			feedback += "Mixing Everything Together: "
			feedback += "Great job mixing! <br>"
			ninethGame.remove();
			tenthGame.style.visibility = "visible";

		}
		else{
			console.log("you lost");
		}
	}

	var conEighth = document.getElementById("conEighthGame");
	conEighth.onclick = function() {
		feedback += "Quiz Results: "
		if (document.getElementById("right8").checked) {
		   	feedback += "Correct: Clean as you go to save time. <br><br>";
		} else {
	   		feedback += "Incorrect. Revisit the lesson on timing. <br><br>";
		}
		
		mode = 9;
		eighthGame.remove();
   		ninethGame.style.visibility = "visible"; 
	}

/////////////////////////////////////////////////////////////////////////////////////////// Seasoning Game

	portionUpdate = setInterval(createBar, 15);
	function createBar(){
		console.log("updating")
		var line = document.getElementById('line');
			if (!(completed)) {
				// less than 1000 
				if (x_pos<900 && pressed && key==32){
					x_pos += 10;
					line.style.left = x_pos + 'px';
				} else { x_pos = 301; }
			// player has completed the game
			} else {
				if (x_pos > 618){
					feedback += "Salting the water: "
					feedback += "You undersalted the water.<br>"
				}
				else if (x_pos < 582){
					feedback += "Seasoning the water: "
					feedback += "You oversalted the water.<br>"				}
				else {
					feedback += "Seasoning the water: "
					feedback += "You salted the water just the right amount.<br>"
				}
				mode = 2;
	   			firstGame.remove();
	   			secondGame.style.visibility = "visible";
	   			clearInterval(portionUpdate);
			}
		window.addEventListener('keydown', function (e) {
			if (mode == 1){
	    		key = e.keyCode;
	    		pressed = true; 
	    	}
		});

		window.addEventListener('keyup', function (e) {
			if (mode == 1){
				// stopped pressing space  
				if (key == 32){
			   		pressed = false;
			   		completed = true;   		
			    }
			}
		});
	}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Summary
	var conTenth = document.getElementById("conTenthGame");
	var summaryText = document.getElementById("summaryText");

	conTenth.onclick = function() {
		feedback += "Quiz Results: "
		if (document.getElementById("right10").checked) {
		   	feedback += "Correct. Aim for uniform distribution. <br><br>";
		} else {
	   		feedback += "Incorrect. Revisit the lesson on mixing. <br><br>";
		}
		
		mode = 11;
		tenthGame.remove();
   		eleventhGame.style.visibility = "visible"; 
   		summaryText.innerHTML = feedback;
	}

	var conEleventh = document.getElementById("conEleventhGame");
	conEleventh.onclick = function() {
		location.reload();
	}
});