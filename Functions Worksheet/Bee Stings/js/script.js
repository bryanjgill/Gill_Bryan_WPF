//  Name:				Bryan J. Gill, MCNPS, S+
//  Date:				02/17/2014
//  Assignment:		Calculate Bee Stings

var weight = prompt("Please enter the weight of the animal.");  //  Prompt user to enter weight
var bees = 8.666666667;  //  Preset value for bee stings per pound

var stings = (weight * bees).toFixed(2);  //  Calculate the number of bee stings needed to achieve death @ 8.666666667 bee stings per pound
console.log("It takes " +stings+ " bee stings to kill this animal.");  //  Print message to console