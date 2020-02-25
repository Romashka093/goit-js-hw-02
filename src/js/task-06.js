'use strict';

console.warn('TASK - 06');

// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
// пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of.
// После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

// 🔔 Делать проверку того, что пользователь ввел именно число,
// а не произвольный набор символов, не обязательно. Если хочешь,
// в случае некорректного ввода,
// показывай alert с текстом 'Было введено не число, попробуйте еще раз',
// при этом результат prompt записывать в массив чисел не нужно,
// после чего снова пользователю предлагается ввести число в prompt.

let input;
const numbers = [];
let total = 0;

// // option-03

// do {
//   input = prompt('Введите число:');
//   if (!isNaN(input)) {
//     numbers.push(Number(input));
//   } else {
//     alert('Было введено не число, попробуйте еще раз!');
//   }
// } while (input !== null);

// for (let number of numbers) {
//   total += number;
// }

// alert(`Общая сумма чисел равна ${total}`);

// // option-02

// do {
//   input = prompt('Введите число:');
//   let number = Number(input);
//   numbers.push(number);
//   console.log(numbers);
//   if (!isNaN(number)) {
//     total += number;
//   } else {
//     alert('Было введено не число, попробуйте еще раз!');
//   }
// } while (input !== null);
// alert(`Общая сумма чисел равна ${total}`);

// option-01

for (let index = 0; index !== null; index + 1) {
  input = Number(prompt('Введите число'));
  numbers.push(input);
  total = total += input;
  if (input === 0) {
    alert('Было введено не число, попробуйте еще раз!');
    break;
  }
}
alert(`Общая сумма чисел равна ${total}`);

console.log('User value: ', input);
console.log('Arry of numbers: ', numbers);
console.log('Total amount: ', total);
