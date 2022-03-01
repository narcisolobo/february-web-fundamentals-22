var banner = document.querySelector('#banner')
var itemCount = document.querySelector('#itemCount')

// function changes to next pic
function nextPic() {
  banner.src = './images/pixel-ninjas-2.png'
}

function prevPic() {
  banner.src = './images/stonepunk.png'
}

function buyItem() {
  itemCount.innerText++
}