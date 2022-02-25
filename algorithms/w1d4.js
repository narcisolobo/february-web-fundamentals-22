/*
Week 1 Day 4 - Go With the Code Flow

Today we're going to get deeper down in thinking about code and working out what order the computer sees it in.

Code Flow - Functions
What are functions even?

A function is a series of instructions to accomplish a task.
Like a recipe. It has ingredients (parameters) and instructions (code block). IT DOES NOT RUN UNTIL YOU CALL IT BY NAME.
*/

// Global scope
var x = 5;

// FUNCTION DECLARATION
// In the decalartion these are called parameters
function setX(newValue) {
  // creating a variable inside a function gives it function scope.
  // this x is the global scope
  x = newValue; // <-- code block
}

console.log(x); // --> 5

// CALLING THE FUNCTION, INVOKING THE FUNCTION
// When we call the function, they're called arguments
setX(15);
console.log(x); // --> 15

// Variables have scope.

// There was a contest to see who could come up with the best name for an iterator variable.There

// i won

// let and const


function createVar() {
  var newVar = "Narciso"
  return newVar
}

// THE VALUE OF A FUNCTION IS WHATEVER THAT FUNCTION RETURNS

var catchersMitt = createVar()

console.log(catchersMitt)

// The Return of return
var x = 5;

function addToX(amount) {
  // A RETURN STATEMENT ENDS THE FUNCTION
  return x + amount;
  console.log("hello there");
}

console.log(x); // --> 5
var result = addToX(-10); // --> NADA
console.log(result); // --> -5
console.log(x); // --> 5

// When we console.log a function call, we are console.logging whatever that function RETURNS.
console.log(addToX(9))

/*
Code Flow - Is the Array a Palindrome
A palindrome is a word that is spelled the same if read forwards or backwards. Some excellent palindrome examples are:

racecar
tacocat
But in our case we'll be looking at some arrays, can the values in the array be read the same forwards as backwards
*/


function isPal(arr) {
  for (var left = 0; left < arr.length / 2; left++) {
    var right = arr.length - 1 - left;
    if (arr[left] != arr[right]) {
      return "Not a pal-indrome!";
    }
  }
  return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);
