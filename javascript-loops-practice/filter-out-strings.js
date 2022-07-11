/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStringArr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) !== 'string') {
      noStringArr.push(values[i]);
    }
  }
  return noStringArr;
}
