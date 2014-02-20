//  Name:				Bryan J. Gill, MCNPS, S+
//  Date:				02/17/2014
//  Assignment:		Conditionals Assignment - Industry-based

//  Software Licensing Costs

//  Prompt user for variables
var serverLicenseNo = prompt("Please enter the number of server licenses."); //  Prompt user to enter the number of server licenses
var serverLicenseCost = prompt("Please enter the cost of one server license. (In whole dollars)");  //  Prompt user to enter the cost of one server license
var clientLicenseNo = prompt("Please enter the number of client licenses.");  //  Prompt user to enter the number of client licenses
var clientLicenseCost = prompt("Please enter the cost of one client license. (In whole dollars)");  //  Prompt user to enter the cost of one client license
var hourlyRate = prompt("Please enter the hourly rate. (In whole dollars)");  //  Prompt user to enter the hourly rate
var manPower = prompt("Please enter the number of employees needed to complete the project");  //  Prompt user to enter the number of employees needed to complete the job
var manHours = prompt("Please enter the number of hours per employee needed to complete the project");  //  Prompt user to enter the number of hours each employee will need to complete the job
var clientBudget = prompt("Please enter the client budget. (In whole dollars)");  //  Prompt user to enter the client budget
var clientUnderBudget = prompt("Please enter how much you would like to undercut the client budget. (In whole dollars)");  //  Prompt user to enter how much they would like to undercut the client budget
var clientOverBudget = prompt("Please enter the client allowable over budget. (In whole dollars)");  //  Prompt user to enter the client allowed overage


//  calculate total cost of project
var totalHours = parseInt(manPower) * parseInt(manHours);  //Calculate the total hours needed to complete the job
var totalManPowerCost = parseInt(totalHours) * parseInt(hourlyRate);  //Calculate the total man hours needed to complete the job
var totalServerLicensing = parseInt(serverLicenseNo) * parseInt(serverLicenseCost);  //Calculate the total cost of server licensing
var totalClientLicensing = parseInt(clientLicenseNo) * parseInt(clientLicenseCost);  //Calculate the total cost of client licensing
var totalLicensingCost = parseInt(totalServerLicensing) + parseInt(totalClientLicensing);  //Calculate the total licensing cost
var totalCost = parseInt(totalManPowerCost) + parseInt(totalLicensingCost);  //Calculate the total project cost

//  Calculate budget costs and overruns
var underBudget = parseInt(clientBudget) - parseInt(clientUnderBudget);  //Calculate the under budget amount
var overBudget = parseInt(clientBudget) + parseInt(clientOverBudget);  //Calculate the over budget amount

//  Print all variables to console to verify calculations
//console.log(serverLicenseNo);
//console.log(serverLicenseCost);
//console.log(clientLicenseNo);
//console.log(clientLicenseCost);
//console.log(hourlyRate);
//console.log(manPower);
//console.log(manHours);
//console.log(clientBudget);
//console.log(clientUnderBudget);
//console.log(clientOverBudget);
//console.log(totalHours);
//console.log(totalHours);
//console.log(totalManPowerCost);
//console.log(totalServerLicensing);
//console.log(totalClientLicensing);
//console.log(totalLicensingCost);
//console.log(totalCost);
//console.log(underBudget);
//console.log(overBudget);

//  Determine if the project can be completed based on client budget
if (totalCost >= overBudget){  //Determine if the total project cost is greater than or equal to the over budget amount
	console.log("The project cannot be completed with the client's current budget including overage allowance.");  //Print message to console
	console.log("Project cost: $" +totalCost+ " Client Budget: $" +overBudget+ ".");  //Print message to console
}else if(totalCost > clientBudget && totalCost <= overBudget){  //Determine if the total project cost is greater than the client budget amount and less than or equal to the over budget amount
	console.log("The project can be completed with the client's budget including overage allowance.");  //Print message to console
	console.log("Project cost: $" +totalCost+ " Client Budget: $" +overBudget+ ".");  //Print message to console
}else if(totalCost >= underBudget && totalCost <= clientBudget){  //Determine if the total project cost is greater than or equal to the under budget amount and less than or equal to the client budget
	console.log("The project can be completed with the client's budget.");  //Print message to console
	console.log("Project cost: $" +totalCost+ " Client Budget: $" +clientBudget+ ".");  //Print message to console
}else if(totalCost <= underBudget){  //Determine if the total project cost is less than or equal to the client under budget amount
	console.log("The project can be completed by undercutting the client's budget by $" + clientUnderBudget + ".");  //Print message to console
	console.log("Project cost: $" +totalCost+ " Client Under Budget: $" +underBudget+ ".");  //Print message to console
}