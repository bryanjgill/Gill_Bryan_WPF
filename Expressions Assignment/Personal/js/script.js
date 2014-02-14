//	Name:  			Bryan J. Gill, MCNPS, S+
//	Date: 				02/13/2014
//	Assignment:	Expressions Assignment - Personal Calculations

//	Server Memory Calculator
var numberOfProcessors = 2;
var slotsPerProcessor = 9;
var desiredMemory = 64;

var totalSlots = (numberOfProcessors * slotsPerProcessor);
var twox = (desiredMemory/2);
var fourx = (desiredMemory/4);
var sixx = (desiredMemory/6);
var eightx = (desiredMemory/8);
var sixteenx = (desiredMemory/16);

console.log("To reach " + desiredMemory + "GB of RAM in your server,");
console.log("with " + totalSlots + " total slots and memory installed in pairs,");
console.log("you can install the following memory configurations:");
console.log("2x "+ twox +"GB sticks.");
console.log("4x "+ fourx +"GB sticks.");
console.log("8x "+ eightx +"GB sticks.");
console.log("16x "+ sixteenx +"GB sticks.");