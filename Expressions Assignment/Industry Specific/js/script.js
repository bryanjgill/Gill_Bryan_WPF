//	Name:  			Bryan J. Gill, MCNPS, S+
//	Date: 				02/13/2014
//	Assignment:	Expressions Assignment - Industry Specific Calculations

var screenWidth = screen.availWidth;
var screenHeight = screen.availHeight;
var browserWidth = window.innerWidth;
var browserHeight = window.innerHeight;
var name = prompt("Please enter your name.");
var promptWidth = prompt("Please enter the width of your screen resolution","example: 1024");
var promptHeight = prompt("Please enter the height of your screen resolution","example: 768");

var promptWidthPercent = ((screenWidth/promptWidth)*100).toFixed(2);
var promptHeightPercent = ((screenHeight/promptHeight)*100).toFixed(2);
var percentWidth = ((browserWidth/screenWidth)*100).toFixed(2);
var percentHeight = ((browserHeight/screenHeight)*100).toFixed(2);
var screenArea = (screenWidth*screenHeight);
var browserArea = (browserWidth*browserHeight);
var percentArea = ((browserArea/screenArea)*100).toFixed(2);

console.log("Hello " +name+ ",");
console.log("You told me that your current resolution is: " +promptWidth+ "x" +promptHeight+ " pixels.");
console.log("Your actual monitor resolution is: " + screenWidth + "x" + screenHeight + " pixels.");
console.log("That means you are " +promptWidthPercent+ "% correct on width and " +promptHeightPercent+ "% correct on height.");
console.log("Also, your current browser window is currently displaying: " +browserWidth+ "x" +browserHeight+ " pixels.");
console.log("You are currently utilizing " +percentWidth+ "% of your monitor's width and " +percentHeight+ "% of your monitor's height.");
console.log("You are also using " +percentArea+ "% of your available screen size.");