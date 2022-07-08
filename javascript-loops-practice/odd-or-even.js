/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddOrEvenStr = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenStr.push('even');
    } else {
      oddOrEvenStr.push('odd');
    }
  }
  return oddOrEvenStr;
}
