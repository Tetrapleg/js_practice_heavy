'use strict';

let weekArr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let monthArr = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

document.write(('Сегодня ') + weekArr[new Date().getDay()] + ', ');
document.write(new Date().getDate() + ' ' + monthArr[new Date().getMonth()] + ' ');
document.write(new Date().getFullYear() + (' года, '));
declinationOfHours (new Date().getHours());
document.write(new Date().getMinutes() + (' минут '));
document.write(new Date().getSeconds() + (' секунды'));

function declinationOfHours (h) {
  if (h === 1 || h === 21) {
    document.write(h + (' час ')); 
  }
  if (h === 2 || h === 3 || h === 4 || h === 22 || h === 23 || h === 24) {
    document.write(h + (' часа '));
  }
  document.write(h + (' часаов '));
}

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
if (new Date().getHours() >= 10 || new Date().getHours() !== 0) {
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

    let date = new Date().getDate(),
        month = new Date().getMonth(),
        year = new Date().getFullYear(),
        hour = new Date().getHours(),
        minutes = new Date().getMinutes(),
        seconds = new Date().getSeconds();

    function nullBeforeDate (a) {
      if (a < 10) {
        a = ('0') + a;
      }
      return a;
    }


  //Выводим строку, содержащую дату и время в элемент с id="date"
   document.getElementById("date").innerHTML =  nullBeforeDate(date) + '.' + nullBeforeDate(month) + '.' + nullBeforeDate(year) + (' - ') + nullBeforeDate(hour) + (':') + nullBeforeDate(minutes) + (':') + nullBeforeDate(seconds);
}





