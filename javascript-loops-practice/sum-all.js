/* exported sumAll */
function sumAll(numbers) {
  var totalSum = 0;
  for (var i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
  return totalSum;
}
