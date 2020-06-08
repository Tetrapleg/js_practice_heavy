'use strict';

let number = 266219;

number = String(number); //Преобразуем наше число в массив

let x = 1; //Переменная для первого умножения

for (let i = 0; i < number.length; i++) {
  x *= number[i];
} //Перемножаем цифры полученного массива

console.log(x);

x **= 3; //Возводим в степень

x = String(x); //Преобразуем полученное число в строку

console.log(x.substring(0, 2)); //Выводим первые две цифры полученного числа

//2 способ
number = 20076;
let str = number + '';
let arr = str.split('');
let sum = arr.reduce(function(acc, item) {
  return +item ? acc * item : acc;
}, 1);
console.log(sum);

