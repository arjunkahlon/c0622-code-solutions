function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event target name:', event.target.name);
}

function handleBlur(event) {
  console.log('blue event was fired');
}

function handleInput(event) {
  console.log('event target name: ', event.target.name);
  console.log('event target value: ', event.target.value);
}

var $inputName = document.querySelector('#user-name');
var $inputEmail = document.querySelector('#user-email');
var $userText = document.querySelector('#user-message');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$userText.addEventListener('focus', handleFocus);
$userText.addEventListener('blur', handleBlur);
$userText.addEventListener('input', handleInput);
