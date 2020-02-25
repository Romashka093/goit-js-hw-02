'use strict';

console.log('TASK - 03');

// Напиши фукцнию findLongestWord(string), которая принимает параметром
// произвольную строку (в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
  let strArr = string.split(' ');
  let longestWord = strArr[0];
  for (let index = 0; index < strArr.length; index++) {
    if (strArr[index].length > longestWord.length) {
      longestWord = strArr[index];
    }
  }
  return longestWord;
};

// Вызовы функции для проверки работоспособности реализации.

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
