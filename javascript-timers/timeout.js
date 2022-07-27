var $heading = document.querySelector('.message');
setTimeout(updateHeading, 2000);
function updateHeading() {
  $heading.textContent = 'Hello There';
}
