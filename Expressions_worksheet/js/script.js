//	Name:				Bryan Gill
//	Date:				02/13/2014
//	Assignment:	Expressions Worksheet

//Dog years 
//Human years times seven = age in dog years
var ageInHuman = 5; //age in human years
var dogYears = ageInHuman * 7; //the formula to solve for dog years
console.log("Sparky is " + ageInHuman + " human years old, which is " + dogYears + " in dog years."); //answer

//Slices of pizza - part 1
//find the number of slices of pizza per pie and how many people are at the party and how many boxes of pizza were ordered
var slices = 8; //number of pizza slices per pie
var people = 13; //number of people at the party
var boxes = 4; //pies ordered
var leftovers = (boxes * slices) % people; //formula to solve for the number of slices of pizza Sparky had.
var slicesPerPerson = ((boxes * slices - leftovers) / people).toFixed(2); //formula to solve for distribution of slices and round to 2 decimal places
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party."); //answer

//Slice of pizza - part 2
var slices = 8; //number of pizza slices per pie
var people = 13; //number of people at the party
var boxes = 4; //pies ordered
var leftovers = (boxes * slices) % people; //formula to solve for the number of slices of pizza Sparky had.
var slicesPerPerson = ((boxes * slices - leftovers) / people).toFixed(2); //formula to solve for distribution of slices and round to 2 decimal places
console.log("Sparky got " + leftovers + " slices of pizza."); //answer

//Average Grocery Bill
var shopTotals = [165, 145, 96, 160, 120]; //weekly grocery shopping totals
var totalSpent = shopTotals[0] + shopTotals[1] + shopTotals[2] + shopTotals[3] + shopTotals[4]; //add weekly totals together
var average = (totalSpent/5).toFixed(2); //divide by the number of weeks
console.log("You have spent a total of $" + totalSpent + " on groceries over 5 weeks. That is an average of $" + average + " per week.");  //answer

//Discounts
var videoGame = 59.99; //cost of video game
var discount = .30; //discount on purchase
var game = "Video Game"; //product name
var tax = 1.0825; //sales tax
var totalNoTax = (videoGame - (videoGame * discount)).toFixed(2); //subtotal (no tax) and set to display 2 decimal places
var totalandtax = (totalNoTax * tax).toFixed(2); //total with tax and set to display 2 decimal places
console.log("Your " + game + " was originally $" + videoGame + ", but after a 30% discount, it is now $" + totalNoTax + " without tax, and $" + totalandtax + " with tax."); //answer