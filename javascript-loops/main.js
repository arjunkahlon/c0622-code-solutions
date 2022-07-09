/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';

  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log('Value of string at the index ', i, string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];

  for (var i = 0; i < numbers.length; i++) {
    var doubleNum = numbers[i] * 2;
    doubled.push(doubleNum);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];

  for (var property in object) {
    keys.push(property);
  }
  return keys;
}

function getValues(object) {
  var values = [];

  for (var property in object) {
    values.push(object[property]);
  }
  return values;
}
