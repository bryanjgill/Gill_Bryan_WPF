//	Name:				Bryan J. Gill. MCNPS, S+
//	Date:				02/18/2014
//	Assignment:	Conditionals Assignment - Wacky

//  Guess until you get you get the number

// prompt user to input variables
var randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber);
var userGuess1 = 0;
var userGuess2 = 0;
var userGuess3 = 0;
var userGuess4 = 0;
var userGuess5 = 0;
var userGuess6 = 0;
var userGuess7 = 0;
var userGuess8 = 0;
var userGuess9 = 0;
var userGuess10 = 0;
var userGuess11 = 0;
var userGuess12 = 0;
var userGuess13 = 0;
var userGuess14 = 0;
var userGuess15 = 0;
var userGuess16 = 0;
var userGuess17 = 0;
var userGuess18 = 0;

alert("Welcome to the guess it 'til you get it game!");  //Display welcome message
var name = prompt("Please enter your first name.");  //  Prompt user for their first name
	if(name == null){
		var name = prompt("Please enter your first name.");  //  Prompt user for their first name
	}
var userGuess1 = prompt("Please enter your guess:");  //  Prompt user for their first guess
	if(userGuess1 ==null){
		var userGuess1 = prompt("Please enter your guess:");  //  Prompt user for their first guess
	}

//  Determine if user guessed the correct number or prompt again
(parseInt(userGuess1) > parseInt(randomNumber)) ? prompt("Guess a lower number:") : 
(parseInt(userGuess2) > parseInt(randomNumber)) ? prompt("Guess a lower number:") : 
(parseInt(userGuess3) > parseInt(randomNumber)) ? prompt("Guess a lower number:") : 
(parseInt(userGuess4) > parseInt(randomNumber)) ? prompt("Guess a lower number:") : 
(parseInt(userGuess5) > parseInt(randomNumber)) ? prompt("Guess a lower number:") : 
(parseInt(userGuess6) > parseInt(randomNumber)) ? prompt("Guess a lower number:") : 
(parseInt(userGuess7) > parseInt(randomNumber)) ? prompt("Guess a lower number:") : 
(parseInt(userGuess8) > parseInt(randomNumber)) ? prompt("Guess a lower number:") : 
(parseInt(userGuess9) > parseInt(randomNumber)) ? prompt("Guess a lower number:") : 
(parseInt(userGuess10) < parseInt(randomNumber)) ? prompt("Guess a higher number:") : 
(parseInt(userGuess11) < parseInt(randomNumber)) ? prompt("Guess a higher number:") : 
(parseInt(userGuess12) < parseInt(randomNumber)) ? prompt("Guess a higher number:") : 
(parseInt(userGuess13) < parseInt(randomNumber)) ? prompt("Guess a higher number:") : 
(parseInt(userGuess14) < parseInt(randomNumber)) ? prompt("Guess a higher number:") : 
(parseInt(userGuess15) < parseInt(randomNumber)) ? prompt("Guess a higher number:") : 
(parseInt(userGuess16) < parseInt(randomNumber)) ? prompt("Guess a higher number:") : 
(parseInt(userGuess17) < parseInt(randomNumber)) ? prompt("Guess a higher number:") : 
(parseInt(userGuess18) < parseInt(randomNumber)) ? prompt("Guess a higher number:") : 
(parseInt(userGuess1) === parseInt(randomNumber) || 
	parseInt(userGuess2) === parseInt(randomNumber) || 
	parseInt(userGuess3) === parseInt(randomNumber) || 
	parseInt(userGuess4) === parseInt(randomNumber) || 
	parseInt(userGuess5) === parseInt(randomNumber) || 
	parseInt(userGuess6) === parseInt(randomNumber) || 
	parseInt(userGuess7) === parseInt(randomNumber) || 
	parseInt(userGuess8) === parseInt(randomNumber) || 
	parseInt(userGuess9) === parseInt(randomNumber) || 
	parseInt(userGuess10) === parseInt(randomNumber) ||
	parseInt(userGuess11) === parseInt(randomNumber) || 
	parseInt(userGuess12) === parseInt(randomNumber) || 
	parseInt(userGuess13) === parseInt(randomNumber) || 
	parseInt(userGuess14) === parseInt(randomNumber) || 
	parseInt(userGuess15) === parseInt(randomNumber) || 
	parseInt(userGuess16) === parseInt(randomNumber) || 
	parseInt(userGuess17) === parseInt(randomNumber) || 
	parseInt(userGuess18) === parseInt(randomNumber)) ? console.log("Correct") : console.log("You chose wisely, " +name+ "! The random number was: " +randomNumber+ ".");  //  Print message to console
