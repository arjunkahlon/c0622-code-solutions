/* exported union */
// Pseudocode
// Declare an empty array to hold unique values
// Iterate through the first paramater array, only pushing indexed values if the
//   unique array does not contain them.
// Iterate through the second parameter array, only pushing indexed values if the
//   unique array does not already include them.
// Return the unique array

function union(first, second) {
  var uniqueArr = [];
  for (let i = 0; i < first.length; i++) {
    if (!uniqueArr.includes(first[i])) {
      uniqueArr.push(first[i]);
    }
  }

  for (let i = 0; i < second.length; i++) {
    if (!uniqueArr.includes(second[i])) {
      uniqueArr.push(second[i]);
    }
  }
  return uniqueArr;
}
