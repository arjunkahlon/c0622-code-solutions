/* exported zip */
// Pseudocode
// Define a function for returning the shorter length of two parameter arrays and
//  store the return of that function call into a variable for loop control.
// Declare a new array.
// Iterate through both arrays utilizing the loop control in the conditional.
// In each loop iteration, declare a sub array and push the index of each parameter
//  array into the sub array. Then push the sub array into the new array.
// Return the new array.
function zip(first, second) {
  var loopControl = shorterLength(first, second);
  var newArr = [];
  for (let i = 0; i < loopControl; i++) {
    var subArr = [];
    subArr.push(first[i]);
    subArr.push(second[i]);
    newArr.push(subArr);
  }
  return newArr;
}

function shorterLength(arr1, arr2) {
  if (arr1.length < arr2.length) {
    return arr1.length;
  } else if (arr1.length > arr2.length) {
    return arr2.length;
  }
  return arr1.length;
}
