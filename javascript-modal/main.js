function handleOpen(event) {
  $surveyPrompt.className = '';
  $overlay.className = 'overlay';
}

function handleClose(event) {
  $surveyPrompt.className = 'hidden';
  $overlay.className = 'overlay hidden';
}

var $openButton = document.querySelector('.button-open');
var $closeButton = document.querySelector('.button-close');
var $surveyPrompt = document.querySelector('#survey-prompt');
var $overlay = document.querySelector('.overlay');

$openButton.addEventListener('click', handleOpen);
$closeButton.addEventListener('click', handleClose);
