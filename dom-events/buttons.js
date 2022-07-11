function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

function mouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var $clickButton = document.querySelector('button.click-button');
$clickButton.addEventListener('click', handleClick);

var $hoverButton = document.querySelector('button.hover-button');
// console.log($hoverButton);
$hoverButton.addEventListener('mouseover', mouseOver);

var $doubleButton = document.querySelector('button.double-click-button');
// console.log($doubleButton);
$doubleButton.addEventListener('dblclick', handleDoubleClick);
