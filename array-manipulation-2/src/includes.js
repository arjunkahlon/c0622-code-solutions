/* exported includes */
// Pseudocode
// The function has two parameters: array and value
// The function returns a boolean indiciating wheter the value was found
//   at any index of the parameter array.
// The function begins assigning the Boolean value false to a variable named
//   valueFound.
// The function then iterates through the array beginning at index 0.
// The function performs a strict equality comparison operator between the
//   value of the current index of the array with the parameter value.
// If the function finds a match, it updates the Boolean value of valueFound
//   to true.
// After the loop exits, the function returns valueFound.

function includes(array, value) {
  var valueFound = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      valueFound = true;
      break;
    }
  }
  return valueFound;
}
