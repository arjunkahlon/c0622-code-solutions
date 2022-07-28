/* exported equal */
// Pseudocode
// Implement a guard clause to ensure that the two lengths are equal.
// Iterate through the first array and return false if the index of the first
//  array is not equal to the same index of the second array.
// Otherwise, return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
