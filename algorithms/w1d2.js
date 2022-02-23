// JS Variables and DataTypes - What are they even?

// Naming variables
// Camel case is the convention we use in JS
// 1. You can't start with a number
// 2. No spaces
// 3. No dashes

// Variable creation is with the keyword var
// Following keyword, name the variable
// Assign a value to it with the assignment operator

var smoothie = 'banana mango spinach'

// Primitive Data Types

// Strings - strings of characters bookended by quotes
var myName = "Narciso"
var surname = "Lobo"

// String concatenation
var fullName = myName + " " + surname

console.log(fullName)

// Numbers - numbers are numbers. JS doesn't discriminate between integers and floating point numbers. They are both the same data type to JS.

var age = 34
var grade = 99.9

// Mathematical operators - Plus +, minus -, multiplication *, division /

// Booleans - can only have one of two values - true or false

var isRaining = false

// Null, undefined

// Lesson 1 - Predict the output
var a = 25;
// reassign the value of a to be the old value of a minus 13
// a -= 13
a = a - 13; // 25-13 = 12
console.log(a / 2); // --> 6

a = "hello";
console.log(a + " hello"); // hello hello

// Lesson 2 - Predict Loops

// For loop
// Four things for a for loop
// 1. Name a sentry
// 2. Where it starts
// 3. Where it stops
// 4. How it changes

for (var i = 0; i < 10; i++) {
  console.log(i);
  i = i + 3;
}

console.log("outside of the loop " + i); // --> outside the loop 12

// Lesson 3 - Predict what the code does
function getTotal(arrayOfNumbers) {

  var sum = arrayOfNumbers[0];

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    console.log("the current sum is: " + sum);
  }

  console.log("the total is: " + sum);

}

getTotal([1, 3, 5]);