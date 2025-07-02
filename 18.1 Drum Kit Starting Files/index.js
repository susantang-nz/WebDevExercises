//detecting mouse press
var allDrumBtns = document.querySelectorAll(".drum");
var numOfDrumBtns = allDrumBtns.length;
for (var i = 0; i < numOfDrumBtns; i++) {
    allDrumBtns[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML.toLowerCase().trim();
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//detecting keyboard press
document.addEventListener("keydown", function(event) {
    makeSound(event.key.toLocaleLowerCase());
    buttonAnimation(event.key.toLowerCase());
});

    // var audio = new Audio('./sounds/tom-1.mp3');
    // audio.play(); 

function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");      
            kick.play();          
            break;        

        case "s":
            var snare = new Audio("./sounds/snare.mp3");    
            snare.play();            
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3"); 
            tom2.play();

            break;

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");    
            tom3.play();            
            break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");  
            tom4.play();              
            break;

        default:
            console.log("Incorrect key :" + key);
            break;
    }  
} 

function buttonAnimation(currentKey) {
    var actionButton = document.querySelector("." + currentKey);

    if (!actionButton) {
        return
    };

    actionButton.classList.add("pressed");
    setTimeout(function() {
        actionButton.classList.remove("pressed");
    }, 100);       
    }
