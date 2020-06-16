'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

document.write(('Сегодня ') + week[new Date().getDay()] + ', ');
document.write(new Date().getDate() + ' ' + month[new Date().getMonth()] + ' ');
document.write(new Date().getFullYear() + ('года, '));
let h = new Date().getHours();
if (h === 1 || h === 21) {
  document.write(new Date().getHours() + (' час ')); 
}
if (h === 2 || h === 3 || h === 4 || h === 22 || h === 23 || h === 24) {
  document.write(new Date().getHours() + (' часа '));
}
document.write(new Date().getHours() + (' часаов '));
document.write(new Date().getMinutes() + (' минут '));
document.write(new Date().getSeconds() + (' секунды'));

document.write('</br>');
document.write('</br>');


if (new Date().getDate() >= 10 || new Date().getDate() == 0) {
  document.write(new Date().getDate() + '.');
} else {
  document.write(('0') + new Date().getDate() + '.');
}
if (new Date().getMonth() >= 10 || new Date().getMonth() == 0) {
  document.write(new Date().getMonth() + '.');
} else {
  document.write(('0') + new Date().getMonth() + '.')
}
document.write(new Date().getFullYear() + (' - '));
if (h >= 10 || h !== 0) {
  document.write(new Date().getHours() + (':'));
} else {
  document.write(('0') + new Date().getHours() + (':')); 
}

if (new Date().getMinutes() >= 10 || new Date().getMinutes() == 0) {
  document.write(new Date().getMinutes() + (':'));
} else {
  document.write(('0') + new Date().getMinutes() + (':')); 
}

if (new Date().getSeconds() >= 10 || new Date().getSeconds() == 0) {
  document.write(new Date().getSeconds());
} else {
  document.write(('0') + new Date().getSeconds());
}


document.write('</br>');
document.write('</br>');


setInterval("calcDate()",1000);

function calcDate() {

    let date = new Date().getDate() + '.',
        month = new Date().getMonth() + '.',
        year = new Date().getFullYear() + (' - '),
        hour = new Date().getHours() + (':'),
        minutes = new Date().getMinutes() + (':'),
        seconds = new Date().getSeconds();

    if (date < 10) {
      date = ('0') + new Date().getDate() + '.';
    }
    if (month < 10) {
      month = ('0') + new Date().getMonth() + '.';
    }
    if (hour < 10) {
      hour = ('0') + new Date().getHours() + (':'); 
    }

    if (minutes < 10) {
      minutes = ('0') + new Date().getMinutes() + (':');
    }

    if (seconds < 10) {
      seconds = ('0') + new Date().getSeconds();
    }

  //Выводим строку, содержащую дату и время в элемент с id="clock"
   document.getElementById("date").innerHTML =  date + month + year + hour + minutes+ seconds;
}





