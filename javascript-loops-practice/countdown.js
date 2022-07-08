/* exported countdown */
function countdown(number) {
  var countNumbers = [];
  for (var i = number; i >= 0; i--) {
    countNumbers.push(i);
  }
  return countNumbers;
}
