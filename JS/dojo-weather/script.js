var tempUnit = document.querySelector('#temp-unit')
var highSpans = document.querySelectorAll('.high')
var highs = []

for (var i = 0; i < highSpans.length; i++){
  highs.push(highSpans[i].innerText)
}

// console.log('highs: ', highs)

var lowSpans = document.querySelectorAll('.low')
var lows = []

for (var i = 0; i < lowSpans.length; i++){
  lows.push(lowSpans[i].innerText)
}

// console.log('lows: ', lows)

function remove(element){
  element.remove()
}

/* 

1. User selects unit for temperature
2. 

*/

function changeUnit(){
  if (tempUnit.value == 'f'){
    console.log('user selected fahrenheit')
    for(var i  = 0; i < highs.length; i++){
      highSpans[i].innerText = Math.floor((highs[i] * 9/5) + 32)
    }
    for(var i  = 0; i < lows.length; i++){
      lowSpans[i].innerText = Math.floor((lows[i] * 9/5) + 32)
    }
    console.log('highs', highs)
    console.log('lows', lows)
  } else {
    console.log('user selected celsius')
    for(var i = 0; i < highs.length; i++){
      highSpans[i].innerText = highs[i]
    }
    for(var i = 0; i < lows.length; i++){
      lowSpans[i].innerText = lows[i]
    }
  }
}