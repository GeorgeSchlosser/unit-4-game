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
    score = 0;
    $("#num-score").text(score);
    numMatch = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    $("#num-to-match").text(numMatch);
    c1Value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log(c1Value);
    c2Value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    c3Value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    c4Value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log(c2Value);
    console.log(c3Value);
    console.log(c4Value);
    // unsure if this will work
    $("#c1").attr("value", c1Value);
    $("#c2").attr("value", c2Value);
    $("#c3").attr("value", c3Value);
    $("#c4").attr("value", c4Value);


    // the function above works but doesn't prevent the same value from being assigned to different crystals
    
}



function roundOver() {
    if (score === numMatch) {
        alert("YOU WIN!");
        wins = wins + 1;
        $("#wins-count").text(wins);
        gameStart();
    }
    else if (score > numMatch) {
        alert("YOU LOSE!");
        losses = losses + 1;
        $("#loss-count").text(losses);
        gameStart();
    }
}

$(".crystal-btn").on("click", function(){
    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);
    score += crystalValue;
    console.log(score);
    $("#num-score").text(score);
    roundOver();
})
// not yet tested (310, 4/3/19)





// onclick add crystal value to score


// MAIN PROCESSES
// ===================================================

$(document).ready(gameStart());
roundOver();

// at game start assign value to numMatch and cxValue

// when game ends reset numMatch, cxValue, and score

