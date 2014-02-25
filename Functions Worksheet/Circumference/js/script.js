//  Name:				Bryan J. Gill, MCNPS, S+
//  Date:				02/17/2014
//  Assignment:		Calculate Circumference

var radius = prompt("Please enter the radius of the circle.");  //  Prompt user to enter radius
var pi = 3.14159;  //  Preset value for pi

var circumference = (2 * pi * radius).toFixed(2);  //  Calculate circumference @ 2 * pi * radius
console.log("The circumference of the circle is " +circumference+ ".")  //  Print message to console