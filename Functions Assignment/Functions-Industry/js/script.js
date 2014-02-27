//  Name:				Bryan J. Gill, MCNPS, S+
//  Date:				02/17/2014
//  Assignment:		Functions Assignment - Industry-based

//  Web Design Cost Calculator

//  Set variables
var pricePerPage = 50;
var pricePerForm = 100;
var pricePerCart = 100;
var pricePerPhoto = 5;
var pricePerLogo = 100;

//  Prompt user for variables
var numberOfPages = prompt("How many pages will your website need?");
var needContactForm = prompt("Will you need a contact form? (please enter Yes or No)");
var needShoppingCart = prompt("Will you need a shopping cart? (please enter Yes or No)");
var numberOfPhotos = prompt("How many photos will your site have?");
var needNewLogo = prompt("Do you need a new business logo? (please enter Yes or No)");
var clientBudget = prompt("Please enter your budget in dollars.");

//  Convert text responses to numeric values
var contactForm = (needContactForm == "Yes") ? "1" : "0";
var shoppingCart = (needShoppingCart == "Yes") ? "1" : "0";
var newLogo = (needNewLogo == "Yes") ? "1" : "0";

//  Calculations
var pagesTotal = (numberOfPages * pricePerPage);
var formTotal = (contactForm * pricePerForm);
var cartTotal = (shoppingCart * pricePerCart);
var photoTotal = (numberOfPhotos * pricePerPhoto);
var logoTotal = (newLogo * pricePerLogo);

var quote = (pagesTotal + formTotal + cartTotal + photoTotal + logoTotal);
var shortage = (quote - clientBudget);
var saved  = (clientBudget - quote);

//  Print message to console
if(clientBudget < quote){
	console.log("Your quote amount is $" +quote+ ".")
	console.log("Based on your budget of $" +clientBudget+ " you are $" +shortage+ " short.")
}else{
	console.log("Your quote amount is $" +quote+ ".")
	console.log("Based on your budget of $" +clientBudget+ " we can save you $" +saved+ ".")
}


//  Print all variables to console to check calculations
//  console.log(numberOfPages);
//  console.log(needContactForm);
//  console.log(needShoppingCart);
//  console.log(numberOfPhotos);
//  console.log(needNewLogo);
//  console.log(contactForm);
//  console.log(shoppingCart);
//  console.log(newLogo);
//  console.log(pagesTotal);
//  console.log(formTotal);
//  console.log(cartTotal);
//  console.log(photoTotal);
//  console.log(logoTotal);
//  console.log(quote);