//Conditionals

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2:
var parentHeight = 45;
if(kidHeight + sneakerLift >= minHeight){
	console.log ("You can ride the coaster!");
}else if(kidHeight > parentHeight){
	console.log("You can ride with a parent.");
	}else{
	console.log("You are not tall enough, sorry...");
}

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

if(iPhonePrice < budget || wonLottery){
	console.log("We can buy the iPhone!")
}else{
	console.log("No phone for you!!")
}
//Ternaries
if(condition){
	do if true;
}else{
	do if false;
}

(condition) ? do if true : do if false;

var gpa = 48;

if (gps > 2.0){
	console.log("You can graduate!");
}else{
	console.log("GPA is too low!");
}

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");

var age = 11;
var book;

if(age>10){
	book = "Green Eggs and Ham";
}else{
	book = "The Time Machine";
}
colsole.log(book);

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);

