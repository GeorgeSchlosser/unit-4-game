// VARIABLES
// ===================================================
var wins = 0;
var losses = 0;
var numMatch;
var score = 0; //start w/ 0 so that crystal values can be added on
var c1Value;
var c2Value;
var c3Value;
var c4Value;


// FUNCTIONS
// ===================================================

function gameStart() {
    numMatch = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    console.log(numMatch);
    $("#num-to-match").append(numMatch);
}



// assign 1-12 to each of the 4 crystals

// onclick add crystal value to score


// MAIN PROCESSES
// ===================================================

gameStart();

// at game start assign value to numMatch and cxValue

// when game ends reset numMatch, cxValue, and score

// if score === numMatch {
//     alert("YOU WIN!");
//     // reset function;
// }
// else if score > numMatch {
//     alert("YOU LOSE!");
//     //reset function
// }