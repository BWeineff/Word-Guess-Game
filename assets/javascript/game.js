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
             console.log("Word to solve for: " + currentWord); //randomly picks a word form the list
             
    //break apart word by the letters i think using .split

    //then find the number of blanks "_ _ _ " to put for the unguessed answer so far 
    //by finding the .length of the currentWord
    };