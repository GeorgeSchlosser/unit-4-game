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
    $("#num-to-match").append(numMatch);
    c1Value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log(c1Value);
    c2Value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    c3Value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    c4Value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log(c2Value);
    console.log(c3Value);
    console.log(c4Value);
    // the function above works but doesn't prevent the same value from being assigned to different crystals
    score = 0;
}

function roundOver() {
    if (score === numMatch) {
        alert("YOU WIN!");
        wins = wins + 1;
        $("#wins-count").append(wins);
        gameStart();
    }
    else if (score > numMatch) {
        alert("YOU LOSE!");
        losses = losses + 1;
        $("#loss-count").append(losses);
        gameStart();
    }
}
// not yet tested (310, 4/3/19)



// assign 1-12 to each of the 4 crystals

// onclick add crystal value to score


// MAIN PROCESSES
// ===================================================

$(document).ready(gameStart());

// at game start assign value to numMatch and cxValue

// when game ends reset numMatch, cxValue, and score

