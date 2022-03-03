/* 

API's what are they even?
Application Programming Interface

1. Access Data
2. Hides complexity
3. Extends functionality
4. Security

*/

/*

User Experience Algorithm

1. User enters username into search box
2. Card displays on page

Development Side Algorithm

1. Grab value of search box
2. Create API request with search box value
3. Parse the API response
4. Build each usercard dynamically with the parsed response values
5. Display each usercard

*/

// API response will usually come back in JSON format (JavaScript Object Notation)
var currentUsername = ''
var cardsContainer = document.querySelector('#cards-container')

function getUsername(element) {
  // console.log(element.value)
  currentUsername = element.value
  // Template Literal Notation
  // console.log(`Current username: ${currentUsername}`)
}

function makeCoderCard(data) {
  var card =
`<div class="card">
  <img class="card-image" src="${data.avatar_url}" alt="${data.login}">
  <div class="card-body">
      <h3>${data.name}</h3>
      <h4>${data.login}</h4>
      <p>Location: ${data.location}</p>
      <p>Repositories: ${data.public_repos}</p>
  </div>
</div>`
  return card
}

async function search(e) {
  e.preventDefault()
  var response = await fetch(`https://api.github.com/users/${currentUsername}`)
  var coderData = await response.json()
  // console.log(coderData.location)
  cardsContainer.innerHTML = makeCoderCard(coderData) + cardsContainer.innerHTML
}