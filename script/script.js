'use strict';


let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

document.write(week.join(', ') + ('</br>'));

document.write(week.join('<br>') + ('</br>'));

document.write(('<i>') + week.slice(-2).join(', ') + ('</i>') + ('</br>'));

document.write(('<b>') + week[new Date().getDay()] + ('</b>'));

