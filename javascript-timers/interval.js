var $heading = document.querySelector('.countdown-display');
var counter = parseInt($heading.textContent);
var intervalID = setInterval(countDown, 1000);

function countDown() {
  counter--;
  $heading.textContent = counter.toString();
  if (counter === 0) {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    var $body = document.querySelector('body');
    $body.setAttribute('style', 'background-color: LightBlue');
    clearInterval(intervalID);
  }
}
