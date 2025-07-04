var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

var isGameOn = false; 

//! is called logical NOT.nThis is the opposite of asking: “Is the game on?”
// | `isGameOn` value | `!isGameOn` | Meaning              |
// | ---------------- | ----------- | -------------------- |
// | `false`          | `true`      | Game is **not** on ✅ |
// | `true`           | `false`     | Game **is** on ❌     |
//
// This block runs only when the game is OFF.That’s when you want to start it — by listening to the first key press.

$(document).on("keydown", function(){
    if (!isGameOn) {
        startGame();
    }
});


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})

function startGame() {
    isGameOn = true;
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    nextSequence();
}

function nextSequence() {
    level++; //level start from 1
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);

    playSound(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
}

function checkAnswer(lastAnswerIndex) {
    // check the same index
    var userLastAnswer = userClickedPattern[lastAnswerIndex];
    var gameAnswer = gamePattern[lastAnswerIndex];

    // check if the user has completed the sequence, if complete, call next sequence
    if (userLastAnswer === gameAnswer) {
        if (userClickedPattern.length === gamePattern.length) {
            console.log("User Clicked Pattern: "+ userClickedPattern);
            console.log("Game Pattern: " + gamePattern);
            console.log("All Correct, Go to next level");

            userClickedPattern = [];
            setTimeout(function(){
                nextSequence();
            }, 1000);
        } 
    } else {
        console.log("Wrong");
        console.log(userClickedPattern);
        console.log(gamePattern);
        
        var gameOverSound = new Audio("./sounds/wrong.mp3");
        gameOverSound.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        
        startOver();
    }
}

function startOver() {
    isGameOn = false;
    $("#level-title").text("Game Over, Press Any Key to Restart");
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
}

function playSound(colour) {
    var soundString = "./sounds/" + colour + ".mp3";
    var buttonSound = new Audio(soundString);
    buttonSound.play()
}

function animatePress(colour) {
    var currentButton = $("#"+colour);
    currentButton.addClass("pressed");
    setTimeout(function(){
        currentButton.removeClass("pressed")
    }, 100);
}






