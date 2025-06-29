//My solutions:

function beer() {
    var numOfBottles = 99;
    var bottleWord = " bottle";

    while (numOfBottles > 0) {
        if (numOfBottles === 2) {
            console.log(numOfBottles + " bottles of beer on the wall, " + numOfBottles + " bottles of beer. Take one down and pass it around, " + (numOfBottles - 1) + " bottle of beer on the wall.");
        } else if (numOfBottles === 1) {
            console.log(numOfBottles + " bottle of beer on the wall, " + numOfBottles + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
        } else {
            console.log(numOfBottles + " bottles of beer on the wall, " + numOfBottles + " bottles of beer. Take one down and pass it around, " + (numOfBottles - 1) + " bottles of beer on the wall.");
        }
        numOfBottles--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
}

beer()
