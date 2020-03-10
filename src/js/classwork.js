'use strict';

console.warn('CLASS WORK');

// const users = ['aNn', 'SeRg', 'LoliTa', 'Liza', 'dog'];

// const foo = function(array) {
//   const result = [];

//   for (let index = 0; index < array.length; index++) {
//     const user = array[index];
//     // console.log(user);
//     result.push(user[0].toUpperCase() + user.slice(1).toLowerCase());
//   }

//   return result;
// };

// console.log(foo(users)); //['Ann', 'Serg', 'Lolita', 'Liza', 'Dog']

// task-02:
// How many kilometers can drive a cars (2:disel = consumption per 100 km : type of fuel // Lambar:10^11:gaz)?

const cars = [
  'Lambar:10^11:gaz',
  'Opel:13:gaz',
  'Vaz:44^12:disel',
  'Jamaha:13:disel',
  'BMW:23:gaz',
];

const carsInfo = (array, setup) => {};

console.log(carsInfo(cars, '2:disel')); // Vaz 2800 km, Jamaha 650 km
console.log(carsInfo(cars, '4:gaz')); // Lambar 525 km, Opel 325 km, BMW 575 km
console.log(carsInfo(cars, '3:disel')); // Vaz 1860 km, Jamaha 430 km
