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
      var accuracyText = document.createElement('p');
      var accuracy = (Math.floor(correct / totalKeys * 100));
      accuracyText.textContent = 'Congrats. Accuracy: ' + accuracy + '%';
      $complete.appendChild(accuracyText);
    }
    counter++;
  }
}

var $panCollection = document.querySelectorAll('span');
var $complete = document.querySelector('#complete');
var counter = 0;
var totalKeys = 0;
var correct = 0;

document.addEventListener('keydown', handleType);
