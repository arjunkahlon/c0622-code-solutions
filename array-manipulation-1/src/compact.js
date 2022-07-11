/* exported compact */
// Pseducode
// After reviewing the tests, I discovered the pattern. The function compact()
//   only seemed to return truthy elements. This was clear from the omission of
//   false, nullm NaN, 0, -0, undefinied, and empty strings. The final function
//   call was the giveaway has the output matched the input of truthy elements.
//
// The solution for this algorithm is simple. We pass an array in the function
//   and check the truth of each index of the passed in array.
// If the index is
//   true, it is added to compactArr which is returned after the array iteration.
// Finally, the function returns the compactArr array

function compact(input) {
  var compactArr = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i]) {
      compactArr.push(input[i]);
    }
  }
  return compactArr;
}
