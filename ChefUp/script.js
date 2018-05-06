var myGamePiece;
var mySalt;
var theBar;
var pressed;



$(document).ready(function(){
    startGame();
});


function startGame() {
        pressed = false;
        myGameArea.start();
        myGamePiece = new component(320,200, "pot.svg", 200, 100, "image");
        mySalt = new component(100,100, "salt.svg", 350, 90, "image");
        theBar = new createBar();
    }

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 780;
        this.canvas.height = 570;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
            pressed = true; 
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function createBar(){
    this.width = 300;
    this.height = 20;
    this.x = 200;
    this.y = 10;
    var greenX = 320
    var greenY = this.y
    var greenWidth = 50 
    var greenHeight = this.height
    var barx = this.x
    this.update = function() {
        // pressed space
        if (myGameArea.key && myGameArea.key == 32){
            if (barx > greenX && barx < (greenX + greenWidth)) {
                console.log("in")
            }
            else{
                console.log("out")
            }
            console.log("pressed space")
        }
        if (pressed == false){
            if (barx > this.x + this.width){
                barx = this.x
            }
            else{
                barx += 5
            }
        }
        ctx = myGameArea.context;
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        // the green section
        ctx.fillStyle = "green";
        ctx.fillRect(greenX, greenY, greenWidth, greenHeight);
        // the ticker
        ctx.fillStyle = "white";
        ctx.fillRect(barx, this.y, 2, this.height);
        }
    }


function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;  
    this.x = x;
    this.y = y;    
    // console.log("image")
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
                // console.log("image")
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            // console.log("not image")
        }
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();
    theBar.update();
    mySalt.update();
}


