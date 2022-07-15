function handleType(event) {
  totalKeys++;
  if (counter === $panCollection.length) {
    return;
  }
  if (event.key !== $panCollection[counter].textContent) {
    $panCollection[counter].setAttribute('class', 'red');
  } else {
    correct++;
    $panCollection[counter].setAttribute('class', 'green');
    if (($panCollection.length - counter) > 1) {
      $panCollection[counter + 1].setAttribute('class', 'underline');
    } else {
      results();
    }
    counter++;
  }
}

function results() {
  showResults();
  var $accuracyText = document.querySelector('.accuracy-text');
  var accuracy = (Math.floor(correct / totalKeys * 100));
  $accuracyText.textContent = 'Congrats. Accuracy: ' + accuracy + '%';

  var $playB = document.querySelector('.play');
  $playB.addEventListener('click', playAgain);
}

function playAgain() {
  hideResults();
  for (let i = 0; i < $panCollection.length; i++) {
    $panCollection[i].setAttribute('class', '');
  }
  counter = 0;
  totalKeys = 0;
  correct = 0;
}

function showResults() {
  $complete.className = 'center-text';
}

function hideResults() {
  $complete.className = 'center-text hidden';
}

var $panCollection = document.querySelectorAll('span');
var $complete = document.querySelector('#complete');
var counter = 0;
var totalKeys = 0;
var correct = 0;

document.addEventListener('keydown', handleType);
