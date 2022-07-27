/* exported titleCase */
/* ----------------------------------------------------------------------- */
// Pseudocode

// First, we will need initialize the parameter string for usage
// We will  convert the title parameter into all lower case characters.
// Next we will be convert the all lower case string into an array of words
// Now we will need to divide this algorithm into subproblems
// The first subproblem will handle special case words that are specified
//  in the instructions as either conjunctions, articles, and prepositions. These
//  words contain less than 4 words and are considered minor words that should not
//  be capitaized. All other words should be capitalized.
//  -This subproblem will be implemented by utiling an array containing the
//   special case words. A string will be passed in as an arguement and the function
//   will return true if the parameter string is considered a special case. Otherwise,
//   it will return false.
// The second subproblem will handle capitalizing the first letter of the words
//   that will be capitalized.
//  -This subproblem will be implemented by looping through the parameter string, and
//   adding each indexed char to a new string, making sure to capitalize the character
//   stored at index 0 of the parameter string. The function will return this string.
// The third subproblem will handle words with a colon character.
//  -This subproblem will be implemented by removing the colon from the word before
//   passing the word into other functions for further testing. After the other functions
//   complete, the colon will be readded to the word.
// The fourth subproblem will handle the special words: JavaScript and API
//  -This subproblem will be implemented by checking if a parameter string is strictly
//   equal to either word, and return true if it is. The correct spelling of both words
//   will be returned.
// The fifth subproblem will handle words with an hyphen.
//  -This subproblem will be implemented by checking the parameter string to see if it
//   contains a hyphen. It it does contain a hyphen, the character immediately after the
//   hyphen will be capitalized.
// -----------------------------------------------------------------------------------
// This brings us to implementing all the subproblems into one cohesive procedure.
//  -This procedure will be implemented in the capitalizeTitle function. The function
//   has one parameter, the array we created earlier of lowercase words.
//  -The function will create an empty array that will store the proper capitalization
//   of the sentence.
//  -The first word of the title is unique as it will always be capitalized. Thus, we will
//   handle the first word of the array before looping through the remaining words.
//    1. We will check if the first words contains a hyphen and will capitalize the character
//     after the hyphen if the condition is met.
//    2. We will then check if the first word contains a colon. If it does we will remove the colon
//      and then check if the word is either JavaScript or API. If the word is
//      JavaScript or API, knowing that the word has a colon, we can capitalize
//      the first letter of the next word in the word parameter. Finally, we can
//      re-attach the colon to the first word.
//     3. If the first word does not contain a colon, we can then check if
//      the word is JavaScript or API and apply the proper capitalization. If
//      the word is not JavaScript or API, we can go ahead and capitalize the
//      first letter as it is the first word of our title. This completes the
//      first word of the title.
//  -The remaining words of our title will be treated with the same procedure as
//   one another, and thus, will be done iteratively in a for loop.
//    1. We will check if the word contains a hyphen and will capitalize the
//     character after the hyphen if the condition is met.
//    2. We will then check if the word contains a colon. If it does, we will
//     remove the colon and then check if the word is JavaScript of API. If the
//     the word is JavaScript or API, we can capitalize the first character of the
//     word located after the current word in the array, since the current word has
//     a colon. Finally, we can reattach the colon to the current word.
//    3. If the word does not contain a colon, we can then check if the word is
//     JavaScript or API, and apply the proper capitalization.
//    4. Finally, we can check if the current word is a minor word of less than
//     four characters. If the current word is not a minor word, we can capitalize
//     the first character of the word. If the word is a minor word, we can go ahead
//     and simply push the already lowercased word into the new array.
//    5. Finally, the function returns the new array.
// -----------------------------------------------------------------------------------
// This brings us into the titleCase function.
//  1. The function parameter named title, will be lower cased and converted
//   to an array using my stringToArr function. The result of this expression
//   will be stored in the variable titleArr.
//  2. The titleArr will then be passed into my capitalizeTitle function which
//   will return an array of properly capitalized words. The array will be stored
//   in the variable capArr.
//  3. The variable capArr will then be converted to string utilizing my arrToString
//   function. The result of this conversion will be stored in a variable named capStr.
//  4. Finally, the titleCase function will return this string containing the properly
//   capitalized title.
/* ----------------------------------------------------------------------- */

function titleCase(title) {
  var titleArr = stringToArr(title.toLowerCase());
  var capArr = capitalizeTitle(titleArr);
  var capStr = arrToString(capArr);
  return capStr;
}

// First word in title array
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
    } else {
      capitalizeFirstLetter(titleArr[0]);
    }
  }
  newArr.push(capitalizeFirstLetter(titleArr[0]));

  // Remaining words in title array
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
