/* 

Week 1 Day 3 - Always isSunny
Always isSunny

*/

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

// Conditional statements begin with the keyword 'if'
// Within the parentheses, a boolean expression that must evaluate to true or false

if (isSunny) {
  whatToBring += "sunglasses, ";
}
if (temperature < 50) {
  whatToBring += "a coat, ";
}
if (isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);
//  Prediction - I should bring: sunglasses, a coat, and a smile!

// Prepare for downcount
for (var i = 10; i > 0; i--) {
  if (i != 2) {
    console.log(i);
  } else { // ELSE MEANS OTHERWISE
    console.log("ignition!");
  }
}

console.log("liftoff!");
// Prediction: 10 9 8 7 6 5 4 3 ignition! 1 liftoff!

// Count positives
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
// PSEUDOCODE
// Create a for loop that starts at zero, stops at the end of the array, and increments by 1.
// Inside the for loop, create an if statement that checks if the current element in the array is greater than 0. If it is, then I know I have a positive number.
// Inside the if statement, increment countPositives by 1

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    countPositives++
  }
}

console.log("there are " + countPositives + " positive values");