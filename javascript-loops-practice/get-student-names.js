/* exported getStudentNames */
function getStudentNames(students) {
  var nameArr = [];
  for (var key in students) {
    nameArr.push(students[key].name);
  }
  return nameArr;
}
