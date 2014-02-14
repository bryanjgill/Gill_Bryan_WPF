//	Name:  			Bryan J. Gill, MCNPS, S+
//	Date: 				02/13/2014
//	Assignment:	Expressions Assignment - Wacky Calculations
var name = prompt("Please enter your name.");
var water = prompt("In ounces, how much water do you drink each day?");
var exercise = prompt("In minutes, how long do you exercise each day?");
var weight = prompt("In pounds, what is your current weight?");

var waterForWeight = (weight * 0.67);
var waterForExercise = (waterForWeight+((exercise / 30)*12));
var waterNeeded = (waterForWeight - water).toFixed(2);

var line1 = "Hello " +name+ ",";
var line2 = "You told me that you currently drink " +water+ "oz. of water each day.";
var line3 = "According to your exercise habits of " +exercise+ "-minutes per day and your current weight";
var line4 = "of " +weight+ "lbs, you should be drinking " +waterForExercise+ "oz. of water each day.";
var line5 = "That means you need to start drinking " +waterNeeded+ "oz. more water each day.";
var line6 = "I hope you're thirsty, get drinking!";

console.log(line1);
console.log(line2);
console.log(line3);
console.log(line4);
console.log(line5);
console.log(line6);
