//	Name:				Bryan J. Gill. MCNPS, S+
//	Date:				02/18/2014
//	Assignment:	Functions Assignment - Personal

//  Monthly Mortgage Payment Calculator

//  Prompt user for variables
var months = 12;  //  Define the number of months in a year
var multiplier = 100;  //  Define interest multiplier
var one = 1;  //  Define variable for use in formula
var mortgageAmount = prompt("Mortgage amount in dollars.");  //  Prompt user to enter the mortgage amount
var mortgageTerm = prompt("Mortgage term in years.");  //  Prompt user to enter the mortgage term in years
var interestRate = prompt("Interest rate in percent.");  //  Prompt user to enter the interest rate
var annualSalary = prompt("Please enter your annual salary in dollars.")

//  Calculate additional variables
var interestAnnual = (interestRate / multiplier);  //  Convert annual interest rate from percent to decimal
var interestMonthly = (interestAnnual / months);  //  Convert annual interest rate into monthly interest rate
var numberOfPayments = (mortgageTerm * months); //  calculate number of payments
var step1 = (one + interestMonthly);  //  Step one of mortgage calculation
var step2 = Math.pow(step1, numberOfPayments);  //  Step two of mortgage calculation
var step3 = (interestMonthly * step2);  //  Step three of mortgage calculation
var step4 = (step2 - one);  //  Step four of mortgage calculation
var step5 = (step3 / step4);  //  Step five of mortgage calculation
var step6 = (mortgageAmount * step5);  //  Step six of mortgage calculation

//  Breakdown annual salary
var monthlySalary = (annualSalary / months);  //  Calculate monthly salary
var leftOver = (monthlySalary - step6);  //  Calculate monthly income after mortgage payment
if(monthlySalary < step6.toFixed(2)){  //  Compare monthly salary to monthly mortgage payment
	console.log("You cannot afford this house without a larger down payment.")  //  Print message to console if monthly income is less than monthly mortgage payment
}else{  //  Else
	console.log("You can afford this house on your current salary with $" +leftOver.toFixed(2)+ " left over each month.")  //  Print message to console if monthly income is greater than monthly mortgage payment
}

console.log("Your monthly payment will be: $" +step6.toFixed(2)+ ".");  //  Print message to console

//  console.log(months);
//  console.log(multiplier);
//  console.log(one);
//  console.log(mortgageAmount);
//  console.log(mortgageTerm);
//  console.log(interestRate);
//  console.log(interestAnnual);
//  console.log(interestMonthly);
//  console.log(numberOfPayments);
//  console.log(monthlyPayment);
//  console.log(step1);
//  console.log(step2);
//  console.log(step3);
//  console.log(step4);
//  console.log(step5);
//  console.log(step6.toFixed(2));