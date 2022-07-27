var $heading = document.querySelector('.countdown-display');
var counter = parseInt($heading.textContent);

var intervalID = setInterval(countDown, 1000);

function countDown() {
  counter--;
  $heading.textContent = counter;
  if (counter === 0) {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
