function handleType(event) {
  if (counter === $panCollection.length) {
    return;
  }
  if (event.key !== $panCollection[counter].textContent) {
    $panCollection[counter].setAttribute('class', 'red');
  } else {
    $panCollection[counter].setAttribute('class', 'green');
    if (($panCollection.length - counter) > 1) {
      $panCollection[counter + 1].setAttribute('class', 'underline');
    } else {
      // console.log('Success, you did it!');
    }
    counter++;
  }
}

var $panCollection = document.querySelectorAll('span');
var counter = 0;
document.addEventListener('keydown', handleType);
