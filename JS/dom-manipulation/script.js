var heading = document.querySelector('#title')
console.log(heading)
var firstName = document.querySelector('#first-name')
console.log(firstName)
var pparker = document.querySelector('#peter-parker')
console.log(pparker)
var favCity = document.querySelector('#city')
console.log(favCity)
var outputDiv = document.querySelector('#favorite-city')

function change(heading){
  heading.innerText = "BOOYAH"
}

function hello() {
  alert('Hello, ' + firstName.value + '!')
}

function spidey(){
  pparker.src = './images/spidey.jpeg'
}

function petey(){
  pparker.src = './images/parker.jpeg'
}

function populateDiv() {
  outputDiv.innerText = `Your favorite city is ${favCity.value}! You're wrong, by the way.`
}