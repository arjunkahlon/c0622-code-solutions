/* exported titleCase */
/* ----------------------------------------------------------------------- */
// Pseudocode

// First, we will need initialize the parameter string for usage
// We will  convert the title paramter into all lower case characters.
// Next we will be convert the all lower case string into an array of words
// The second subproblem will handle special case words that are specified
//  in the instructions as either conjunctions, articles, and prepositions
/* ----------------------------------------------------------------------- */

function titleCase(title) {
  var titleArr = stringToArr(title.toLowerCase());
  var capArr = capitalizeTitle(titleArr);
  var capStr = arrToString(capArr);
  return capStr;
}

function capitalizeTitle(titleArr) {
  var newArr = [];
  if (containsHyphen(titleArr[0])) {
    titleArr[0] = capitalizeHyphen(titleArr[0]);
  }

  if (containsColon(titleArr[0])) {
    titleArr[0] = removeColon(titleArr[0]);
    if (isJSOrAPI(titleArr[0])) {
      titleArr[0] = capitalizeJSOrAPI(titleArr[0]);
      titleArr[1] = capitalizeFirstLetter(titleArr[1]);
      titleArr[0] = addColon(titleArr[0]);
    }
  } else {
    if (isJSOrAPI(titleArr[0])) {
      titleArr[0] = capitalizeJSOrAPI(titleArr[0]);
    }
  }

  newArr.push(capitalizeFirstLetter(titleArr[0]));
  for (let i = 1; i < titleArr.length; i++) {
    if (containsHyphen(titleArr[i])) {
      titleArr[i] = capitalizeHyphen(titleArr[i]);
    }

    if (containsColon(titleArr[i])) {
      titleArr[i] = removeColon(titleArr[i]);
      if (isJSOrAPI(titleArr[i])) {
        titleArr[i] = removeColon(titleArr[i]);
        titleArr[i] = capitalizeJSOrAPI(titleArr[i]);
        titleArr[i + 1] = capitalizeFirstLetter(titleArr[i + 1]);
      }
      titleArr[i + 1] = capitalizeFirstLetter(titleArr[i + 1]);
      titleArr[i] = addColon(titleArr[i]);
    } else {
      if (isJSOrAPI(titleArr[i])) {
        titleArr[i] = capitalizeJSOrAPI(titleArr[i]);
      }
    }

    if (!(isSpecialCase(titleArr[i]))) {
      newArr.push(capitalizeFirstLetter(titleArr[i]));
    } else {
      newArr.push(titleArr[i]);
    }
  }
  return newArr;
}

function arrToString(arr) {
  var newStr = '';
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      newStr += arr[i] + ' ';
    } else {
      newStr += arr[i];
    }
  }
  return newStr;
}

function stringToArr(string) {
  var arr = [];
  for (let i = 0; i < string.length; i++) {
    var subStr = '';
    while (string[i] !== ' ' && i < string.length) {
      subStr += string[i];
      i++;
    }
    arr.push(subStr);
  }
  return arr;
}

function isSpecialCase(string) {
  var conjunctions = ['and', 'or', 'nor', 'but'];
  var articles = ['a', 'an', 'the'];
  var prepositions = ['as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  if (conjunctions.includes(string) || articles.includes(string) || prepositions.includes(string)) {
    return true;
  }
  return false;
}

function containsHyphen(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '-') {
      return true;
    }
  }
  return false;
}

function capitalizeFirstLetter(string) {
  var newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      newStr += string[i].toUpperCase();
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}

function capitalizeHyphen(string) {
  var hyphenString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] === '-' && i > 0) {
      hyphenString += string[i].toUpperCase();
    } else {
      hyphenString += string[i];
    }
  }
  return hyphenString;
}

// function containsFourWords(string) {
//   return string.length >= 4;
// }

function isJSOrAPI(string) {
  if (string === 'javascript' || string === 'api') {
    return true;
  }
  return false;
}

function capitalizeJSOrAPI(string) {
  if (string === 'javascript') {
    return 'JavaScript';
  }
  if (string === 'api') {
    return 'API';
  }

}

function containsColon(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ':') {
      return true;
    }
  }
  return false;
}

function removeColon(string) {
  var noColonString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ':') {
      noColonString += string[i];
    }
  }
  return noColonString;
}

function addColon(string) {
  return string + ':';
}
