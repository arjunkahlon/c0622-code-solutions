/* exported defaults */
function defaults(target, source) {
  var sourceArr = Object.getOwnPropertyNames(source);
  var targetArr = Object.getOwnPropertyNames(target);

  for (let i = 0; i < sourceArr.length; i++) {
    if (!(targetArr.includes(sourceArr[i]))) {
      target[sourceArr[i]] = source[sourceArr[i]];
    }
  }
}
