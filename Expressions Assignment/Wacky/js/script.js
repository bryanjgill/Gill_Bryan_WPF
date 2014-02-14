//	Name:  			Bryan J. Gill, MCNPS, S+
//	Date: 				02/13/2014
//	Assignment:	Expressions Assignment - Wacky Calculations
var randomNumber = Math.floor(Math.random()*11);
var randomNumber1 = Math.floor(Math.random()*1001);
var randomNumber2 = Math.floor(Math.random()*1001);
var lickCount = 0;
var lick1 = 1;
var lickCount = lickCount + 1;
var lick2 = 2;
var lickCount = lickCount + 1;
var lick3 = 3;

var randomAnswer = (randomNumber1 + randomNumber2);
var licksAnswer = (lick1 + lick2 + lick3)/lickCount;

var hello = "Hello, my name is Bryan Gill. ";
var line1 = "";
var line2 = "Welcome to my wacky JS expression assignment for Web Programming Fundamentals - Online at Full Sail University.";
var line3 = "For my first trick, please think of a number between 1 and 10.  Go ahead, I'll wait... ";
var line4 = "I have determined that the number you are thinking of is " +randomNumber + " ! TADAA!!! ";
var line5 = "For my next trick, I will add " + randomNumber1 + " and " + randomNumber2 + ".";
var line6 = "The answer is " + randomAnswer + ", TADAA!!!";
var line7 = "Now for a question.  How many licks does it take to get to the center of a Tootsie Roll Tootsie Pop?";
var line8 = + lick1 + "..." + lick2 + "..." + lick3 + "! It takes " + licksAnswer + " licks to get to the center of a Tootsie Roll Tootsie Pop!";
var line9 = "For my final trick, *drumroll* I will wake from this dream of questions and trickery!";
var line10 = "Thank you!  I'll be here all month!  Try the salmon, rate your instructor!";

console.log(hello);
console.log(line1);
console.log(line2);
console.log(line1);
console.log(line3);
console.log(line4);
console.log(line1);
console.log(line5);
console.log(line6);
console.log(line1);
console.log(line7);
console.log(line8);
console.log(line1);
console.log(line9);
setTimeout(function(){alert("TADAA!!!")},60000);
console.log(line10);
setTimeout(function(){alert("'*That* is why I won't do two shows a night anymore, I won't.' - Beetlejuice (1988)")},65000);