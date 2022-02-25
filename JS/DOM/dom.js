console.dir(this)

function change(element){
  element.innerText = 'FEED ME SEEMORE'
}

function addBgColor(element){
  element.style.backgroundColor = 'rebeccapurple'
  element.style.color = 'white'
}

// Create an object
// Using object literal notation

// Reference datatypes (arrays, and objects)
// Inside an object, we have pairs of keys and values (key-value pairs)

var myCar = {
  'color': 'red',
  'make': 'Jeep',
  'model': 'Wrangler',
  'num_wheels': 4,
  'drive': function(){
    console.log('driving...');
  },
  'show_stats': function(){
    // Template literal notation
    console.log(`This is a ${this.color} ${this.make} ${this.model}.`)
  }
}

// Getting and setting values in an object

// Getting values with dot notation
// console.log(myCar.model)
// // Setting values with dot notation
// myCar.color = 'green'
// console.log(myCar)

// Getting values with bracket notation
// console.log(myCar['model'])
// // Setting values with bracket notation
// myCar['color'] = 'blue'
// console.log(myCar)

// myCar.drive()

myCar.show_stats()