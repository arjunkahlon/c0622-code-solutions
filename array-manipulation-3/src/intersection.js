/* exported intersection */
// Pseudocode
// Declare an empty array to hold the intersecting values.
// Iterate through the first array, checking if the second parameter array
//   contains the value at the current index of the first array. If it does,
//   push the indexed value into the new Array.
// Similarly, iterate through the second array, checking if the first parameter array
//   contains the value at the current index of the second array and if the new array
//   does not already contain this value. If the conditions are met, push the value into
//   the new array.
// Return the new array.

function intersection(first, second) {
  var newArr = [];

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (first.includes(second[i]) && !newArr.includes(second[i])) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
