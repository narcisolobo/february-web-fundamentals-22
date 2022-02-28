/* 

Arrays - What are they even?
Arrays are another reference datatype - like JS objects.
Arrays can hold more than one value - each value can be referenced by their index number - which ALWAYS starts at 0. We call this zero-indexed.

*/

var colors = ['red', 'green', 'purple', 'white', 'brown']

colors[2] = 'yellow'

console.log(colors[2]);

var narciso = [
  'Narciso',
  'Lobo',
  2.5,
  false,
  ['red', 'green', 'purple', 'white', 'brown']
]

console.log(narciso)

console.log(narciso[4][4])

// Week 1 Day 5 - Work hard to get Arrays
// How to swap variables

var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1); // --> 'apples and apples'

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

// While loops
// We have previously worked with for loops, how are while loops different?
// WHOA, it's like a deconstructed for loop!

var start = 0;
var end = 12;

while (start < end) {
  console.log("start: " + start + ", end: " + end);
  start += 2;
  end -= 2;
}

// --> start: 0, end: 12
// --> start: 2, end: 10
// --> start: 4, end: 8


// 1. Sentry
// 2. Where it starts
// 3. Where it ends
// 4. How it changes

/*

Reversing an array
Write a function reverse( arr ) to reverse an array, if we were given...

["a", "b", "c", "d", "e"];
we expect to get back...
["e", "d", "c", "b", "a"];

Reverse the array in place - meaning we're mutating the original array. We cannot create a new array.

*/

// REMEMBER YOUR PSEUDOCODE!!!
// We want to know WHAT to do before we figure out HOW to do it.



function reverse(arr){
  for(var i = 0; i < Math.floor(arr.length/2); i++){
    var temp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
    console.log(arr)
  }
}

reverse(['a', 'b', 'c', 'd', 'e', 'f'])