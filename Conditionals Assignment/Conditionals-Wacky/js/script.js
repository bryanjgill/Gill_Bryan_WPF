//	Name:				Bryan J. Gill. MCNPS, S+
//	Date:				02/18/2014
//	Assignment:	Conditionals Assignment - Wacky

//  Guess until you get you get the number

// prompt user to input variables
var randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber);
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
if(parseInt(userGuess1) > parseInt(randomNumber) && parseInt(userGuess1) != parseInt(randomNumber)){  //  Determine if user's number is greater than or equal to 5
	var userGuess2 = prompt("Please guess a lower number:");
		if(userGuess2 == null){
		var userGuess2 = prompt("Please guess a lower number:");	
		}
}else if(parseInt(userGuess2) > parseInt(randomNumber) && parseInt(userGuess2) != parseInt(randomNumber)){  //  
	var userGuess3 = prompt("Please guess a lower number:");
	if(userGuess3 == null){
		var userGuess3 = prompt("Please guess a lower number:");	
		}
}else if(parseInt(userGuess3) > parseInt(randomNumber) && parseInt(userGuess3) != parseInt(randomNumber)){  //  
	var userGuess4 = prompt("Please guess a lower number:");
	if(userGuess4 == null){
		var userGuess4 = prompt("Please guess a lower number:");	
		}
}else if(parseInt(userGuess4) > parseInt(randomNumber) && parseInt(userGuess4) != parseInt(randomNumber)){  //  
	var userGuess5 = prompt("Please guess a lower number:");
	if(userGuess5 == null){
		var userGuess5 = prompt("Please guess a lower number:");	
		}
}else if(parseInt(userGuess5) > parseInt(randomNumber) && parseInt(userGuess5) != parseInt(randomNumber)){  //  
	var userGuess6 = prompt("Please guess a lower number:");
	if(userGuess6 == null){
		var userGuess6 = prompt("Please guess a lower number:");	
		}
}else if(parseInt(userGuess6) > parseInt(randomNumber) && parseInt(userGuess6) != parseInt(randomNumber)){  //  
	var userGuess7 = prompt("Please guess a lower number:");
	if(userGuess7 == null){
		var userGuess7 = prompt("Please guess a lower number:");	
		}
}else if(parseInt(userGuess7) > parseInt(randomNumber) && parseInt(userGuess7) != parseInt(randomNumber)){  //  
	var userGuess8 = prompt("Please guess a lower number:");
	if(userGuess8 == null){
		var userGuess8 = prompt("Please guess a lower number:");	
		}
}else if(parseInt(userGuess8) > parseInt(randomNumber) && parseInt(userGuess8) != parseInt(randomNumber)){  //  
	var userGuess9 = prompt("Please guess a lower number:");
	if(userGuess9 == null){
		var userGuess9 = prompt("Please guess a lower number:");	
		}
}else if(parseInt(userGuess9) < parseInt(randomNumber) && parseInt(userGuess9) != parseInt(randomNumber)){  //  
	var userGuess10 = prompt("Please guess a higher number:");
	if(userGuess10 == null){
		var userGuess10 = prompt("Please guess a higher number:");	
		}
}else if(parseInt(userGuess10) < parseInt(randomNumber) && parseInt(userGuess10) != parseInt(randomNumber)){  //  
	var userGuess11 = prompt("Please guess a higher number:");	
	if(userGuess11 == null){
		var userGuess11 = prompt("Please guess a higher number:");		
		}
}else if(parseInt(userGuess11) < parseInt(randomNumber) && parseInt(userGuess11) != parseInt(randomNumber)){  //  
	var userGuess12 = prompt("Please guess a higher number:");
	if(userGuess12 == null){
		var userGuess12 = prompt("Please guess a higher number:");	
		}
}else if(parseInt(userGuess12) < parseInt(randomNumber) && parseInt(userGuess12) != parseInt(randomNumber)){  //  
	var userGuess13 = prompt("Please guess a higher number:");
	if(userGuess13 == null){
		var userGuess13 = prompt("Please guess a higher number:");	
		}
}else if(parseInt(userGuess13) < parseInt(randomNumber) && parseInt(userGuess13) != parseInt(randomNumber)){  //  
	var userGuess14 = prompt("Please guess a higher number:");
	if(userGuess14 == null){
		var userGuess14 = prompt("Please guess a higher number:");	
		}
}else if(parseInt(userGuess14) < parseInt(randomNumber) && parseInt(userGuess14) != parseInt(randomNumber)){  //  
	var userGuess15 = prompt("Please guess a higher number:");
	if(userGuess15 == null){
		var userGuess15 = prompt("Please guess a higher number:");
		}
}else if(parseInt(userGuess15) < parseInt(randomNumber) && parseInt(userGuess15) != parseInt(randomNumber)){  //  
	var userGuess16 = prompt("Please guess a higher number:");
	if(userGuess16 == null){
		var userGuess16 = prompt("Please guess a higher number:");
		}
}else if(parseInt(userGuess16) < parseInt(randomNumber) && parseInt(userGuess16) != parseInt(randomNumber)){  //  
	var userGuess17 = prompt("Please guess a higher number:");
	if(userGuess17 == null){
		var userGuess17 = prompt("Please guess a higher number:");		
		}
}else if(parseInt(userGuess17) < parseInt(randomNumber) && parseInt(userGuess17) != parseInt(randomNumber)){  //  
		var userGuess18 = prompt("Please guess a higher number:");
	if(userGuess18 == null){
	var userGuess18 = prompt("Please guess a higher number:");		
		}
}else if(parseInt(userGuess1) === parseInt(randomNumber) || 
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
			parseInt(userGuess18) === parseInt(randomNumber)){  //  
	console.log("You chose wisely, " +name+ "!");  //  Print message to console
	console.log("The random number was: " +randomNumber+ ".");  //  Print message to console
}