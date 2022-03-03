/* 

Week 2 Day 2 - So you want to be a JS objects master?
What are objects?

Strings, numbers and booleans are primitive datatypes.
Arrays and objects are a reference datatype.

*/

var num1 = 3
var num2 = num1
num1 = 5

console.log(num2) // --> 3

var obj1 = {
  'key': 4
}
var obj2 = obj1
obj1.key = 5
console.log(obj2) // --> { key: 5 }

// They are pointing () to the same location in memory!

var monster = {
  id: 1,
  name: "Bulbasaur",
  types: ["poison", "grass"]
};

/*

Using the monster variable above how could we access the name?
Using the monster variable above how could we access the 2nd type?
Arrays of Objects

*/

console.log(monster.name)
console.log(monster.types[1])

// This is an array of objects

var pokémon = [
  { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
  { "id": 5, "name": "Charmeleon", "types": ["fire"] },
  { "id": 9, "name": "Blastoise", "types": ["water"] },
  { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
  { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
  { "id": 23, "name": "Ekans", "types": ["poison"] },
  { "id": 24, "name": "Arbok", "types": ["poison"] },
  { "id": 25, "name": "Pikachu", "types": ["electric"] },
  { "id": 37, "name": "Vulpix", "types": ["fire"] },
  { "id": 52, "name": "Meowth", "types": ["normal"] },
  { "id": 63, "name": "Abra", "types": ["psychic"] },
  { "id": 67, "name": "Machamp", "types": ["fighting"] },
  { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
  { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
  { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
  { "id": 98, "name": "Krabby", "types": ["water"] },
  { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
  { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
  { "id": 133, "name": "Eevee", "types": ["normal"] },
  { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
  { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
  { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
  { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

/* 

If we wanted to console.log the names of the pokémon who have an id greater than 99 we could...

*/

for (var i = 0; i < pokémon.length; i++) {
  if (pokémon[i].id > 99) {
    console.log(pokémon[i].name)
  }
}

/* 

Challenges - using the array of pokémon above and loops:
console.log the pokémon objects whose id is evenly divisible by 3
console.log the pokémon objects that have more than one type
console.log the names of the pokémon whose only type is "poison"
console.log the first type of all the pokémon whose second type is "flying"

Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"

*/

// console.log the pokémon objects whose id is evenly divisible by 3
for (var i = 0; i < pokémon.length; i++) {
  if (pokémon[i].id % 3 == 0) {
    console.log(pokémon[i])
  }
}

// console.log the pokémon objects that have more than one type
for (var i = 0; i < pokémon.length; i++) {
  if (pokémon[i].id % 3 == 0) {
    console.log(pokémon[i])
  }
}