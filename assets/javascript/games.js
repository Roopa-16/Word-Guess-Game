// var words = [ 
//     "monkey",
//     "cat",
//     "ginuea pig",
//     "dog",
//     "hamster"
// ];

// var lives = 5;

// function startUp() {
// var wordSelect = words[Math.floor(Math.random() * words.length)];

// var numberOfLetters = [];
// for (var o = 0; i <wordSelect.length; i++) {
//     numberOfLetters[i] = " _ ";
// }

// var lettersLeft = wordSelect.length;
// while (lettersLeft > 0) {
//     alert(numberOfLetters.join(" "));
// }
// document.getElementById("answer").innerHTML
// }


// function guess() {
//     var guess = document.onkeyup("guess").value;
//     if (guess.length !== 1) {
//         alert("Please enter a single letter.");
//      } 
    
//     if (guess.length > 0) {

//     if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//     } 
//         else {
//             for (var j = 0; j < wordSelect.length; j++) {
//                 if (word[j] === guess) {
//                   numberOfLetters[j] = guess;
//                   remainingLetters--;
//                  }
                
            
//              }
//         }
//     }
//     lives--;
//     document.getElementById("guessesLeft").innerHTML = "The number of guesses remaining: " + lives;
//     document.getElementById("answer").innerHTML = numberOfLetters.join(" ");
// }
    
var letter = ["a", "d", "g", "h", "j", "e", "v", "n", "k", "l", "o", "p", "u", "y", "t", "r"];

var score = 0;
var guesses = 8;
var wins = 0;
var losses = 0;


    var computerChoice = letter[Math.floor(Math.random() * letter.length)];

  



document.onkeypress = function(event) {
    var userGuess = event.key;


    if(userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
    }

    if(guesses = 0){
        losses++
    }
}   
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;


function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
}

selectLetter();
updateScore();

document.onkeyup = function(event) {
    if (letterIndex === letter.length) {
        return;
    }

    var userInput = event.key.toLowerCase();

    if (userInput === letterSelect) {
        alert("You are correct!");
        score++;
        updateScore();
    }
    else {
        alert("Try again!");
    }

    letterSelect++;
    selectLetter();

};

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('score').innerHTML = "Score: " + score

