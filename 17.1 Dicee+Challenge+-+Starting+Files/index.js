var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

document.querySelector("img.img1").setAttribute("src","./images/dice"+randomNumber1+".png");

document.querySelector("img.img2").setAttribute("src","./images/dice"+randomNumber2+".png");

var result = document.querySelector("h1");
if (randomNumber1 === randomNumber2) {
    result.innerHTML = "Draw" ;
} else if (randomNumber1 > randomNumber2) {
    result.innerHTML = "🚩Play 1 Won";
} else {
    result.innerHTML = "Play 2 Won🚩";
}
