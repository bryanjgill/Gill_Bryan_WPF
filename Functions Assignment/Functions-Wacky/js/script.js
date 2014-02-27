//	Name:				Bryan J. Gill. MCNPS, S+
//	Date:				02/18/2014
//	Assignment:	Functions Assignment - Wacky

//  Water your yard

//  Set static variables
var waterUsagePerSqFt = .62;

// Prompt user for variables
var lengthOfYard = prompt("Please enter the length of your yard.");
var widthOfYard = prompt("Please enter the width of your yard.");
var lengthOfHouse = prompt("Please enter the length of your house.")
var widthOfHouse = prompt("Please enter the width of your house.")
var waterUsed = prompt("How many gallons of water have you used on your yard this week?")

//  Calculations
var areaOfHouse = (lengthOfHouse * widthOfHouse);
var areaOfYard = (lengthOfYard * widthOfYard);
var totalYardArea = (areaOfYard - areaOfHouse);
var totalWaterNeeded = (totalYardArea * waterUsagePerSqFt);
var underWater = (totalWaterNeeded - waterUsed);
var overWater = (waterUsed - totalWaterNeeded);
//  If Else
if(waterUsed < totalWaterNeeded){
	console.log("Based on your yard size of " +totalYardArea+ "sqft, you should be using " +totalWaterNeeded+ " gallons of water to water your yard.")
	console.log("You have used " +waterUsed+ " gallons this week, and need to use " +underWater+ " gallons more.")
}else{
	console.log("Based on your yard size of " +totalYardArea+ "sqft, you should be using " +totalWaterNeeded+ ".")
	console.log("You have used " +waterUsed+ " gallons this week, which is " +overWater+ " gallons too much.  Please wait a few days before watering again.")
}