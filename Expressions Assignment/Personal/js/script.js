//	Name:  			Bryan J. Gill, MCNPS, S+
//	Date: 				02/13/2014
//	Assignment:	Expressions Assignment - Personal Calculations

//	Server Memory Calculator
var numberOfProcessors = prompt("How many processors are in your server?");
var slotsPerProcessor = prompt("How many memory slots per processor?");
var desiredMemory = prompt("How much memory would you like to upgrade to?");

var totalSlots = (numberOfProcessors * slotsPerProcessor);
var twox = (desiredMemory/2);
var fourx = (desiredMemory/4);
var eightx = (desiredMemory/8);
var sixteenx = (desiredMemory/16);

console.log("To reach " + desiredMemory + "GB of RAM in your server,");
console.log("with " + totalSlots + " total slots and memory installed in pairs,");
console.log("you can install the following memory configurations:");
if (totalSlots >= 2) console.log("2x "+ twox +"GB sticks.");
if (totalSlots >= 4) console.log("4x "+ fourx +"GB sticks.");
if (totalSlots >= 8) console.log("8x "+ eightx +"GB sticks.");
if (totalSlots >= 16) console.log("16x "+ sixteenx +"GB sticks.");