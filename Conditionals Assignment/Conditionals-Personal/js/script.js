//	Name:				Bryan J. Gill. MCNPS, S+
//	Date:				02/18/2014
//	Assignment:	Conditionals Assignment - Personal

//  Can you quit your day job based on your current number of web clients

// prompt user to input variables
var numberOfClients = prompt("How many clients do you have currently?");  //  Prompt user for number of current clients
if(numberOfClients == null){  //  Verify variable is not null
	var numberOfClients = prompt("How many clients do you have currently?");  //  Re-prompt if null
}  //  Close if else statement
var avgBuildCost = prompt("What is the average price you charge clients to build a website?");  //  Prompt user for average site build cost
if(avgBuildCost == null){  //  Verify variable is not null
	var avgBuildCost = prompt("What is the average price you charge clients to build a website?");  //  Re-prompt if null
}  //  Close if else statement
var avgMonthlyHosting = prompt("What is the average monthly price you charge clients for hosting and maintenance?");  //  Prompt user for average monthly hosting fee for clients
if(avgMonthlyHosting == null){  //  Verify variable is not null
	var avgMonthlyHosting = prompt("What is the average monthly price you charge clients for hosting and maintenance?");  //  Re-prompt if null
}  //  Close if else statement
var hostingFee = prompt("How much does your reseller hosting cost per year?");  //  Prompt user for their annual cost of reseller hosting
if(hostingFee == null){  //  Verify variable is not null
	var hostingFee = prompt("How much does your reseller hosting cost per year?");  //  Re-prompt if null
}  //  Close if else statement
var annualSalary = prompt("What is your current annual salary?");  //  Prompt user for their current annual salary
if(annualSalary == null){  //  Verify variable is not null
	var annualSalary = prompt("How much does your reseller hosting cost per year?");  //  Re-prompt if null
}  //  Close if else statement
var months = 12;  //  Number of months in a year to be used in calculations

//  Calculate
var oneHostingAnnual= parseInt(avgMonthlyHosting) * parseInt(months);  //  Calculate income from hosting fees from one client
var allHostingAnnual = parseInt(oneHostingAnnual) * parseInt(numberOfClients);  //  Calculate income from hosting fees from all clients
var allBuildFees = parseInt(numberOfClients) * parseInt(avgBuildCost);  //  Calculate income from site build of all clients
var totalIncome = parseInt(allBuildFees) + parseInt(allHostingAnnual) - parseInt(hostingFee);  //  Calculate total income from site builds and hosting

//  Print all variables to console to verify calculations
console.log(numberOfClients);
console.log(avgBuildCost);
console.log(avgMonthlyHosting);
console.log(hostingFee);
console.log(annualSalary);
console.log(oneHostingAnnual);
console.log(allHostingAnnual);
console.log(allBuildFees);
console.log(totalIncome);

//  Determine if use can quit their day job
if(parseInt(totalIncome) >= parseInt(annualSalary)){  //  Determine if the total income from web clients exceeds current salary
	console.log("It's quitting time!");  //  Print message to console
	console.log("Current Salary: $" +annualSalary+ " Income from Web Clients: $" +totalIncome+ ".");  //  Print message to console
}else{  //  Determine if the total income is 
	console.log("More web clients are needed, don't quit your day job.");  //  Print message to console
	console.log("Current Salary: $" +annualSalary+ " Income from Web Clients: $" +totalIncome+ ".");  //  Print message to console
}  //  Close if else statement
