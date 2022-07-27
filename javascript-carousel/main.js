var images = ['001.png', '004.png', '007.png', '025.png', '039.png'];
var currentIndex = 0;
var $corouselImage = document.querySelector('#carousel-image');
var $cirlces = document.querySelectorAll('.fa-circle');
var $carouselCircles = document.querySelector('#indication-carousel');
$carouselCircles.addEventListener('click', clickCircle);

var $arrowLeft = document.querySelector('#left-arrow');
var $arrowRight = document.querySelector('#right-arrow');

$arrowLeft.addEventListener('click', clickLeft);
$arrowRight.addEventListener('click', clickRight);

var intervalID = setInterval(imageInterval, 3000);

function clickLeft(event) {
  if (event.target.getAttribute('id') !== 'left-arrow') {
    return;
  }
  if (currentIndex === 0) {
    $cirlces[currentIndex].className = 'far fa-circle';
    currentIndex = 4;
  } else {
    $cirlces[currentIndex].className = 'far fa-circle';
    currentIndex--;
  }
  updateImage();
  resetInterval();
}

function clickRight(event) {
  if (event.target.getAttribute('id') !== 'right-arrow') {
    return;
  }
  if (currentIndex === 4) {
    $cirlces[currentIndex].className = 'far fa-circle';
    currentIndex = 0;
  } else {
    $cirlces[currentIndex].className = 'far fa-circle';
    currentIndex++;
  }
  updateImage();
  resetInterval();
}

function imageInterval() {

  $cirlces[currentIndex].className = 'far fa-circle';
  if (currentIndex < 4) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateImage();
}

function updateImage() {
  $corouselImage.setAttribute('src', './images/' + images[currentIndex]);
  $cirlces[currentIndex].className = 'fas fa-circle';
}

function resetInterval() {
  clearInterval(intervalID);
  intervalID = setInterval(imageInterval, 3000);
}

function clickCircle(event) {
  if (!(event.target.classList.contains('fa-circle'))) {
    return;
  }
  // console.log('circle clicked');
  $cirlces[currentIndex].className = 'far fa-circle';
  currentIndex = parseInt(event.target.getAttribute('id'));
  updateImage();
  resetInterval();
}
