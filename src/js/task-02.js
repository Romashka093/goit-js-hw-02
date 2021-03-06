'use strict';

console.warn('TASK - 02');

// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
// принимающую строку (в строке будут только слова и пробелы) и цену гравировки
// одного слова, и возвращающую цену гравировки всех слов в строке.

// option-01

const calculateEngravingPrice = function(message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
};

// option-02

// const calculateEngravingPrice = (message, pricePerWord) =>
//   message.split(' ').length * pricePerWord;

// option-03

// const calculateEngravingPrice = (message, pricePerWord) => {
//   return message.split(' ').length * pricePerWord;
// };

// Вызовы функции для проверки работоспособности реализации.

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
