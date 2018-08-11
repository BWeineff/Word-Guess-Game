// // GAME STRUCTURE:
//  1 make preset list of words
//  2 generate random word from the list
//  3 player guesses letters/tries to guess the word
//  4 check that the key entereed is valid to guess
//  5 store guessed letters to show they are already guessed
//  6 show the letters that are part of the prgenerated word replacing the "_ _ _"
//  7 ends game when user guesses right or runs out of mortys (lives/guesses)

// GLOBAL VARIABLES
// ================

// Array that contains all the possible words from rick and morty to be guessed.
var possibleWords = ["wubalubadubdub", "summer", "jerry", "mrmeseeks", "schwifty", "beth", "mrpoopybutthole", "birdperson", "evilmorty", "picklerick", "scaryterry"];
// Empty variable to store the current word to be guessed as a string.
var currentWord = "";
// Empty variable to hold the actual letters in the currentWord
var currentWordLetters = [];
// Variable that holds the number of blanks "_ _ _ _" in the currentWord
var numOfBlanks = 0;
// Empty array to store the answer as it appears for the player
var answerDisplay = [];
// Empty array to hold all the wrong guesses, and display in 3rd section where the player can see their current guesses
var wrongLetters = [];

//Game Stats
var wins = 0;
var losses = 0;
var guessesLeft = 7;

//all the functions

//function to start the new game
function newGame() {
    currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    //randomly picks a word form the list

    //break apart word by the letters I using .split
    currentWordLetters = currentWord.split("");

    //then find the number of blanks "_ _ _ " to put for the unguessed answer so far
    numOfBlanks = currentWordLetters.length;

    guessesLeft = 7;
    wrongLetters = [];
    answerDisplay = [];
    //this is to reset the spinning images
    if (guessesLeft = 7) {
        document.getElementById("morty1").classList.remove("imgRotate");
        document.getElementById("morty2").classList.remove("imgRotate");
        document.getElementById("morty3").classList.remove("imgRotate");
        document.getElementById("morty4").classList.remove("imgRotate");
        document.getElementById("morty5").classList.remove("imgRotate");
        document.getElementById("morty6").classList.remove("imgRotate");
    }

    for (i = 0; i < numOfBlanks; i++) {
        answerDisplay.push("_");
    }

    //Change HTML elements to output the current info
    document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
    document.getElementById("remGuesses").innerHTML = "Number of Guesses Remaining: " + " " + guessesLeft;
    document.getElementById("wins").innerHTML = "Wins: " + " " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + " " + losses;

};

function checkLtrs(letter) {

    //Check if the letter pressed is an actual letter
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        //if the key pressed is a letter then
        //Check if the letter guessed is one of the letters in the word
        var correctLetter = false;

        for (var i = 0; i < numOfBlanks; i++) {
            if (currentWord[i] == letter) {
                correctLetter = true;
            }
        }

        //Check where the correct letter is located on the word, then add to html
        if (correctLetter) {
            for (var i = 0; i < numOfBlanks; i++) {
                if (currentWord[i] === letter) {
                    answerDisplay[i] = letter;
                }
            }
        }

        //If the letter isn't part of the word
        else {
            wrongLetters.push(letter);
            guessesLeft--
        }

        //if input isnt a letter then alert       
    }

    else {
        alert("Rick only accepts inputs of letters a - z, no funny buisness!");
    };
};

function roundComplete() {

    //Update HTML with Game Stats
    document.getElementById("remGuesses").innerHTML = "Number of Guesses Remaining: " + " " + guessesLeft;
    document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
    document.getElementById("guessedLetters").innerHTML = "Letters Already Guessed:" + " " + wrongLetters.join(" ");


    //see if the player won
    if (currentWordLetters.toString() == answerDisplay.toString()) {
        wins++;
        alert("Thank the GOOD ONE! You guessed '" + currentWord + "' correctly! Try another round? (If you dare)");

        // update wins in html element
        document.getElementById("wins").innerHTML = "Wins: " + " " + wins;

        //new game start and make sure the stats are cleared
        newGame();
        document.getElementById("guessedLetters").innerHTML = "You've Already Guessed:" + " " + " ";

    }

    //see if the player has lost
    else if (guessesLeft <= 0) {
        losses++;
        alert("Aww jeez Rick! All versions of Morty have been spun out into another dimension. The correct word was '" + currentWord + "'. Do you want to try again?")

        // Update wins in the html element
        document.getElementById("losses").innerHTML = "Losses: " + " " + losses;

        //Start New Game
        newGame();
        document.getElementById("guessedLetters").innerHTML = "You've Already Guessed:" + " " + " ";

    }
};

// MAIN PROCESS
//=============

//Call function to start the game for the first time
newGame();

//Get input from user on what keys are being pressed
document.onkeyup = function (event) {
    //Create a variable to hold all the letters that have been guessed
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    //Run the check letters function
    checkLtrs(lettersGuessed);
    roundComplete();

    //guesses remaining through mortys spinning
    if (guessesLeft <= 6) {
        document.getElementById("morty1").classList.add("imgRotate");

    }

    if (guessesLeft <= 5) {
        document.getElementById("morty2").classList.add("imgRotate");
    }

    if (guessesLeft <= 4) {
        document.getElementById("morty3").classList.add("imgRotate");
    }

    if (guessesLeft <= 3) {
        document.getElementById("morty4").classList.add("imgRotate");
    }

    if (guessesLeft <= 2) {
        document.getElementById("morty5").classList.add("imgRotate");
    }

    if (guessesLeft <= 1) {
        document.getElementById("morty6").classList.add("imgRotate");
    }

}

