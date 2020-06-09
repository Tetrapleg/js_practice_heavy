'use strict';


let lang = confirm('Для перехода на русский язык нажмите "ДА", для перехода на английский "НЕТ"');
let rus = 'Дни недели на русском';
let eng = 'Дни недели на английском';

if (lang) {
  console.log(rus);
} else {
  console.log(eng);
}

switch (lang) {
  case true:
    console.log(rus);
    break;
  default:
    console.log(eng);
}

let arrLang = [eng, rus];

console.log(arrLang[Number(lang)]);

let arrMulti = [['Day on', 'Дни недели на'], ['english', 'русском']];
console.log(arrMulti[0][Number(lang)] + ' ' + arrMulti[1][Number(lang)]);




let namePerson = prompt('Введите Ваше имя');

namePerson === 'Артем' ? console.log(namePerson + ' - директор') : 
  namePerson === 'Максим' ? console.log(namePerson + ' - преподаватель') : 
  console.log(namePerson + ' - студент');

