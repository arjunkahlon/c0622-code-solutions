function handleLight(event) {
  if (light === false) {
    light = true;
    $circle.setAttribute('class', 'circle dark');
    $background.setAttribute('class', 'dark-background');
  } else {
    light = false;
    $circle.setAttribute('class', 'circle light');
    $background.setAttribute('class', 'light-background');

  }

}

var light = false;
var $circle = document.querySelector('.circle');
$circle.addEventListener('click', handleLight);

var $background = document.querySelector('.light-background');
